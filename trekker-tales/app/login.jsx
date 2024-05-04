import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Topline from "../Components/topline";
import Input from "../Components/input";
import Button from "../Components/button";

const login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require("../assets/Borcelle (3).png")}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <View style={styles.login}>
        <Topline />
        <Text style={styles.title}>Login</Text>

        <Input label={"Name"} placerholder={"Enter your email"} />
        <Input label={"Password"} placerholder={"Enter your password"} />
        <Button title="Login" />
        <Text style={styles.passText}>
          Don’t have an account?{" "}
          <Link href={"/signup"}>
            <Text style={{ color: "#E87A00", fontWeight: "bold" }}>
              {" "}
              Sign Up{" "}
            </Text>
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "center",

    flex: 1,
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  login: {
    backgroundColor: "#F2F0F0",
    width: "100%",
    height: "65%",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  title: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 26,
  },
  passText: {
    fontSize: 14,
    color: "#A5A6A9",
    padding: 10,
    marginLeft: 22,
  },
});
