import React, { useEffect } from "react";
import * as Location from "expo-location";
import { collection, addDoc, serverTimestamp, doc } from "firebase/firestore";
import { db } from "../../firebase"; // Import your Firebase configuration file

const LocationUpdater = () => {
  useEffect(() => {
    // Function to update location in Firestore
    const updateLocation = async (location) => {
      try {
        // Get a reference to the user's location document in Firestore
        const locationDocRef = doc(db, "locations", "user_location");

        await setDoc(locationDocRef, {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          timestamp: serverTimestamp(),
        });

        console.log("Location updated successfully!");
      } catch (error) {
        console.error("Error updating  ", error);
      }
    };

    const subscription = Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        timeInterval: 1000,
      },
      (location) => {
        updateLocation(location);
      }
    );

    return () => subscription.remove();
  }, []);

  return null;
};

export default LocationUpdater;
