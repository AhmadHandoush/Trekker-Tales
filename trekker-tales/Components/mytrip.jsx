import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import { Link } from "expo-router";
import { BASE_URL } from "../app/utils/constants";
import { Entypo } from "@expo/vector-icons";

const MyTrip = ({ item }) => {
  const currentDate = new Date();
  const tripDate = new Date(item.trip.date);
  const [current, setCurrent] = useState(false);
  const [setting, setSetting] = useState(false);

  useEffect(() => {
    if (tripDate.toDateString() === currentDate.toDateString()) {
      setCurrent(true);
    }
  }, []);
  const handleSetting = () => {
    setSetting(true);
  };

  return (
    <View style={styles.mine}>
      <TouchableOpacity
        style={{
          display: "flex",
          alignItems: "flex-end",
          position: "absolute",
          top: 10,
          right: 10,
        }}
        onPress={handleSetting}
      >
        <Entypo name="dots-three-vertical" size={16} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          position: "absolute",
          right: 10,
          top: 40,
          backgroundColor: "#808080",
          padding: 3,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Cancel Booking
        </Text>
      </TouchableOpacity>

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
          <View
            style={{
              textAlign: "right",
              width: "100%",
              fontWeight: "bold",
              display: "flex",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Text>Active Now</Text>
            <Link
              href="/(tabs)/trips/mine"
              style={{ color: "#e87a00", fontWeight: "bold" }}
            >
              Go Live
            </Link>
          </View>
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
