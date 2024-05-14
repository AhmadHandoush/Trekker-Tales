// import React, { useEffect, useState } from "react";
// import { View, Text, FlatList, TextInput, Button } from "react-native";
// import { GiftedChat } from "react-native-gifted-chat";
// import { db } from "../../firebase";

// const TeacherChatScreen = ({ route }) => {
//   const { conversationId } = route.params;
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     const unsubscribe = db
//       .collection("conversations")
//       .doc(conversationId)
//       .collection("messages")
//       .orderBy("createdAt", "desc")
//       .onSnapshot((snapshot) => {
//         const messagesData = snapshot.docs.map((doc) => ({
//           _id: doc.id,
//           ...doc.data(),
//         }));
//         setMessages(messagesData);
//       });

//     return () => unsubscribe();
//   }, [conversationId]);

//   const onSend = async (newMessages = []) => {
//     try {
//       await db
//         .collection("conversations")
//         .doc(conversationId)
//         .collection("messages")
//         .add(newMessages[0]);
//     } catch (error) {
//       console.error("Error sending message:", error);
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <GiftedChat
//         messages={messages}
//         onSend={(messages) => onSend(messages)}
//         user={{
//           _id: "teacherId",
//           name: "Teacher",
//         }}
//       />
//     </View>
//   );
// };

// export default TeacherChatScreen;
