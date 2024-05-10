import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MyTrip = () => {
  return (
    <View style={styles.mine} key={index}>
      <View style={styles.mineimg}>
        <Image
          style={styles.mineimage}
          source={require("../../../assets/360_F_113467839_JA7ZqfYTcIFQWAkwMf3mVmhqXr7ZOgEX.jpg")}
        />
      </View>
      <View style={styles.mineinfo}>
        <Text style={styles.mineName}>{item.trip.name}</Text>
        <Text style={styles.mineDate}>
          <Icon
            name="calendar"
            size={12}
            color="#808080"
            style={styles.dateicon}
          />{" "}
          {item.trip.date}
        </Text>
      </View>
    </View>
  );
};

export default MyTrip;

const styles = StyleSheet.create({});
