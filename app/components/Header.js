import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../components/Text";
import colors from "../config/colors";

function Header({ leftIconName, headerName, rightIconName, handleLeftIcon }) {
  return (
    <>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name={leftIconName}
          onPress={handleLeftIcon}
          size={30}
        />
        <AppText style={styles.headerText}>{headerName}</AppText>
        <MaterialCommunityIcons name={rightIconName} size={30} />
      </View>
      <View style={styles.headerBorder} />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
  },
  headerText: {
    fontWeight: "800",
    fontSize: 20,
    paddingBottom: 20,
  },
});

export default Header;
