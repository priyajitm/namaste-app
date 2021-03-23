import React from "react";
import { Modal, View, StyleSheet, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function ChatModal({ children, visible, animation, handleCancel, style }) {
  return (
    <Modal animationType={animation} transparent={true} visible={visible}>
      <View style={[styles.container, style]}>{children}</View>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={handleCancel}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "27%",
    width: "95%",
    borderRadius: 25,
    overflow: "hidden",
    alignSelf: "center",
    marginTop: "auto",
    backgroundColor: "white",
  },
  buttonContainer: {
    height: "7%",
    width: "95%",
    borderRadius: 25,
    overflow: "hidden",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    padding: 10,
    fontSize: 20,
    fontWeight: "600",
  },
});

export default ChatModal;
