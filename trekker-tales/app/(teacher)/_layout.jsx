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

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#E87A00",
        tabBarInactiveTintColor: "#999898",
      }}
    >
      <Tabs.Screen
        name="chat"
        options={{
          tabBarLabel: "Chat",
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <AntDesign name="message" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="posts"
        options={{
          tabBarLabel: "Posts",
          title: "Posts",
          tabBarIcon: ({ color }) => (
            <AntDesign name="calendar" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarLabel: "notifications",
          title: "Notifications",
          tabBarIcon: ({ color }) => (
            <AntDesign name="bells" size={24} color={color} fontSize={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          tabBarLabel: "More",
          title: "More",
          tabBarIcon: ({ color }) => (
            <AntDesign name="bars" size={24} color={color} fontSize={30} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
