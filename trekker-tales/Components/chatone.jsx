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
    height: 80,
    backgroundColor: "red",
    overflow: "hidden",
    padding: 5,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
