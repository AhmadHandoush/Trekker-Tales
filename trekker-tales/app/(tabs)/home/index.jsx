import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (text) => {
    setSearchQuery(text);
  };
  return (
    <View style={styles.home}>
      <View style={styles.top}>
        <Text style={styles.hi}>Hi Ahmad </Text>
        <View style={styles.search}>
          <Feather name="map-pin" size={24} color="black" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            onChangeText={handleSearch}
            value={searchQuery}
          />
          <Feather name="search" size={24} color="black" />
        </View>
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
  search: {},
  searchInput: {},
});
