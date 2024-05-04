import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Input = () => {
  return (
    <View>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    padding: 5,
    borderRadius: 8,
    backgroundColor: "white",
  },
});
