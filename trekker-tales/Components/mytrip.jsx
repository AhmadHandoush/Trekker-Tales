import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const MyTrip = ({ item }) => {
  return (
    <View style={styles.mine}>
      <View style={styles.mineimg}>
        <Image
          style={styles.mineimage}
          source={require("../assets/360_F_113467839_JA7ZqfYTcIFQWAkwMf3mVmhqXr7ZOgEX.jpg")}
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
