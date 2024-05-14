// // GetDataPage.js
// import React, { useEffect, useState } from "react";
// import { View, Button, Alert } from "react-native";
// import * as Location from "expo-location";
// import firebase from "./firebase";

// const GetDataPage = () => {
//   const [location, setLocation] = useState(null);

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         Alert.alert(
//           "Permission denied",
//           "Please enable location services to continue."
//         );
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location.coords);
//     })();
//   }, []);

//   const submitData = () => {
//     if (location) {
//       firebase.database().ref("location").set({
//         latitude: location.latitude,
//         longitude: location.longitude,
//       });
//     } else {
//       Alert.alert(
//         "Location not found",
//         "Please make sure your location services are enabled and try again."
//       );
//     }
//   };

//   return (
//     <View>
//       <Button title="Share Current Location" onPress={submitData} />
//     </View>
//   );
// };

// export default GetDataPage;
