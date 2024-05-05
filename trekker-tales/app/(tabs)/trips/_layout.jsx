import { StyleSheet, Text, View } from "react-native";
import React from "react";

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
