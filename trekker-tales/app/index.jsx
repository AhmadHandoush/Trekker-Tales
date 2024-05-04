import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Redirect } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Redirect href={"/main"} />
      {/* <Text className="text-3xl">ahmad</Text> */}
    </View>
  );
}
