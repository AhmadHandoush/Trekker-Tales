import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import { useRouter } from "expo-router";

const TripCard = ({ trip, onPress }) => {
  const router = useRouter();
  return (
    <View style={styles.card} onPress={() => onPress(trip)}>
      <Image source={trip.trip_image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{trip.name}</Text>
        <Text style={styles.fee}>${trip.fees}</Text>
      </View>
      <View style={styles.datefill}>
        <Icon
          name="calendar"
          size={20}
          color="#808080"
          style={styles.dateicon}
        />
        <Text style={styles.date}>{trip.date}</Text>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.more}>
        <Text style={styles.viewMoreButton}>View More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TripCard;

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    overflow: "hidden",
    width: 170,
  },
  datefill: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    margin: 5,
    alignItems: "center",
  },
  dateicon: {
    fontSize: 13,
  },
  image: {
    width: "100%",
    height: 150,
    marginBottom: 10,
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
  more: {
    margin: 5,
    backgroundColor: "#E87A00",
    padding: 5,
    width: "50%",

    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  viewMoreButton: {
    color: "white",
    fontWeight: "bold",
  },
  date: {
    color: "black",
    marginLeft: 5,
    fontWeight: "bold",
    fontSize: 13,
  },
});
