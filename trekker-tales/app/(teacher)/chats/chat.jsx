// import { StyleSheet, Text, View } from "react-native";
// import React, { useEffect, useState } from "react";
// import { Bubble, GiftedChat } from "react-native-gifted-chat";
// import { BASE_URL } from "../../utils/constants";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useLocalSearchParams } from "expo-router";
// import firestore from "@react-native-firebase/firestore";

// const Chat = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(null);
//   const { id } = useLocalSearchParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const token = await AsyncStorage.getItem("token");
//         if (token) {
//           const response = await fetch(`${BASE_URL}/api/user`, {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });
//           if (!response.ok) {
//             throw new Error("Failed to fetch data");
//           }
//           const data = await response.json();

//           setUser(data.user);
//           setLoading(false);
//         } else {
//           setLoading(true);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);
//   const [messages, setMessages] = useState([]);
//   const getAllmsg = async () => {
//     const docid = id > user.id ? user.id + "-" + id : id + "-" + user.id;
//     const query = await firestore()
//       .collection("chatrooms")
//       .doc(docid)
//       .collection("messages")
//       .orderBy("createdAt", "desc")
//       .get();
//     const allmsg = query.docs.map((docSanp) => {
//       return {
//         ...docSanp.date(),
//         createdAt: docSanp.data.createdAt().toDate(),
//       };
//     });
//     setMessages(allmsg);
//   };

//   useEffect(() => {
//     getAllmsg();
//   }, []);

//   const onSend = (messageArray) => {
//     const msg = messageArray[0];
//     const myMsg = {
//       ...msg,
//       sentBy: user.id,
//       sentTo: id,
//       createdAt: new Date(),
//     };
//     setMessages((previousMessages) =>
//       GiftedChat.append(previousMessages, myMsg)
//     );
//     const docid = id > user.id ? user.id + "-" + id : id + "-" + user.id;
//     firestore()
//       .collection(chatrooms)
//       .doc(docid)
//       .collection("messages")
//       .add({ ...myMsg, createdAt: firestore.FieldValue.serverTimestamp() });
//   };
//   return (
//     <View style={{ flex: 1 }}>
//       {user && (
//         <GiftedChat
//           messages={messages}
//           onSend={(messages) => onSend(messages)}
//           user={{
//             _id: user.id,
//           }}
//         />
//       )}
//     </View>
//   );
// };

// export default Chat;

// const styles = StyleSheet.create({});
