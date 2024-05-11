import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import TripCard from "../../../Components/TripCard";

import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Back from "../../../Components/back";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyTrip from "../../../Components/mytrip";
import useBaseUrl from "../../../Components/base_url";

const Trips = () => {
  const baseUrl = useBaseUrl();
  const router = useRouter();
  const [focus, setFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [trips, setTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMyTrips, setShowMyTrips] = useState(false);
  const [myTripsData, setMyTripsData] = useState([]);
  const [myTripsLoading, setMyTripsLoading] = useState(false);

  useEffect(() => {
    const fetchTrips = async () => {
      setLoading(true);
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const response = await fetch(
            `${baseUrl}/api/get_trips`,
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
    if (showMyTrips) {
      setMyTripsLoading(true);

      get_mytrips()
        .then((data) => {
          setMyTripsData(data);
          setMyTripsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching My Trips data:", error);
          setMyTripsLoading(false);
        });
    }
  }, [showMyTrips]);

  const get_mytrips = async () => {
    const token = await AsyncStorage.getItem("token");
    try {
      const response = await fetch(
        `${baseUrl}/api/getBookingsByUser`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch My Trips data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

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
          <Text style={[styles.buttonText, !showMyTrips && styles.color]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, showMyTrips && styles.activeButton]}
          onPress={toggleView}
        >
          <Text style={[styles.buttonText, showMyTrips && styles.color]}>
            My Trips
          </Text>
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
        myTripsLoading ? (
          <ActivityIndicator
            animating={myTripsLoading}
            size="medium"
            color="#E87A00"
          />
        ) : (
          <ScrollView style={styles.scroll}>
            <View style={styles.myTripsView}>
              <Text style={styles.mineTitle}>Upcoming Trips</Text>
              {!myTripsData && <Text> You didn't book any trip... </Text>}
              {myTripsData.map((item, index) => (
                <MyTrip item={item} key={index} />
              ))}
            </View>
          </ScrollView>
        )
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
    backgroundColor: "white",
  },
  color: {
    color: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  trips: {
    paddingTop: 80,
    backgroundColor: "white",
    paddingBottom: 60,
  },
  scroll: {
    backgroundColor: "white",
    height: "100%",
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
    justifyContent: "center",
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
    fontWeight: "bold",
  },
  activeButton: {
    backgroundColor: "#E87A00",
    color: "white",
  },
  myTripsView: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  mineTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
});
