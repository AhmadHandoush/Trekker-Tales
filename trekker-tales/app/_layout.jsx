import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";

export default function App() {
  return (
    <Stack>
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
