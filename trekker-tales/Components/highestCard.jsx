import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const HighestCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.img}>
        <Image
          source={require("../assets/360_F_113467839_JA7ZqfYTcIFQWAkwMf3mVmhqXr7ZOgEX.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}> Treepo</Text>
        <Text style={styles.date}> date</Text>
      </View>
      <View style={styles.rating}>
        <Ionicons name="star" size={32} color="gold" />
        <Text style={styles.rate}>3.5</Text>
      </View>
    </View>
  );
};

export default HighestCard;

const styles = StyleSheet.create({
  card: {
    margin: 10,

    backgroundColor: "#fff",
    borderRadius: 8,
    width: 170,
    elevation: 2,
    height: 200,
    position: "relative",
  },
  img: {
    height: "60%",
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: "center",
  },
  rating: {
    position: "absolute",
    top: 10,
    right: 10,
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  rate: {
    color: "white",
  },
});
