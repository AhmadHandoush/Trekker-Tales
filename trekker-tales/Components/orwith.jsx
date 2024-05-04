import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const OrWith = () => {
  return (
    <View>
      <View style={styles.all}>
        <View style={styles.one}></View>
        <Text style={styles.or}>Or Login with</Text>
        <View style={styles.two}></View>
      </View>
      <View>
        <View>
          <FontAwesome name="facebook" size={24} color="black" />
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default OrWith;

const styles = StyleSheet.create({});
