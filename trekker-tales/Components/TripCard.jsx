import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

const TripCard = () => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(trip)}>
      <Image source={trip.trip_image} style={styles.image} />
      <Text>{trip.name}</Text>
      <Text>Fee: ${trip.fees}</Text>
      <TouchableOpacity onPress={() => onPress(trip)}>
        <Text style={styles.viewMoreButton}>View More</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default TripCard;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    width: "45%",
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
});
