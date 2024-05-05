import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const TakenTrip = ({ trip }) => {
  const { name, rating, fees, date, trip_image } = trip;
  return (
    <View style={styles.card}>
      <View style={styles.image}>
        <Image source={trip_image} style={styles.img} />
      </View>
      <View style={styles.data}>
        <View style={styles.topline}>
          <Text>{name}</Text>
          <View style={styles.rate}>
            <MaterialIcons name="star" size={16} color="gold" />
            <Text>{rating}</Text>
          </View>
        </View>
        <View style={styles.bottomline}>
          <Text>{date}</Text>
          <Text>$ {fees}</Text>
        </View>
      </View>
    </View>
  );
};

export default TakenTrip;

const styles = StyleSheet.create({
  card: {
    padding: 5,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "red",
  },
  data: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  image: {},
  img: {},
  topline: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rate: {
    display: "flex",
    flexDirection: "row",
  },
});
