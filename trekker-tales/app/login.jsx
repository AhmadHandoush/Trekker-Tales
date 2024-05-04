import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const login = () => {
  return (
    <View style={styles.container}>
      <Text className="text-3xl">login</Text>
      <Link href={"/signup"}>Go to signup</Link>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
