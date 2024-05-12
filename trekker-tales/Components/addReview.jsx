import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
// import RNPickerSelect from "react-native-picker-select";
import { Picker } from "@react-native-picker/picker";

const AddReview = () => {
  return (
    <View style={styles.reviewBox}>
      <TouchableOpacity style={styles.btn_close}>
        <Text style={styles.text_close}>X</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Add Review</Text>
      <View>
        <Text>Rating</Text>
        <Picker
          //   selectedValue={value}
          //   onValueChange={onValueChange}
          style={{ height: 50, width: 100 }}
        >
          <Picker.Item label="1" value={1} />
          <Picker.Item label="2" value={2} />
          <Picker.Item label="3" value={3} />
          <Picker.Item label="4" value={4} />
          <Picker.Item label="5" value={5} />
        </Picker>
      </View>
      <View>
        <Text>Content</Text>
        <TextInput
          // style={styles.input}
          // onChangeText={handleContentChange}
          // value={content}
          // multiline={true}
          // numberOfLines={4}
          placeholder="Enter your feedback"
        />
      </View>
    </View>
  );
};

export default AddReview;
const styles = StyleSheet.create({
  reviewBox: {
    position: "absolute",
    top: "50%",
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "green",
    padding: 10,
    transform: [{ translateX: 50 }, { translateY: 50 }],
    borderRadius: 8,
  },
  btn_close: {
    position: "absolute",
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "black",
    top: -15,
    right: -10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text_close: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
