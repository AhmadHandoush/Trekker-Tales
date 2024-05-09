import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const HighestCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image
        source={require("../assets/360_F_113467839_JA7ZqfYTcIFQWAkwMf3mVmhqXr7ZOgEX.jpg")}
      ></Image>
      <View style={styles.info}>
        <Text style={styles.name}> Treepo</Text>
        <Text style={styles.date}> date</Text>
      </View>
      <View style={styles.rating}>
        <Ionicons name="star" size={32} color="gold" />
        <Text style={styles.rate}></Text>
      </View>
    </View>
  );
};

export default HighestCard;

const styles = StyleSheet.create({});
