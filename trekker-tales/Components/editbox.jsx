import { StyleSheet, Text, View } from "react-native";
import React from "react";

const EditProfile = () => {
  return (
    <View style={styles.edit}>
      <TouchableOpacity style={styles.btn_close}>
        <Text style={styles.close_text}>X</Text>
      </TouchableOpacity>
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
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "white",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  btn_close: {},
  close_text: {},
  title: {},
  inputfield: {},
  btn_save: {},
  save_text: {},
});
