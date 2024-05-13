import {
  Image,
  ImageBase,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ChatCard from "../../../Components/chatone";

const Chats = () => {
  return (
    <View style={styles.chats}>
      <ChatCard />
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  chats: {
    flex: 1,
    paddingTop: 120,
    padding: 10,
  },
});
