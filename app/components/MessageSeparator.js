import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

function MessageSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "76%",
    height: 1,
    backgroundColor: colors.light,
    alignSelf: "flex-end",
  },
});

export default MessageSeparator;
