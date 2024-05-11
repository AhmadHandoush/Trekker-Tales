import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TripCard from "../../../Components/TripCard";
import Back from "../../../Components/back";
import useBaseUrl from "../../../Components/base_url";
const All = () => {
  const [trips, setTrips] = useS;
  const baseUrl = useBaseUrl();
  tate([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const response = await fetch(`${baseUrl}/api/get_trips`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          const currentDate = new Date();
          const pastTrips = data.trips.filter(
            (trip) => new Date(trip.date) < currentDate
          );

          setTrips(pastTrips);
          setLoading(false);
        } else {
          setLoading(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <View style={styles.page}>
      <Back title={"Past Trips"} />

      <ScrollView>
        <View style={styles.container}>
          {trips.map((trip, index) => (
            <View key={trip.id} style={index % 2 === 0 ? styles.row : null}>
              <TripCard trip={trip} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default All;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 100,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  page: {
    backgroundColor: "white",
  },
});
