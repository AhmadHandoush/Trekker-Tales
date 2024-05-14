import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constants";
import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import Solo from "../../../Components/solochat";

const Chats = () => {
  const [parentList, setParentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
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

          setParentList(data.parents);
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
    <View style={{ flex: 1, paddingTop: 100, paddingLeft: 100 }}>
      {parentList.map((parent) => (
        <Solo key={parent.id} parent={parent} router={router} />
      ))}
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  conversation: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: "red",
    width: "80%",
    marginLeft: 1,
    marginRight: 10,
  },
});
