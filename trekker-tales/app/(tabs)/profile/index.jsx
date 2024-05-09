import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import TakenTrip from "../../../Components/takenTrip";

const Profile = () => {
  // const [user, setUser] = useState([]);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const response = await fetch("http://192.168.0.103:8000/api/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();

          setUser(data);
          setLoading(false);
        } else {
          setLoading(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // const [taken, setTaken] = useState([]);
  const trips = [
    {
      id: 1,
      name: "Treepo",
      date: "17-4-2024",
      rating: "4.2",
      fees: 40,
      trip_image: require("../../../assets/360_F_113467839_JA7ZqfYTcIFQWAkwMf3mVmhqXr7ZOgEX.jpg"),
    },
    {
      id: 2,
      name: "Adventures",
      date: "12-3-2024",
      rating: "4.7",
      fees: 70,
      trip_image: require("../../../assets/ChildrenAtAltitude.jpg"),
    },
    {
      id: 3,
      name: "Treepo",
      date: "17-4-2024",
      rating: "4.2",
      fees: 40,
      trip_image: require("../../../assets/brothers-hike-mountains-children-are-walking-along-mountain-trail-outdoor-activities-with-children-sibling-boy-with-his-brother-traveling_627829-12615.jpg"),
    },
  ];

  const { name, email, phone, address, profile_image } = user;
  const update = () => {
    console.log("update");
  };
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.top}>
          <View style={styles.image}>
            <Image
              source={require("../../../assets/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg")}
              style={styles.img}
            />
          </View>
        </View>
        <View style={styles.all}>
          <View style={styles.topinfo}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>
          <View style={styles.info}>
            <View style={styles.singleinfo}>
              <MaterialCommunityIcons
                name="email-outline"
                size={28}
                color="grey"
              />
              <Text style={styles.text}>{email}</Text>
            </View>
            <View style={styles.singleinfo}>
              <MaterialCommunityIcons name="phone" size={28} color="grey" />
              <Text style={styles.text}>{phone}</Text>
            </View>
            <View style={styles.singleinfo}>
              <MaterialCommunityIcons
                name="map-marker-outline"
                size={28}
                color="grey"
              />
              <Text style={styles.text}>{address}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={update}>
            <MaterialIcons name="border-color" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.taken}>
            <Text style={styles.takentitle}>Taken Trips</Text>

            <FlatList
              data={trips}
              renderItem={({ item }) => <TakenTrip trip={item} />}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
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
  info: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginTop: 40,
  },
  singleinfo: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  all: {
    width: "93%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  text: {
    fontWeight: "bold",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E87A00",
    padding: 10,
    borderRadius: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  taken: {
    marginTop: 20,
  },
  takentitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  scrollView: {},
});
