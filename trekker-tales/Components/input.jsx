import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Input = ({ label, placerholder }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placerholder} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 50,

    borderWidth: 0,
    borderRadius: 8,
    width: 325,
    padding: 10,
    borderWidth: 1,
    borderColor: "#FFE1E4",
    backgroundColor: "white",
  },
  label: {
    paddingVertical: "2%",
  },
});
