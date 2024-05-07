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
      <Image />
      <View style={styles.info}>
        <Text> 10 likes</Text>
        <Text> 12 comments</Text>
      </View>
      <View>
        <TouchableOpacity></TouchableOpacity>
        <View>
          <TextInput
            placeholder="Please enter your child's name"
            onChangeText={setInputValue}
            value={inputValue}
            style={styles.input}
            selectionColor={"#E87A00"}
          />
          <TouchableOpacity></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  top: {},
});
