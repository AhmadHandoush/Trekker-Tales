import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import ChatroomHeader from "../../../Components/chatroomheader";
import Message from "../../../Components/Message";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../../utils/constants";
import { getroomId } from "../../utils/common";

import {
  Timestamp,
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

const Chat = () => {
  const ref = useRef("");
  const inputRef = useRef(null);
  const [mine, setMine] = useState(null);

  const parent = useLocalSearchParams();

  const router = useRouter();

  const [messages, setMessages] = useState([]);
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
  useEffect(() => {
    createRoomifnotExists();
    let roomId = getroomId(28, parent.id);
    const docRef = doc(db, "rooms", roomId);
    const messagesRef = collection(docRef, "messages");
    const q = query(messagesRef, orderBy("createdAt", "asc"));
    let unssub = onSnapshot(q, (snapshot) => {
      let allMessages = snapshot.docs.map((doc) => {
        return doc.data();
      });
      setMessages([...allMessages]);
    });

    return unssub;
  }, []);

  let createRoomifnotExists = async () => {
    let roomId = getroomId(28, parent.id);
    await setDoc(doc(db, "rooms", roomId), {
      roomId,
      createdAt: Timestamp.fromDate(new Date()),
    });
  };

  const handleSendMessage = async () => {
    let message = ref.current.trim();
    if (!message || !mine) return;
    try {
      let roomId = getroomId(28, parent.id);
      const docRef = doc(db, "rooms", roomId);
      const messagesRef = collection(docRef, "messages");
      ref.current = "";
      if (inputRef) inputRef?.current?.clear();
      const newDoc = await addDoc(messagesRef, {
        userId: 28,
        text: message,
        senderName: mine.name,
        createdAt: Timestamp.fromDate(new Date()),
      });

      console.log("messaging", newDoc.id);
    } catch (error) {
      Alert.alert("Message", error.message);
    }
  };

  // console.log("messages", messages);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ChatroomHeader user={parent} router={router} />
      <View
        style={{
          flex: 1,
          backgroundColor: "#d3d3d3",
          justifyContent: "space-between",
          paddingBottom: 10,
          paddingTop: 100,
          position: "relative",
        }}
      >
        {messages && (
          <View style={styles.messages}>
            <Message messages={messages} mine={mine} />
          </View>
        )}

        <View style={styles.inp}>
          <TextInput
            ref={inputRef}
            placeholder="Enter your text"
            style={styles.input}
            onChangeText={(value) => (ref.current = value)}
          />
          <TouchableOpacity style={styles.send} onPress={handleSendMessage}>
            <Feather name="send" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  inp: {
    backgroundColor: "white",
    padding: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "95%",
    marginLeft: 10,
    borderRadius: 20,
    position: "absolute",
    bottom: 10,
  },
  input: {
    padding: 5,
    borderRadius: 10,
    flex: 1,
  },
  messages: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 50,
  },
  send: {
    padding: 8,

    backgroundColor: "#e87a00",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
  },
});
