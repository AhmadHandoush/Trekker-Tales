import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [focus, setFocus] = useState(false);
  const handleFocus = () => {
    setFocus(true);
  };
  const data = [
    {
      id: "1",
      name: "Jane",
      destination: "Beirut",
      description: "the best trip ever ",
      date: "",
      trip_image: require("../../../assets/friends-3542235_1280-1024x658.jpg"),
    },
    {
      id: "2",
      name: "Jane",
      destination: "Beirut",
      description: "the best trip ever ",
      date: "",
      trip_image: require("../../../assets/friends-3542235_1280-1024x658.jpg"),
    },
    {
      id: "3",
      name: "Jane",
      destination: "Beirut",
      description: "the best trip ever ",
      date: "",
      trip_image: require("../../../assets/friends-3542235_1280-1024x658.jpg"),
    },
  ];

  const handleSearch = (text) => {
    setSearchQuery(text);
  };
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.trip_image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.destination}>{item.destination}</Text>
      {/* Add other information you want to display */}
    </View>
  );
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.home}>
        <View style={styles.top}>
          <Text style={styles.hi}>Hi Ahmad </Text>
          <View style={[styles.search, focus && styles.focused]}>
            <Feather name="map-pin" size={20} color="#E7E7E7" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              onChangeText={handleSearch}
              onFocus={handleFocus}
              value={searchQuery}
              selectionColor={"#E87A00"}
            />
            <Feather name="search" size={20} color="#E7E7E7" />
          </View>
        </View>
        {/* .hero image  */}
        <View style={styles.hero}>
          <ImageBackground
            source={require("../../../assets/hero.webp")}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 20,
              maxHeight: "100%",
              maxWidth: "100%",
              display: "flex",
            }}
          >
            <Text style={styles.heroText}>
              We are here to help you find the best trip for your children
            </Text>
          </ImageBackground>
        </View>
        {/* top trips */}
        <View style={styles.toptrips}>
          <View style={styles.topone}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Top Trips</Text>
            <Link href="/" style={{ color: "#e87a00" }}>
              See all
            </Link>
          </View>
          <FlatList
            data={data.slice(0, 2)}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
          />
        </View>

        {/* .past trips  */}
        <View style={styles.pasttrips}>
          <View style={styles.topone}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Past Trips</Text>
            <Link href="/" style={{ color: "#e87a00" }}>
              See all
            </Link>
          </View>
        </View>
        <View>
          <Text>ahmad</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
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
  },
  hi: {
    marginTop: 50,
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 20,
  },
  search: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    gap: 10,
    backgroundColor: "white",
    borderRadius: 40,
    padding: 5,
    height: 40,
  },
  searchInput: {
    flex: 1,
  },
  focused: {
    borderColor: "blue",
  },
  hero: {
    width: "95%",
    height: 200,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 20,
    borderRadius: 20,
    overflow: "hidden",

    backgroundColor: "red",
  },
  heroText: {
    color: "white",
    marginLeft: 10,
    marginTop: 150,
    fontWeight: "bold",
  },
  toptrips: {
    width: "93%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 15,
  },

  topone: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    width: "45%",
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    gap: 5,
    height: 150,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
    marginBottom: 5,
  },
  name: {
    paddingLeft: 8,
    marginTop: -10,
    fontWeight: "bold",
    fontSize: 18,
  },
  destination: {
    paddingLeft: 8,
    marginTop: -5,
  },
  pasttrips: {
    width: "93%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 15,
  },
});
