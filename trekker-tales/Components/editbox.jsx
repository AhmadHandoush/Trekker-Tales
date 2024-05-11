import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const EditProfile = ({ handleEdit }) => {
  return (
    <View style={styles.edit}>
      <View style={styles.closesection}>
        <TouchableOpacity style={styles.btn_close}>
          <Text style={styles.close_text}>X</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}> Edit Profile</Text>
      <View>
        <TextInput
          style={styles.inputfield}
          placeholder="Add Trip Post"
          // onChangeText={setCaption}
          // value={caption}
          selectionColor={"#E87A00"}
          required
        />
        <TextInput
          style={styles.inputfield}
          placeholder="Add Trip Post"
          // onChangeText={setCaption}
          // value={caption}
          selectionColor={"#E87A00"}
          required
        />
        <TextInput
          style={styles.inputfield}
          placeholder="Add Trip Post"
          // onChangeText={setCaption}
          // value={caption}
          selectionColor={"#E87A00"}
          required
        />
        <TouchableOpacity onPress={handleEdit} style={styles.btn_save}>
          <Text style={styles.save_text}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  edit: {
    position: "absolute",
    width: 300,

    marginRight: 200,
    backgroundColor: "white",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    gap: 5,
    top: "50%",
    left: "50%",
    transform: [{ translateX: -150 }, { translateY: -50 }],
    zIndex: 2000,
    borderRadius: 8,
  },
  closesection: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  btn_close: {
    width: 30,
    height: 30,
    backgroundColor: "#d3d3d3",
    borderRadius: 15,
    padding: 1,
    textAlign: "right",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: -25,
    top: -20,
  },
  close_text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  title: {},
  inputfield: {},
  btn_save: {},
  save_text: {},
});
