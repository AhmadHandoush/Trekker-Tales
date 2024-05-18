import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import Back from "../Components/back";
import { BASE_URL } from "./utils/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OtherUserLocationScreen = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userLocations, setUserLocations] = useState([]);
  const [tripData, setTripData] = useState({});

  useEffect(() => {
    const fetchTrips = async () => {
      setLoading(true);
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const response = await fetch(`${BASE_URL}/api/get_trip/46`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          setTripData(data);
          setLoading(false);
        } else {
          setLoading(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchTrips();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "locations"),
      (snapshot) => {
        const locations = [];
        snapshot.forEach((doc) => {
          const { latitude, longitude } = doc.data();
          locations.push({
            id: doc.id,
            coordinate: {
              latitude,
              longitude,
            },
          });
        });
        setUserLocations(locations);
        setLoading(false);
      },
      (error) => {
        setError("Error fetching user locations: " + error.message);
        setLoading(false);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const locations = [
    {
      id: 1,
      coordinate: {
        latitude: 34.3736218,
        longitude: 35.7783809,
      },
      title: "Deddeh",
    },
    {
      id: 2,
      coordinate: {
        latitude: 34.3583744,
        longitude: 35.7302337,
      },
      title: "Anfeh",
    },
  ];

  return (
    <View style={styles.container}>
      <Back />
      {loading ? (
        <ActivityIndicator size="large" color="#e87a00" />
      ) : userLocations.length > 0 ? (
        <MapView style={styles.map}>
          {locations.map((location) => (
            <React.Fragment key={location.id}>
              <Marker coordinate={location.coordinate} title={location.title} />

              <Circle
                center={location.coordinate}
                radius={1000}
                strokeColor="rgba(255,0,0,0.5)"
                fillColor="rgba(255,0,0,0.2)"
              />
            </React.Fragment>
          ))}

          {userLocations.map((location) => (
            <Marker
              key={location.id}
              coordinate={location.coordinate}
              title={`Location ${location.id}`}
            />
          ))}
        </MapView>
      ) : (
        <Text>{error || "No user locations available"}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default OtherUserLocationScreen;
