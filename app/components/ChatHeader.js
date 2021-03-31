import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../components/Text";
import colors from "../config/colors";

function Header({
  leftIconName,
  headerName,
  rightIconName,
  rightIcon2Name,
  handleLeftIcon,
  name,
  image,
  showUserProfile,
}) {
  return (
    <>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name={leftIconName}
          onPress={handleLeftIcon}
          size={30}
          color="white"
        />
        <View
          style={styles.userInfo}
          onStartShouldSetResponder={showUserProfile}
        >
          <Image source={image} style={styles.image} />
          <AppText numberOfLines={1} style={{ color: "white" }}>
            {name}
          </AppText>
        </View>

        <AppText style={styles.headerText}>{headerName}</AppText>
        <View style={styles.rightIcons}>
          <MaterialCommunityIcons
            name={rightIconName}
            size={30}
            color="white"
          />
          <MaterialCommunityIcons
            name={rightIcon2Name}
            size={30}
            color="white"
          />
        </View>
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
    paddingBottom: 10,
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    alignItems: "center",
  },
  headerText: {
    fontWeight: "800",
    fontSize: 20,
    paddingBottom: 20,
  },
  userInfo: {
    flexDirection: "row",
    flex: 2,
    paddingHorizontal: 15,
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  rightIcons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
  },
});

export default Header;
