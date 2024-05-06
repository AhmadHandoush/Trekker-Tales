import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const BookCard = ({ setBook, setMessage }) => {
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
        setBook(false);
        setMessage("You booking successfully completed");
        setTimeout(() => {
          setMessage("");
        }, 3000);
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
      <TouchableOpacity style={styles.closebtn} onPress={() => setBook(false)}>
        <Text style={styles.close}>X</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Please enter your child's name"
        onChangeText={setInputValue}
        value={inputValue}
        style={styles.input}
        selectionColor={"#E87A00"}
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
  closebtn: {
    padding: 1,
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -20,
    right: -10,
  },
  close: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
});
