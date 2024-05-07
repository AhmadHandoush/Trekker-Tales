import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Post = ({ post }) => {
  const { caption, image, created_at } = post;
  return (
    <View style={styles.post}>
      <View style={styles.top}>
        <View style={styles.img}>
          <Image
            source={require("../assets/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg")}
            style={styles.profile}
          />
        </View>
        <View style={styles.proinfo}>
          <Text style={styles.name}>Ahmad </Text>
          <Text style={styles.time}>minutes</Text>
        </View>
      </View>
      <Image />
      <View style={styles.info}>
        <Text> 10 likes</Text>
        <Text> 12 comments</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text>ok</Text>
        </TouchableOpacity>
        <View>
          <TextInput
            placeholder="Please enter your child's name"
            // onChangeText={setInputValue}
            // value={inputValue}
            style={styles.input}
            selectionColor={"#E87A00"}
          />
          <TouchableOpacity>
            <Text>ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  post: {
    borderWidth: 1,
    borderColor: "#707070",
    padding: 5,
  },

  top: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  profile: {
    width: "100%",
    height: "100%",
  },
  proinfo: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  time: {
    color: "#808080",
    fontSize: 12,
  },
});
