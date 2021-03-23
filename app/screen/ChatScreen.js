import React, { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Platform,
  ImageBackground,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ChatBox from "../components/ChatBox";
import ChatHeader from "../components/ChatHeader";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ChatModal from "../components/ChatModal";
import ChatModalOption from "../components/ChatModalOption";
import ModalOptionSeparator from "../components/ModalOptionSeparator";

const user = {
  name: "Akshay Mohanti corporate number",
  image: { uri: "https://randomuser.me/api/portraits/med/men/15.jpg" },
};

// const data = [
//   {
//     id: 1,
//     message: "chabke soja kore debo ekdom",
//     time: "2:04 PM",
//     type: "incoming",
//   },
//   {
//     id: 2,
//     message: "sutiye lal kore debo",
//     time: "12:24 PM",
//     type: "incoming",
//   },
// ];

function ChatScreen({ route }) {
  const chats = route.params;
  // console.log(chats);

  // chats.messages.map((message) => console.log(message.text));

  const [typing, setTyping] = useState(false);
  const [message, setMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [messageModalVisible, setMessageModalVisible] = useState(false);
  const [hideFooter, setHideFooter] = useState(false);
  const [chatMessage, setChatMessage] = useState();

  const handleChange = (text) => {
    setTyping(true);
    setMessage(text);
  };

  const submitMessage = () => {
    setChatMessage([
      ...chatMessage,
      {
        id: Math.random(),
        message: message,
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
        type: "outgoing",
      },
    ]);
    setTyping(false);
    setMessage("");
  };

  const modalStatus = () => {
    setModalVisible(!modalVisible);
    setHideFooter(!hideFooter);
  };

  return (
    <Screen style={{ backgroundColor: "#128C7E" }}>
      <ChatHeader
        leftIconName="chevron-left"
        rightIconName="video"
        rightIcon2Name="phone"
        name={chats.name}
        image={chats.image}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={50}
        style={styles.chatBoxContainer}
      >
        <ImageBackground
          source={require("../assets/background-chat.png")}
          style={{ width: "100%", height: "100%", flex: 1 }}
        >
          <ScrollView style={{ ImageBackground }}>
            {/* chats.messages.map((message) => console.log(message.text)); */}
            {chats.messages.map((item) => {
              return (
                <ChatBox
                  type="incoming"
                  key={Math.random()}
                  message={item.text}
                  time={item.time}
                />
              );
            })}
          </ScrollView>
        </ImageBackground>

        {!hideFooter && (
          <View style={styles.input}>
            <MaterialCommunityIcons
              name="plus"
              size={30}
              style={styles.icon}
              onPress={modalStatus}
            />

            <TextInput
              placeholder="Message"
              style={styles.textBox}
              value={message}
              onChangeText={handleChange}
            />

            {typing ? (
              <MaterialCommunityIcons
                name="send"
                size={30}
                style={styles.icon}
                onPress={submitMessage}
              />
            ) : (
              <MaterialCommunityIcons
                name="microphone-outline"
                size={30}
                style={styles.icon}
              />
            )}
          </View>
        )}

        <ChatModal
          visible={messageModalVisible}
          handleCancel={modalStatus}
          animation="slide"
        >
          <ChatModalOption
            iconName="camera-outline"
            iconColor="blue"
            iconSize={35}
            text="Camera"
          />
        </ChatModal>
      </KeyboardAvoidingView>

      <ChatModal
        visible={modalVisible}
        handleCancel={modalStatus}
        animation="slide"
      >
        <ChatModalOption
          iconName="camera-outline"
          iconColor="blue"
          iconSize={35}
          text="Camera"
        />
        <ModalOptionSeparator />
        <ChatModalOption
          iconName="image-outline"
          iconColor="blue"
          iconSize={35}
          text="Photo Gallery"
        />
        <ModalOptionSeparator />
        <ChatModalOption
          iconName="file-outline"
          iconColor="blue"
          iconSize={35}
          text="Document"
        />
        <ModalOptionSeparator />
        <ChatModalOption
          iconName="map-marker-outline"
          iconColor="blue"
          iconSize={35}
          text="Location"
        />
      </ChatModal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  chatBoxContainer: {
    flex: 1,
  },
  input: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: colors.light,
    borderTopWidth: 1,
    backgroundColor: "#128C7E",
  },
  textBox: {
    fontSize: 17,
    color: "#000",
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 12,
    borderColor: "#075E54",
    borderWidth: 1,
  },
  icon: {
    marginHorizontal: 7,
    color: "white",
  },
});

export default ChatScreen;
