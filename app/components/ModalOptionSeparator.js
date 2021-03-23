import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

function ModalOptionSeparator() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.light,
  },
});

export default ModalOptionSeparator;
