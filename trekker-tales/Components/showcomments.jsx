import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ShowComments = () => {
  return (
    <View style={styles.comments}>
      <Topline />
      <Text>Comments</Text>
      <Text>comment1</Text>
      <Text>comment1</Text>
      <Text>comment1</Text>
      <Text>comment1</Text>
    </View>
  );
};

export default ShowComments;

const styles = StyleSheet.create({});
