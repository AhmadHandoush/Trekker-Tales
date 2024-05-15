import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MessageItem from "./messageItem";

const Message = ({ messages, mine }) => {
  return (
    // <ScrollView
    // // showsVerticalScrollIndicator={false}
    // // contentContainerStyle={{ padding: 10 }}
    // >
    //   {messages.map((message, index) => {
    //     <Text>{message.userId}</Text>;
    //   })}
    // </ScrollView>
    <ScrollView>
      {messages.map((message, index) => (
        <MessageItem message={message} mine={mine} key={index} />
      ))}
    </ScrollView>
  );
};

export default Message;

const styles = StyleSheet.create({});
