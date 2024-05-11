import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Profile = () => {
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

export default Profile;

const styles = StyleSheet.create({});
