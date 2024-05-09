import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchTrips = async () => {
      setLoading(true);
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const response = await fetch(
            "http://192.168.1.16:8000/api/get_trips",
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
  // const trips = [
  //   {
  //     id: 1,
  //     name: "Treepo",
  //     date: "17-4-2024",
  //     fees: 40,
  //     trip_image: require("../../../assets/360_F_113467839_JA7ZqfYTcIFQWAkwMf3mVmhqXr7ZOgEX.jpg"),
  //   },
  //   {
  //     id: 2,
  //     name: "Adventures",
  //     date: "12-3-2024",
  //     fees: 70,
  //     trip_image: require("../../../assets/ChildrenAtAltitude.jpg"),
  //   },
  //   {
  //     id: 3,
  //     name: "Treepo",
  //     date: "17-4-2024",
  //     fees: 40,
  //     trip_image: require("../../../assets/brothers-hike-mountains-children-are-walking-along-mountain-trail-outdoor-activities-with-children-sibling-boy-with-his-brother-traveling_627829-12615.jpg"),
  //   },
  //   {
  //     id: 4,
  //     name: "Treepo",
  //     date: "17-4-2024",
  //     fees: 40,
  //     trip_image: require("../../../assets/brothers-hike-mountains-children-are-walking-along-mountain-trail-outdoor-activities-with-children-sibling-boy-with-his-brother-traveling_627829-12615.jpg"),
  //   },
  //   {
  //     id: 5,
  //     name: "Treepo",
  //     date: "17-4-2024",
  //     fees: 40,
  //     trip_image: require("../../../assets/brothers-hike-mountains-children-are-walking-along-mountain-trail-outdoor-activities-with-children-sibling-boy-with-his-brother-traveling_627829-12615.jpg"),
  //   },
  //   {
  //     id: 6,
  //     name: "Treepo",
  //     date: "17-4-2024",
  //     fees: 40,
  //     trip_image: require("../../../assets/brothers-hike-mountains-children-are-walking-along-mountain-trail-outdoor-activities-with-children-sibling-boy-with-his-brother-traveling_627829-12615.jpg"),
  //   },
  //   {
  //     id: 7,
  //     name: "Treepo",
  //     date: "17-4-2024",
  //     fees: 40,
  //     trip_image: require("../../../assets/brothers-hike-mountains-children-are-walking-along-mountain-trail-outdoor-activities-with-children-sibling-boy-with-his-brother-traveling_627829-12615.jpg"),
  //   },
  //   {
  //     id: 8,
  //     name: "Treepo",
  //     date: "17-4-2024",
  //     fees: 40,
  //     trip_image: require("../../../assets/brothers-hike-mountains-children-are-walking-along-mountain-trail-outdoor-activities-with-children-sibling-boy-with-his-brother-traveling_627829-12615.jpg"),
  //   },
  //   {
  //     id: 9,
  //     name: "Treepo",
  //     date: "17-4-2024",
  //     fees: 40,
  //     trip_image: require("../../../assets/brothers-hike-mountains-children-are-walking-along-mountain-trail-outdoor-activities-with-children-sibling-boy-with-his-brother-traveling_627829-12615.jpg"),
  //   },
  //   {
  //     id: 10,
  //     name: "Treepo",
  //     date: "17-4-2024",
  //     fees: 40,
  //     trip_image: require("../../../assets/brothers-hike-mountains-children-are-walking-along-mountain-trail-outdoor-activities-with-children-sibling-boy-with-his-brother-traveling_627829-12615.jpg"),
  //   },
  // ];
  const handleSearch = (text) => {
    setSearchQuery(text);
  };
  const handleFocus = () => {
    setFocus(true);
  };
  return (
    <View style={styles.trips}>
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
      <ScrollView>
        <View style={styles.container}>
          {trips.map((trip, index) => (
            <View key={trip.id} style={index % 2 === 0 ? styles.row : null}>
              <TripCard
                trip={trip}
                onPress={() => {
                  router.push(`/trips/single`);
                }}
              />
            </View>
          ))}
        </View>
      </ScrollView>
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
    color: "#d7d7d7",
  },
});
