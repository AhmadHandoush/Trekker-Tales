import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HighestCard from "../../../Components/highestCard";

const Highest = () => {
  const [top, setTop] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const response = await fetch(
            "http://192.168.0.103:8000/api/get_highest_rated",
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

          setTop(data);
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
    <View style={styles.highest}>
      {top.map((item) => (
        <HighestCard item={item} key={item.trip.id} />
      ))}
      <Text>Ahmad</Text>
    </View>
  );
};

export default Highest;

const styles = StyleSheet.create({
  highest: {
    display: "flex",
    flex: 1,
    marginTop: 50,
    width: "93%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
