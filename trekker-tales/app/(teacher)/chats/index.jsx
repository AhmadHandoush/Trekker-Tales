import {
  Image,
  ImageBase,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Chats = () => {
  return (
    <TouchableOpacity>
      <View>
        <View style={styles.card}>
          <Image
            source={require("../../../assets/360_F_113467839_JA7ZqfYTcIFQWAkwMf3mVmhqXr7ZOgEX.jpg")}
            style={styles.image}
          />
          <Text style={styles.name}>Name</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Chats;

const styles = StyleSheet.create({});
