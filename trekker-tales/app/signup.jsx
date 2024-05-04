import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Signup = () => {
  return (
    <View style={styles.signup}>
      <Text>signup</Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  signup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
