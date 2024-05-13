import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { firestore } from "../../firebase";
import { BASE_URL } from "../../utils/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const TeacherConversations = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigateToConversation(item.id, item.name)}
      style={styles.conversation}
    >
      <Image
        source={{ uri: `${BASE_URL}/images/${item.user_image}` }}
        style={styles.image}
      />
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    </TouchableOpacity>
  );

  const navigateToConversation = (parentId, parentName) => {
    router.push("TeacherParentConversation", { parentId, parentName });
  };

  return (
    <View style={{ flex: 1, paddingTop: 100, paddingLeft: 50 }}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

export default TeacherConversations;
const styles = StyleSheet.create({
  list: {
    display: "flex",
    flexDirection: "column",

    width: "90%",
    marginLeft: -8,
    marginRight: "auto",
  },
  conversation: {
    backgroundColor: "white",
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    height: 70,
    borderRadius: 8,
    elevation: 1,
    paddingLeft: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "green",
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
