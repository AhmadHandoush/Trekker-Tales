import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HighestCard from "../../../Components/highestCard";
import Back from "../../../Components/back";

import { BASE_URL } from "../../utils/constants";
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
            `${BASE_URL}/api/get_highest_rated`,
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
      <Back title={"Highest Rated"} />
      {top.map((item, index) => (
        <View key={item.trip.id} style={index % 2 === 0 ? styles.row : null}>
          <HighestCard item={item} />
        </View>
      ))}
    </View>
  );
};

export default Highest;

const styles = StyleSheet.create({
  highest: {
    display: "flex",
    flex: 1,
    paddingTop: 100,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
