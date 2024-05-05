import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SignleTrip = () => {
  const tripData = {
    id: 25,
    name: "capture",
    destination: "destination",
    description:
      "The trip will be all over the tourists places in bekaa and saida and also it includes breakfast amd lunch",
    trip_image: "images/1714598061.jpg",
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
  return (
    <View>
      <Text>AHmad</Text>
    </View>
  );
};

export default SignleTrip;

const styles = StyleSheet.create({});
