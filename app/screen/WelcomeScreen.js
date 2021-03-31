import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Text,
} from "react-native";

import Button from "../components/Button";

import Form from "../components/Form";
import FormField from "../components/FormField";
import SubmitButton from "../components/SubmitButton";
import AppTextInput from "../components/TextInput";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/namaste.png")} />
      <View
        style={{
          justifyContent: "space-around",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text style={styles.subTitle}>
          Namaste is a cross platform mobile messaging with friends all over the
          world
        </Text>
        <Button title="Terms of Service" color="black" />
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 50,
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    margin: 20,
  },
  subTitle: {
    fontSize: 20,
    textAlign: "center",
    marginHorizontal: 50,
    lineHeight: 30,
  },
});

export default WelcomeScreen;
