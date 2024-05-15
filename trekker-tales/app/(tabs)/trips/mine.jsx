import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import Back from "../../../Components/back";

const OtherUserLocationScreen = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userLocations, setUserLocations] = useState([]);

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
      ) : userLocations.length > 0 ? (
        <MapView style={styles.map}>
          <Polyline
            coordinates={userLocations.map((loc) => loc.coordinate)}
            strokeColor="rgba(255,0,0,0.5)"
            strokeWidth={4}
          />
          {userLocations.length > 0 && (
            <Marker
              coordinate={userLocations[userLocations.length - 1].coordinate}
              title={`User Location`}
            />
          )}
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
