import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../app/utils/constants";

const Post = ({ post, setSuccess }) => {
  const { caption, image, created_at, id } = post;
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState(0);

  const [commentsCount, setCommentsCount] = useState(0);

  useEffect(() => {
    const get_likes = async () => {
      const token = await AsyncStorage.getItem("token");
      try {
        const response = await fetch(`${BASE_URL}/api/likes/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();

        setLikes(data.likes);
      } catch (error) {
        console.error("Error fetching likes:", error);
      }
    };
    get_likes();
    const get_comments_number = async () => {
      const token = await AsyncStorage.getItem("token");
      try {
        const response = await fetch(`${BASE_URL}/api/comments_number/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();

        setCommentsCount(data.comments);
      } catch (error) {
        console.error("Error fetching comments count:", error);
      }
    };
    get_comments_number();
  }, []);

  const handleAddComment = async () => {
    const token = await AsyncStorage.getItem("token");
    try {
      const response = await fetch(`${BASE_URL}/api/add_comment/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ comment }),
      });
      const data = await response.json();

      setComment("");
      setSuccess("comment added successfully");
      setCommentsCount(commentsCount + 1);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
  const handleAddLike = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/api/like/${id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ postId: post.id }),
      });
      const data = await response.json();

      setLikes(likes + 1);
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

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
          <Text style={styles.time}>{created_at.slice(0, 10)}</Text>
        </View>
      </View>
      <Text style={styles.caption}>{caption}</Text>
      <Image
        source={{ uri: `${BASE_URL}/${image}` }}
        style={styles.postImage}
      />
      <View style={styles.info}>
        <Text style={styles.likes}> {likes} likes</Text>
        <Text style={styles.comments}> {commentsCount} comments</Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={handleAddLike}>
          <MaterialCommunityIcons
            name="heart-outline"
            size={32}
            color="black"
          />
        </TouchableOpacity>
        <View style={styles.addComment}>
          <TextInput
            placeholder="Add a comment"
            onChangeText={setComment}
            value={comment}
            style={styles.input}
            selectionColor={"#E87A00"}
          />
          <TouchableOpacity style={styles.submit} onPress={handleAddComment}>
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
  caption: {
    marginLeft: 10,
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
