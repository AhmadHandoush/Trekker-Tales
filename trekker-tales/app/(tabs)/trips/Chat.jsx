import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import { useRoute } from "@react-navigation/native";

const Chat = () => {
  const route = useRoute();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: route.params.data.myId,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = (messageArray) => {
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
