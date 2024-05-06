import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
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
      <TouchableOpacity onPress={handleSubmit} style={styles.book}>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Book
        </Text>
      </TouchableOpacity>
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
    borderBottomWidth: 2,
    borderBottomColor: "#808080",
    height: 40,
  },
  book: {
    backgroundColor: "#E87A00",
    padding: 10,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
