import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTintColor: "black",
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="teacherChat"
        // options={({ route }) => ({ title: route.params.name })}
      />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
