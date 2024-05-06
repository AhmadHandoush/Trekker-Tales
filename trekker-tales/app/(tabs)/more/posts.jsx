import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/FontAwesome";

const Posts = () => {
  const [text, setText] = useState("");
  //   const user = {
  //     id: 22,
  //     name: "louna",
  //     email: "mouna@gmail.com",
  //     email_verified_at: null,
  //     address: null,
  //     phone: null,
  //     longitude: null,
  //     latitude: null,
  //     user_image: "1714600471.jpg",
  //     created_at: "2024-05-01T21:25:25.000000Z",
  //     updated_at: "2024-05-01T21:54:31.000000Z",
  //     role: "parent",
  //   };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result);
    }
  };
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("text", text);
      formData.append("image", {
        uri: image.uri,
        type: "image/jpeg", // adjust the type according to your image format
        name: "image.jpg", // you can adjust the file name as needed
      });

      const response = await fetch("YOUR_BACKEND_URL", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      // Handle successful submission
      console.log("Data submitted successfully!");
      // Reset form fields
      setText("");
      setImage(null);
    } catch (error) {
      console.error("Error submitting data:", error.message);
    }
  };

  return (
    <View style={styles.postsPage}>
      <View style={styles.add}>
        <View style={styles.img}>
          <Image
            source={require("../../../assets/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.input}
            placeholder="Add Trip Post"
            onChangeText={setText}
            value={text}
          />
          <TouchableOpacity style={styles.btnAdd}>
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.fileInputButton} onPress={pickImage}>
          <Icon name="camera" size={20} color="#808080" style={styles.arrow} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  postsPage: {
    paddingTop: 60,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
  },
  add: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
