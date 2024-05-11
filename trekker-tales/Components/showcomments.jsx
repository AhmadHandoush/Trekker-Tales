import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Topline from "./topline";

const ShowComments = () => {
  return (
    <View style={styles.comments}>
      <Text style={styles.close}>X</Text>
      <View style={styles.topLine}></View>
      <Text style={styles.comment}>Comments</Text>
      <Text style={styles.comment}>Comments</Text>
      <Text style={styles.comment}>Comments</Text>
      <Text style={styles.comment}>Comments</Text>
    </View>
  );
};

export default ShowComments;

const styles = StyleSheet.create({
  comments: {
    width: "100%",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.7)",
    position: "absolute",
    height: "100%",
    top: 100,
    left: 0,
  },
  comment: {},
  topLine: {
    color: "white",
    top: 10,
    width: "50%",
    height: 4,
  },
});
