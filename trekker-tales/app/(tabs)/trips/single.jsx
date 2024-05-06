import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const SignleTrip = () => {
  const tripData = {
    id: 25,
    name: "capture",
    destination: "destination",
    description:
      "The trip will be all over the tourists places in bekaa and saida and also it includes breakfast amd lunch",
    trip_image: require("../../../assets/360_F_113467839_JA7ZqfYTcIFQWAkwMf3mVmhqXr7ZOgEX.jpg"),
    date: "2024-05-08",
    start_time: "07:57:57",
    end_time: "17:57:57",
    total_seats: 24,
    available_seats: 24,
    fees: "223.00",
    created_at: "2024-05-01T21:14:21.000000Z",
    updated_at: "2024-05-01T21:14:21.000000Z",
    status: "active",
    locations: [
      {
        id: 1,
        name: "saida",
        longitude: "33.5600000",
        latitude: "35.3700000",
        created_at: "2024-04-28T09:43:06.000000Z",
        updated_at: "2024-04-28T09:43:06.000000Z",
        pivot: {
          trip_id: 25,
          location_id: 1,
          arrival_time: null,
          departure_time: null,
        },
      },
    ],
  };
  const {
    name,
    destination,
    description,
    date,
    trip_image,
    start_time,
    end_time,
    totoal_seats,
    available_seats,
    fees,
    locations,
  } = tripData;
  return (
    <View style={styles.single}>
      <View style={styles.hero}>
        <ImageBackground source={trip_image} style={styles.image}>
          <TouchableOpacity
            onPress={() => {
              router.push(`/trips/single`);
            }}
            style={styles.more}
          >
            <Text style={styles.viewmap}>View on map</Text>
            <Icon
              name="arrow-right"
              size={20}
              color="#808080"
              style={styles.arrow}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

export default SignleTrip;

const styles = StyleSheet.create({
  single: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    paddingTop: 50,
  },
  hero: {
    height: 300,
    width: "100%",
    backgroundColor: "red",
  },
  image: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  more: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#E87A00",
    width: "50%",
    borderRadius: 10,
    marginBottom: 20,
  },
  viewmap: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  arrow: {
    color: "white",
    fontSize: 18,
  },
});
