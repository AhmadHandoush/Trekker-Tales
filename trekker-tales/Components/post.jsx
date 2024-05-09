import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Post = ({ post }) => {
  const { caption, image, created_at } = post;
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState(10);
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
      <Image source={image} style={styles.postImage} />
      <View style={styles.info}>
        <Text style={styles.likes}> 10 likes</Text>
        <Text style={styles.comments}> 12 comments</Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="heart-outline"
            size={32}
            color="black"
          />
        </TouchableOpacity>
        <View style={styles.addComment}>
          <TextInput
            placeholder="Add a comment"
            // onChangeText={setInputValue}
            // value={inputValue}
            style={styles.input}
            selectionColor={"#E87A00"}
          />
          <TouchableOpacity style={styles.submit}>
            <Text style={styles.adding}>Add</Text>
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
    borderColor: "#d7d7d7",
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 6,
  },

  top: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 5,
    marginLeft: 5,
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
  postImage: {
    width: "100%",
    height: 250,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
    paddingTop: 5,
  },
  likes: {
    color: "#808080",
  },
  comments: {
    color: "#808080",
  },
  heart: {},
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 5,
    paddingLeft: 5,
    marginTop: 10,
  },
  addComment: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#d7d7d7",
    borderRadius: 10,
    padding: 5,

    paddingRight: 5,
    paddingLeft: 10,
    width: 260,
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    height: 30,
  },
  submit: {
    backgroundColor: "#e87a00",
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
  adding: {
    color: "white",
    fontWeight: "bold",
  },
});
