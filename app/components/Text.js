import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";

function AppText({ children, style, ...props }) {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
});

export default AppText;
