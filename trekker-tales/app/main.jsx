import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import React from "react";
import { Link } from "expo-router";

const Main = () => {
  const handlePress = () => {
    history.push("/login");
  };
  return (
    <ImageBackground
      source={require("../assets/pexels-qjpioneer-917510 (1).jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to TREKKER TALES</Text>

        <Link href="/login" asChild style={styles.link}>
          <Pressable>
            <Text style={styles.btntext}>Get Started</Text>
          </Pressable>
        </Link>
      </View>
    </ImageBackground>
  );
};

export default Main;
