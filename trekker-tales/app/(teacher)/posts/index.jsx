import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/FontAwesome";
import Post from "../../../Components/post";
// import { Link } from "expo-router";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { BASE_URL } from "../../utils/constants";

const Posts = () => {
  const [caption, setCaption] = useState("");
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const get_posts = async () => {
      setLoading(true);
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const response = await fetch(`${BASE_URL}/api/posts`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          setPosts(data);
          setLoading(false);
        } else {
          setLoading(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    get_posts();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result);
    }
  };
  const handleSubmit = async () => {
    if (!caption) {
      Alert.alert("Error", "Please enter some text");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("caption", caption);
      formData.append("image", {
        uri: image.uri,
        type: image.type,
        name: image.fileName || `photo-${Date.now()}.jpg`,
      });

      const response = await fetch("your-backend-endpoint", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        Alert.alert("Success", "Trip post added successfully");

        setText("");
        setImage(null);
      } else {
        Alert.alert("Error", "Failed to add trip post");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Something went wrong. Please try again later");
    }
  };

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.postsPage}>
        <View style={styles.data}>
          <View style={styles.add}>
            <View style={styles.img}>
              <Image
                source={require("../../../assets/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg")}
                style={styles.image}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.inputfield}
                placeholder="Add Trip Post"
                onChangeText={setCaption}
                value={caption}
                selectionColor={"#E87A00"}
                required
              />
              <TouchableOpacity style={styles.btnAdd}>
                <Text style={styles.btnText}>Add</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.fileInputButton}
              onPress={pickImage}
            >
              <Icon
                name="camera"
                size={20}
                color="#808080"
                style={styles.camera}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.posts}>
            {posts.map((post, index) => (
              <Post post={post} key={index} setSuccess={setSuccess} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Posts;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    position: "relative",
  },
  data: {
    width: "93%",
    marginRight: "auto",
    marginLeft: "auto",
    flex: 1,
  },

  postsPage: {
    paddingTop: 100,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
  },
  add: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#d7d7d7",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    borderRadius: 20,
    justifyContent: "space-between",
  },

  btnAdd: {
    backgroundColor: "#E87A00",
    padding: 4,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 30,
    width: 55,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontWeight: "bold",
    color: "white",
  },
  fileInputButton: {
    fontSize: 40,
  },
  camera: {
    fontSize: 20,
    color: "#808080",
  },
  posts: {
    paddingTop: 20,
    display: "flex",
    gap: 10,
  },
});
