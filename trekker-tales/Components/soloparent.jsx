import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../app/utils/constants";

const SoloParent = ({ parent, router }) => {
  const [mine, setMine] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const get_data = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const response = await fetch(`${BASE_URL}/api/user`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();

          setMine(data.user);
        } else {
          setLoading(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    get_data();
  }, []);
  const handleChat = () => {
    router.push({
      pathname: "/(tabs)/notifications/chat",
      params: parent,
    });
  };
  return (
    <TouchableOpacity style={styles.conversation} onPress={handleChat}>
      <View>
        <Text>{parent.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SoloParent;

const styles = StyleSheet.create({
  conversation: {
    backgroundColor: "red",
    width: "50%",
    height: 100,
    marginBottom: 10,
  },
});
