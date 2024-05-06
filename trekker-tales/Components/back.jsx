import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Back = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity onPress={goBack} style={styles.btn}>
      <MaterialIcons name="keyboard-arrow-left" size={40} color="black" />
    </TouchableOpacity>
  );
};

export default Back;

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    top: 40,
    left: 10,
    zIndex: 1,
  },
});
