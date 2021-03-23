import React from "react";
import { View, StyleSheet } from "react-native";

import { HoldItem } from "react-native-hold-menu";

const MenuItems = [
  { text: "Reply", onPress: () => {} },
  { text: "Forward", onPress: () => {} },
  { text: "Copy", onPress: () => {} },
  { text: "Delete", isDestructive: true, onPress: () => {} },
];

function Test() {
  return (
    <View>
      <HoldItem items={MenuItems}>
        <View style={styles.sample1} />
      </HoldItem>
      <HoldItem items={MenuItems}>
        <View />
      </HoldItem>
      <HoldItem items={MenuItems} menuAnchorPosition="bottom-right">
        <View />
      </HoldItem>
    </View>
  );
}

const styles = StyleSheet.create({
  sample1: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
  },
});

export default Test;
