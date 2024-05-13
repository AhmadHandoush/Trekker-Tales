import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ChatCard = () => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <Image
          source={require("../assets/360_F_113467839_JA7ZqfYTcIFQWAkwMf3mVmhqXr7ZOgEX.jpg")}
          style={styles.image}
        />
        <Text style={styles.name}>Name</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  card: {
    widht: "100%",
    height: 100,
    backgroundColor: "red",
    overflow: "hidden",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});
