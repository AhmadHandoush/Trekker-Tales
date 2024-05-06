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
    <ScrollView style={styles.scroll}>
      {book && <View style={styles.overlay}></View>}
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
        <View style={styles.second}>
          <View style={styles.important}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.fee}>${parseInt(fees)}</Text>
          </View>
          <View>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.singledata}>
              <Text style={styles.prop}>Destination:</Text>
              <Text style={styles.destination}>{destination}</Text>
            </View>
            <View style={styles.singledata}>
              <Text style={styles.prop}>Date:</Text>
              <Text>{date}</Text>
            </View>
            <View style={styles.singledata}>
              <Text style={styles.prop}>Start_time:</Text>
              <Text>{start_time}</Text>
            </View>
            <View style={styles.singledata}>
              <Text style={styles.prop}>End_time:</Text>
              <Text>{end_time}</Text>
            </View>
            <View style={styles.singledata}>
              <Text style={styles.prop}>Date:</Text>
              <Text>{date}</Text>
            </View>
            <View style={styles.singledata}>
              <Text style={styles.prop}>Available_seats:</Text>
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
          <TouchableOpacity
            onPress={() => {
              setBook(true);
            }}
            style={styles.book}
          >
            <Text style={styles.viewmap}>Book Now</Text>
          </TouchableOpacity>
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
  );
};

export default SignleTrip;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    position: "relative",
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
  more: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#E87A00",
    width: "50%",
    borderRadius: 8,
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
  second: {
    width: "93%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  important: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 22,
  },
  fee: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#E87A00",
  },
  description: {
    marginTop: 20,
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
  destination: {
    fontWeight: "bold",
    color: "#E87A00",
  },
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
    backgroundColor: "red",
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
