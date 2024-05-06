import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Back = ({ title }) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.btn}>
      <TouchableOpacity onPress={goBack}>
        <MaterialIcons name="keyboard-arrow-left" size={40} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Back;

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    top: 40,
    left: 10,
    zIndex: 1,
    display: "flex",
    flexDirection: "row",
    gap: 120,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
