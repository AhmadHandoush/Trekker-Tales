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

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    paddingBottom: 30,
    paddingTop: 30,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  text: {
    top: 50,
    color: "white",
    fontWeight: "bold",
    fontSize: 26,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 50,
    borderRadius: "6px",
  },
  link: {
    backgroundColor: "#E87A00",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    padding: 10,
  },
  btntext: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },
});
