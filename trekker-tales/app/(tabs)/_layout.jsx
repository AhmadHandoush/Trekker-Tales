import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

import {
  useFocusEffect,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";

const TabsLayout = () => {
  const [focusedTab, setFocusedTab] = useState("");

  const route = useRoute();

  useFocusEffect(
    React.useCallback(() => {
      const routeName = getFocusedRouteNameFromRoute(route);
      setFocusedTab(routeName);
    }, [route])
  );
  const getTabBarStyle = (name) => {
    return focusedTab === name ? { color: "#007bff" } : { color: "#999898" };
  };
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          title: "Home",
          tabBarIcon: () => (
            <AntDesign
              name="home"
              size={24}
              color={focusedTab === "home" ? "#E87A00" : "#999898"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          title: "Profile",
          tabBarIcon: () => <AntDesign name="user" size={24} color="#999898" />,
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          tabBarLabel: "Trips",
          title: "Trips",
          tabBarIcon: () => <AntDesign name="car" size={24} color="#999898" />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarLabel: "notifications",
          title: "Notifications",
          tabBarIcon: () => (
            <AntDesign name="bells" size={24} color="#999898" fontSize={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          tabBarLabel: "More",
          title: "More",
          tabBarIcon: () => (
            <AntDesign name="bars" size={24} color="#999898" fontSize={30} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
