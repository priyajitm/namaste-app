import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Screen from "../components/Screen";
import colors from "../config/colors";

function UserProfile({ route }) {
  const chats = route.params;

  return (
    <Screen>
      <Header leftIconName="chevron-left" headerName="Profile" />
      <View style={styles.container}>
        <Image style={styles.image} source={chats.image} />
        <Text style={styles.name}>{chats.name}</Text>
        <Text style={styles.status}>{chats.status}</Text>
        <View style={styles.optionsContainer}>
          <Text style={styles.options}>Username: {chats.username}</Text>
          <Text style={styles.options}>Mute Messages</Text>
          <Text style={styles.options}>Block User</Text>
          <Text style={styles.options}>Clear Chat</Text>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: "600",
  },
  status: {
    fontSize: 18,
    margin: 20,
  },
  optionsContainer: {
    marginTop: 20,
    alignSelf: "flex-start",
    width: "100%",
  },
  options: {
    fontSize: 18,
    borderColor: colors.light,
    borderWidth: 1,
    padding: 15,
  },
});

export default UserProfile;
