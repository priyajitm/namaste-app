import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ChatModalOption({ iconName, iconColor, iconSize, text }) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <MaterialCommunityIcons
          style={styles.icon}
          name={iconName}
          color={iconColor}
          size={iconSize}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    margin: 10,
  },
  text: {
    padding: 10,
    fontSize: 20,
  },
});

export default ChatModalOption;
