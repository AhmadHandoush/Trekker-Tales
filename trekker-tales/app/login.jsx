import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require("../assets/Borcelle (3).png")}
          style={{ width: 200, height: 200 }}
        />
      </View>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "white",

    flex: 1,
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
});
