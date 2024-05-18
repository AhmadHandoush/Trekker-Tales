import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import Back from "../Components/back";

const OtherUserLocationScreen = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userLocations, setUserLocations] = useState([]);

  // Define specific locations
  const specificLocations = [
    {
      id: "specific1",
      coordinate: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
      title: "San Francisco",
    },
    {
      id: "specific2",
      coordinate: {
        latitude: 34.0522,
        longitude: -118.2437,
      },
      title: "Los Angeles",
    },
  ];

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

  return (
    <View style={styles.container}>
      <Back />
      {loading ? (
        <ActivityIndicator size="large" color="#e87a00" />
      ) : userLocations.length > 0 || specificLocations.length > 0 ? (
        <MapView style={styles.map}>
          {specificLocations.map((location) => (
            <Marker
              key={location.id}
              coordinate={location.coordinate}
              title={location.title}
            />
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
