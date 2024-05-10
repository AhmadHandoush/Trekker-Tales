import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import TripCard from "../../../Components/TripCard";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Back from "../../../Components/back";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Trips = () => {
  const router = useRouter();
  const [focus, setFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [trips, setTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMyTrips, setShowMyTrips] = useState(false);
  const [myTrips, setMyTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      setLoading(true);
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const response = await fetch(
            "http://192.168.0.102:8000/api/get_trips",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          setTrips(data.trips);
          setLoading(false);
        } else {
          setLoading(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchTrips();
  }, []);

  useEffect(() => {
    const filtered = trips.filter((trip) =>
      trip.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTrips(filtered);
  }, [searchQuery, trips]);

  useEffect(() => {
    // Assuming you have a way to fetch user's trips based on some identifier
    // Here I'm just filtering trips randomly as an example
    const userTrips = trips.filter((trip) => trip.owner === "user");
    setMyTrips(userTrips);
  }, [trips]);

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const toggleView = () => {
    setShowMyTrips(!showMyTrips);
  };

  return (
    <View style={styles.trips}>
      <View style={styles.header}>
        <TouchableOpacity
          style={[styles.button, !showMyTrips && styles.activeButton]}
          onPress={toggleView}
        >
          <Text style={styles.buttonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, showMyTrips && styles.activeButton]}
          onPress={toggleView}
        >
          <Text style={styles.buttonText}>My Trips</Text>
        </TouchableOpacity>
      </View>
      <Back title="Trips" />
      <View style={[styles.search, focus && styles.focused]}>
        <Feather name="map-pin" size={20} color="#d7d7d7" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={handleSearch}
          onFocus={handleFocus}
          value={searchQuery}
          selectionColor={"#E87A00"}
        />
        <Feather name="search" size={20} color="#d7d7d7" />
      </View>
      {loading ? (
        <ActivityIndicator animating={loading} size="medium" color="#E87A00" />
      ) : showMyTrips ? (
        <ScrollView>
          <View style={styles.container}>
            {myTrips.map((trip, index) => (
              <View key={trip.id} style={index % 2 === 0 ? styles.row : null}>
                <TripCard
                  trip={trip}
                  onPress={() => {
                    router.push(`/trips/${trip.id}`);
                  }}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      ) : (
        <ScrollView>
          <View style={styles.container}>
            {filteredTrips.map((trip, index) => (
              <View key={trip.id} style={index % 2 === 0 ? styles.row : null}>
                <TripCard
                  trip={trip}
                  onPress={() => {
                    router.push(`/trips/${trip.id}`);
                  }}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Trips;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 25,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  trips: {
    paddingTop: 60,
    backgroundColor: "white",
    paddingBottom: 60,
  },
  search: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    gap: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#d7d7d7",
    borderRadius: 40,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    marginBottom: 5,
  },
  searchInput: {
    flex: 1,
    color: "black",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#555",
  },
  activeButton: {
    backgroundColor: "#E87A00",
  },
});
