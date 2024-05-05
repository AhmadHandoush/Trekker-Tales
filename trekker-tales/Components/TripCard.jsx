import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

const TripCard = ({ trip, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(trip)}>
      <Image source={trip.trip_image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{trip.name}</Text>
        <Text style={styles.fee}>${trip.fees}</Text>
      </View>
      <TouchableOpacity onPress={() => onPress(trip)}>
        <Text style={styles.viewMoreButton}>View More</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default TripCard;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    width: 170,
  },
  image: {
    width: "100%",
    height: 150,
    marginBottom: 10,
    borderRadius: 5,
  },
  viewMoreButton: {
    color: "blue",
    marginTop: 5,
  },
  name: {
    paddingLeft: 5,
    fontWeight: "bold",
    fontSize: 18,
  },
  fee: {
    paddingLeft: 5,
    fontWeight: "bold",
  },
  info: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingRight: 5,
  },
});
