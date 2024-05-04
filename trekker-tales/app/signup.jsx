import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Topline from "../Components/topline";
import Input from "../Components/input";
import Button from "../Components/button";
import OrWith from "../Components/orwith";

const Signup = () => {
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
        <Text style={styles.title}>Sign Up</Text>

        <Input label={"Name"} placerholder={"Enter your name"} />
        <Input label={"Email"} placerholder={"Enter your email"} />
        <Input label={"Password"} placerholder={"Enter your password"} />
        <Button title="Sign Up" />
        <Text style={styles.passText}>
          Already have an account?{" "}
          <Link href={"/login"}>
            <Text style={{ color: "#E87A00", fontWeight: "bold" }}>
              {" "}
              Login{" "}
            </Text>
          </Link>
        </Text>
        <Link href={"/(tabs)/home"}>
          <Text style={{ color: "#E87A00", fontWeight: "bold" }}> Home </Text>
        </Link>
      </View>
    </View>
  );
};

export default Signup;
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
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
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
    color: "black",
    padding: 10,
    marginLeft: 22,
  },
});
