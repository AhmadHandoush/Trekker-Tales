import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import TripCard from "../../../Components/TripCard";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Trips = () => {
  const router = useRouter();
  const [focus, setFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const trips = [
    {
      id: 1,
      name: "Treepo",
      date: "17-4-2024",
      fees: 40,
      trip_image: require("../../../assets/360_F_113467839_JA7ZqfYTcIFQWAkwMf3mVmhqXr7ZOgEX.jpg"),
    },
    {
      id: 2,
      name: "Adventures",
      date: "12-3-2024",
      fees: 70,
      trip_image: require("../../../assets/ChildrenAtAltitude.jpg"),
    },
    {
      id: 3,
      name: "Treepo",
      date: "17-4-2024",
      fees: 40,
      trip_image: require("../../../assets/brothers-hike-mountains-children-are-walking-along-mountain-trail-outdoor-activities-with-children-sibling-boy-with-his-brother-traveling_627829-12615.jpg"),
    },
    {
      id: 4,
      name: "Treepo",
      date: "17-4-2024",
      fees: 40,
      trip_image: require("../../../assets/brothers-hike-mountains-children-are-walking-along-mountain-trail-outdoor-activities-with-children-sibling-boy-with-his-brother-traveling_627829-12615.jpg"),
    },
    {
      id: 5,
      name: "Treepo",
      date: "17-4-2024",
      fees: 40,
      trip_image: require("../../../assets/brothers-hike-mountains-children-are-walking-along-mountain-trail-outdoor-activities-with-children-sibling-boy-with-his-brother-traveling_627829-12615.jpg"),
    },
    {
      id: 6,
      name: "Treepo",
      date: "17-4-2024",
      fees: 40,
      trip_image: require("../../../assets/brothers-hike-mountains-children-are-walking-along-mountain-trail-outdoor-activities-with-children-sibling-boy-with-his-brother-traveling_627829-12615.jpg"),
    },
    {
      id: 7,
      name: "Treepo",
      date: "17-4-2024",
      fees: 40,
      trip_image: require("../../../assets/brothers-hike-mountains-children-are-walking-along-mountain-trail-outdoor-activities-with-children-sibling-boy-with-his-brother-traveling_627829-12615.jpg"),
    },
    {
      id: 8,
      name: "Treepo",
      date: "17-4-2024",
      fees: 40,
      trip_image: require("../../../assets/brothers-hike-mountains-children-are-walking-along-mountain-trail-outdoor-activities-with-children-sibling-boy-with-his-brother-traveling_627829-12615.jpg"),
    },
    {
      id: 9,
      name: "Treepo",
      date: "17-4-2024",
      fees: 40,
      trip_image: require("../../../assets/brothers-hike-mountains-children-are-walking-along-mountain-trail-outdoor-activities-with-children-sibling-boy-with-his-brother-traveling_627829-12615.jpg"),
    },
    {
      id: 10,
      name: "Treepo",
      date: "17-4-2024",
      fees: 40,
      trip_image: require("../../../assets/brothers-hike-mountains-children-are-walking-along-mountain-trail-outdoor-activities-with-children-sibling-boy-with-his-brother-traveling_627829-12615.jpg"),
    },
  ];
  const handleSearch = (text) => {
    setSearchQuery(text);
  };
  const handleFocus = () => {
    setFocus(true);
  };
  return (
    <View style={styles.trips}>
      <View style={[styles.search, focus && styles.focused]}>
        <Feather name="map-pin" size={20} color="#E87A00" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={handleSearch}
          onFocus={handleFocus}
          value={searchQuery}
          selectionColor={"#E87A00"}
        />
        <Feather name="search" size={20} color="#E87A00" />
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
        {/* {selectedTrip && <TripDetailsPage trip={selectedTrip} />} */}
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
    borderColor: "black",
    borderRadius: 40,
    padding: 5,
    height: 40,
    marginBottom: 5,
  },
  searchInput: {
    flex: 1,
  },
});
