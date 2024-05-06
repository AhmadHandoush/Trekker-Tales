import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const BookCard = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("http:://00000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: inputValue }),
      });

      if (response.ok) {
        Alert.alert("Success", "booking done");
      } else {
        Alert.alert("Error", "Failed to send data");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Failed to send data");
    }
  };
  return (
    <View style={styles.box}>
      <TextInput
        placeholder="Please enter your child's name"
        onChangeText={setInputValue}
        value={inputValue}
        style={styles.input}
      />
      <Button title="Book" onPress={handleSubmit} style={styles.book} />
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  box: {
    position: "absolute",
    zIndex: 20000,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "white",
    borderRadius: 6,
    padding: 20,
    top: "50%",
    left: "50%",
    transform: [{ translateX: -150 }],
  },
  input: {
    marginBottom: 10,
  },
});
