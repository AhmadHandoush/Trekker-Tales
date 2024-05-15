import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../app/utils/constants";

const Solo = ({ parent, router }) => {
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
      pathname: "/(teacher)/chats/chat",
      params: parent,
    });
  };
  return (
    <TouchableOpacity style={styles.conversation} onPress={handleChat}>
      <View>
        <Image
          source={require("../assets/360_F_113467839_JA7ZqfYTcIFQWAkwMf3mVmhqXr7ZOgEX.jpg")}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.name}>{parent.name}</Text>
          <Text style={styles.email}>{parent.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Solo;

const styles = StyleSheet.create({
  conversation: {
    backgroundColor: "red",
    width: "50%",
    height: 100,
    marginBottom: 10,
  },
});