import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import BookCard from "../../../Components/bookcard";
import Back from "../../../Components/back";

const SignleTrip = () => {
  const [book, setBook] = useState(false);
  const [message, setMessage] = useState("");

  const tripData = {
    id: 25,
    name: "Treepo",
    destination: "South Lebanon",
    description:
      "The trip will be all over the tourists places in bekaa and saida and also it includes breakfast and lunch, all of your children will be in a good hands.",
    trip_image: require("../../../assets/360_F_113467839_JA7ZqfYTcIFQWAkwMf3mVmhqXr7ZOgEX.jpg"),
    date: "2024-05-08",
    start_time: "07:57:57",
    end_time: "17:57:57",
    total_seats: 24,
    available_seats: 16,
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
      {
        id: 2,
        name: "Baalbek",
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
    total_seats,
    available_seats,
    fees,
    locations,
  } = tripData;
  return (
    <View style={styles.page}>
      <ScrollView style={styles.scroll}>
        <Back />
        {book && <View style={styles.overlay}></View>}
        <View style={styles.single}>
          <View style={styles.hero}>
            <ImageBackground
              source={trip_image}
              style={styles.image}
            ></ImageBackground>
          </View>
          <View style={styles.second}>
            <View style={styles.important}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.fee}>${parseInt(fees)}</Text>
            </View>
            <View>
              <Text style={styles.overview}>Overview</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
            <View>
              <View style={styles.singledata}>
                <Text style={styles.prop}>Destination</Text>
                <Text style={styles.destination}>{destination}</Text>
              </View>
              <View style={styles.singledata}>
                <Text style={styles.prop}>Date</Text>
                <Text>{date}</Text>
              </View>
              <View style={styles.singledata}>
                <Text style={styles.prop}>Start-time</Text>
                <Text>{start_time}</Text>
              </View>
              <View style={styles.singledata}>
                <Text style={styles.prop}>End-time</Text>
                <Text>{end_time}</Text>
              </View>

              <View style={styles.singledata}>
                <Text style={styles.prop}>Available-seats</Text>
                <Text>
                  {available_seats}/{total_seats}
                </Text>
              </View>
            </View>
            <View style={styles.locations}>
              <Text style={styles.loctitle}>Places to visit </Text>
              {locations.map((location) => (
                <Text key={location.id} style={styles.locname}>
                  {location.name}{" "}
                </Text>
              ))}
            </View>
            <Text styele={styles.hint}>
              <Text style={styles.hintname}>Hint:</Text> You can bring some
              chocolate with you.
            </Text>
            {/* <TouchableOpacity
            onPress={() => {
              setBook(true);
            }}
            style={styles.book}
          >
            <Text style={styles.viewmap}>Book Now</Text>
          </TouchableOpacity> */}
          </View>
          {message && (
            <View style={styles.message}>
              <Text style={styles.msgText}>
                You booking successfully completed
              </Text>
            </View>
          )}
          {book && <BookCard setBook={setBook} />}
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          setBook(true);
        }}
        style={styles.book}
      >
        <Text style={styles.viewmap}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignleTrip;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingBottom: 5,
    position: "relative",
  },

  scroll: {
    flex: 1,
  },
  single: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    paddingTop: 20,
    paddingBottom: 20,
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
  overview: {
    fontWeight: "bold",
    fontSize: 20,
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
  second: {
    width: "93%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  important: {
    display: "flex",
    position: "absolute",
    top: -50,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  name: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
  },
  fee: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#E87A00",
  },
  description: {
    marginTop: 5,
  },
  singledata: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  prop: {
    fontWeight: "bold",
    fontSize: 16,
  },
  destination: {},
  locations: {
    marginTop: 20,
    marginBottom: 20,
  },
  loctitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  locname: {
    marginBottom: 5,
    fontSize: 18,
  },
  hint: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  hintname: {
    fontWeight: "bold",
  },
  book: {
    marginTop: 20,
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    fontWeight: "bold",
    backgroundColor: "#E87A00",
    bottom: 0,
    position: "fixed",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 1000,
  },
  message: {
    position: "absolute",
    zIndex: 20000,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "white",
    borderRadius: 6,
    padding: 20,
    top: "50%",
    left: "50%",
    transform: [{ translateX: -150 }],
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  msgText: {
    color: "green",
  },
});
