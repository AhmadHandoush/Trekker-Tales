import {
  Image,
  ImageBase,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import ChatCard from "../../../Components/chatone";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../../utils/constants";
import Back from "../../../Components/back";

const Chats = (route) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const get_data = async () => {
      setLoading(true);
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const response = await fetch(`${BASE_URL}/api/get_parents`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();

          setUsers(data.parents);
          setLoading(false);
        } else {
          setLoading(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    get_data();
  }, []);
  return (
    <>
      <Back title="Chats" />
      <View style={styles.chats}>
        {users.map((user) => (
          <ChatCard user={user} key={user.id} route={route} />
        ))}
      </View>
    </>
  );
};

export default Chats;

const styles = StyleSheet.create({
  chats: {
    flex: 1,
    paddingTop: 120,
    padding: 10,
    gap: 10,
  },
});
