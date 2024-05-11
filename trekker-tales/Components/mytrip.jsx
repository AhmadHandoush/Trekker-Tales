import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import { Link } from "expo-router";
import { BASE_URL } from "../app/utils/constants";

const MyTrip = ({ item }) => {
  const currentDate = new Date();
  const tripDate = new Date(item.trip.date);
  const [current, setCurrent] = useState(false);
  useEffect(() => {
    if (tripDate.toDateString() === currentDate.toDateString()) {
      setCurrent(true);
    }
  }, []);

  return (
    <View style={styles.mine}>
      <View style={styles.mineimg}>
        <Image
          style={styles.mineimage}
          source={{ uri: `${BASE_URL}/${item.trip.trip_image}` }}
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
          <Text>
            Active Now{" "}
            <Link href="/(tabs)/home/mine" style={{ color: "#e87a00" }}>
              Go Live
            </Link>
          </Text>
        )}
        {/* <Text>{currentDate}</Text> */}
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
