import {
  Image,
  ScrollView,
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
                onChangeText={setText}
                value={text}
                selectionColor={"#E87A00"}
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
                style={styles.arrow}
              />
            </TouchableOpacity>
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
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  input: {
    borderWidth: 2,
    borderColor: "#E87A00",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
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
});
