import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.top}>
        <Text style={styles.hi}>Hi Ahmad </Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
  },
  top: {
    height: "25%",
    width: "100%",
    backgroundColor: "#E87A00",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  hi: {
    marginTop: 50,
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 20,
  },
});
