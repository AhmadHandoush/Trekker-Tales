import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const Profile = () => {
  // const [user, setUser] = useState([]);
  const user = {
    name: "Ahmad Handoush",
    email: "ahmadhandoush5@gmail.com",
    phone: "81303288",
    address: "Koura",
    profile_image:
      "../../../assets/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg",
  };
  const { name, email, phone, address, profile_image } = user;
  return (
    <View style={styles.profile}>
      <View style={styles.top}>
        <View style={styles.image}>
          <Image source={profile_image} style={styles.img}></Image>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  top: {
    height: 180,
    width: "100%",
    backgroundColor: "#E87A00",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    position: "relative",
  },
  image: {
    position: "absolute",
    bottom: "-30%",
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    left: "25%",
    backgroundColor: "#d7d7d7",
    transform: [{ translateX: 50 }],
  },
  img: {
    width: "100%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
});
