import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import useBaseUrl from "./base_url";
import { Link } from "expo-router";

const MyTrip = ({ item }) => {
  const currentDate = new Date();
  const [current, setCurrent] = useState(true);
  const tripDate = new Date(item.trip.date);
  useEffect(() => {
    if (tripDate == currentDate) {
      setCurrent(true);
    }
  }, []);

  const baseUrl = useBaseUrl();
  return (
    <View style={styles.mine}>
      <View style={styles.mineimg}>
        <Image
          style={styles.mineimage}
          source={{ uri: `${baseUrl}/${item.trip.trip_image}` }}
        />
      </View>
      <View style={styles.mineinfo}>
        <Text style={styles.mineName}>{item.trip.name}</Text>
        <Text style={styles.mineDate}>
          <Icon
            name="calendar"
            size={12}
            color="#808080"
            style={styles.dateicon}
          />{" "}
          {item.trip.date}
        </Text>
        {current && (
          <Link href="/(tabs)/home/mine" style={{ color: "#e87a00" }}>
            Go Live Now
          </Link>
        )}
      </View>
    </View>
  );
};

export default MyTrip;

const styles = StyleSheet.create({
  mine: {
    width: "100%",
    height: 100,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginLeft: "auto",
    marginRight: "auto",
    elevation: 2,
    backgroundColor: "white",

    marginBottom: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
  mineimg: {
    height: "100%",
    width: "40%",
    overflow: "hidden",
  },
  mineimage: {
    width: "100%",
    height: "100%",
  },
  mineName: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#e87a00",
  },
  mineinfo: {
    display: "flex",
    justifyContent: "space-around",
  },
});
