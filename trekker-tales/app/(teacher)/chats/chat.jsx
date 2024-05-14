import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import ChatroomHeader from "../../../Components/chatroomheader";

const Chat = () => {
  const parent = useLocalSearchParams();
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ChatroomHeader user={parent} router={router} />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
