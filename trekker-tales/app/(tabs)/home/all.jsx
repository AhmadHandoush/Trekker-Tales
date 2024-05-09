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
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        trips.map((trip) => <TripCard key={trip.id} trip={trip} />)
      )}
    </View>
  );
};

export default All;

const styles = StyleSheet.create({});
