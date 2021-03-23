import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { HoldItem } from "react-native-hold-menu";
import Clipboard from "expo-clipboard";

import AppText from "./Text";

const MenuItems = [
  { text: "Reply", onPress: () => {} },
  { text: "Forward", onPress: () => {} },
  {
    text: "Copy",
    onPress: () => {
      Clipboard.setString(message);
    },
  },
  { text: "Delete", isDestructive: true, onPress: () => {} },
];

function ChatBox({ type, message, time }) {
  return (
    <HoldItem items={MenuItems}>
      <View style={[styles.chatBoxContainer, styles[type]]}>
        <AppText>{message}</AppText>
        <Text style={styles.chatBoxTime}>{time}</Text>
      </View>
    </HoldItem>
  );
}

const styles = StyleSheet.create({
  chatBoxContainer: {
    maxWidth: 300,
    minHeight: 30,
    borderRadius: 5,
    overflow: "hidden",
    margin: 10,
    padding: 10,
  },
  chatBoxTime: {
    alignSelf: "flex-end",
  },
  outgoing: {
    alignSelf: "flex-end",
    backgroundColor: "#dcf8c6",
  },
  incoming: {
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFF",
  },
});

export default ChatBox;
