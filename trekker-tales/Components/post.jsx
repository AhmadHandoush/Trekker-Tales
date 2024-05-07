import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Post = () => {
  return (
    <View style={styles.post}>
      <View style={styles.top}>
        <View>
          <Image />
        </View>
        <View>
          <Text>Ahmad </Text>
          <Text>minutes</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  top: {},
});
