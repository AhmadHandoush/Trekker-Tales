import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import { BASE_URL } from "../../utils/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams } from "expo-router";
import firestore from "@react-native-firebase/firestore";

const Chat = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
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

          setUser(data.user);
          setLoading(false);
        } else {
          setLoading(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = (messageArray) => {
    const msg = messageArray[0];
    const myMsg = {
      ...msg,
      sentBy: user.id,
      sentTo: id,
      createdAt: new Date(),
    };
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, myMsg)
    );
    const docid = id > user.id ? user.id + "-" + id : id + "-" + user.id;
    firestore().collection(chatrooms).doc(docid).collection("messages").add();
  };
  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
