import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TripCard from "../../../Components/TripCard";

const All = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const response = await fetch(
            "http://192.168.0.103:8000/api/get_trips",
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
    <View style={styles.container}>
      {trips.map((trip, index) => (
        <View key={trip.id} style={index % 2 === 0 ? styles.row : null}>
          <TripCard trip={trip} />
        </View>
      ))}
    </View>
  );
};

export default All;

const styles = StyleSheet.create({});
