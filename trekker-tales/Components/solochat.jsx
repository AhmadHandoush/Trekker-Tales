import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Solo = ({ parent, router }) => {
  const handleChat = () => {
    router.push({ pathname: "/(teacher)/chats/chat", params: parent });
  };
  return (
    <TouchableOpacity style={styles.conversation} onPress={handleChat}>
      <View>
        <Text>{parent.name}</Text>
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
