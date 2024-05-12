import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import { useRoute } from "@react-navigation/native";

const Chat = () => {
  const route = useRoute();
  const [messages, setMessages] = useState([]);

  //   route.params.data.myId
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = (messageArray) => {
    console.log(messageArray);
    const msg = messageArray[0];
    const msMsg = { ...msg, senderId: 1, receiverId: 2 };
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messageArray)
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={(props) => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{
                right: {
                  backgroundColor: "#e87a00",
                },
                left: {
                  backgroundColor: "white",
                },
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
