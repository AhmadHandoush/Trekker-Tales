import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BookCard = () => {
  return (
    <View style={styles.box}>
      <TextInput
        placeholder="Enter data"
        onChangeText={setInputValue}
        value={inputValue}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({});
