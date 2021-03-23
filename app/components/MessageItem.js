import React from "react";
import { Image, View, StyleSheet, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import AppText from "../components/Text";
import MessageSeparator from "./MessageSeparator";
import colors from "../config/colors";

function MessageItem({
  name,
  message,
  image,
  read,
  time,
  renderRightActions,
  onPress,
}) {
  return (
    <>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.detailsContainer}>
              <AppText style={styles.name} numberOfLines={1}>
                {name}
              </AppText>
              <AppText style={styles.message} numberOfLines={2}>
                {message}
              </AppText>
            </View>
            <View>
              <AppText style={styles.time}>{time}</AppText>
              {!read && <AppText style={styles.notification}>1</AppText>}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>

      <MessageSeparator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: "800",
  },
  message: {
    color: colors.medium,
  },
  time: {
    fontSize: 14,
    color: colors.medium,
  },
  notification: {
    backgroundColor: "blue",
    color: "white",
    minWidth: 20,
    minHeight: 20,
    borderRadius: 10,
    alignSelf: "flex-end",
    overflow: "hidden",
    paddingHorizontal: 5,
    fontSize: 14,
  },
});

export default MessageItem;
