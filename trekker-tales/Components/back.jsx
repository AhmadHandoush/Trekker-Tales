import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const back = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity
      onPress={goBack}
      style={{ position: "absolute", top: 20, left: 10, zIndex: 1 }}
    >
      <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default back;

const styles = StyleSheet.create({});
