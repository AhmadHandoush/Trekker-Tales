import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Posts = () => {
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
  return (
    <View style={styles.postsPage}>
      <View style={styles.add}>
        <Image
          source={require("../../../assets/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg")}
        />
      </View>
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({});
