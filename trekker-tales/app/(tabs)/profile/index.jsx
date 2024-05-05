import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
          <Image
            source={require("../../../assets/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg")}
            style={styles.img}
          />
        </View>
      </View>
      <View style={styles.topinfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <View style={styles.info}>
        <View></View>
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
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  topinfo: {
    marginTop: 70,
  },
  name: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  email: {
    textAlign: "center",
  },
});
