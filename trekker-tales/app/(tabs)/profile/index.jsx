import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <View style={styles.top}></View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  top: {
    height: 180,
    width: "100%",
    backgroundColor: "#E87A00",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
});
