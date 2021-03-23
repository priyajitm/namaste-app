import { StatusBar } from "expo-status-bar";
import React from "react";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ChatScreen from "./app/screen/ChatScreen";
import MessagesScreen from "./app/screen/MessagesScreen";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput } from "react-native-gesture-handler";
import { HoldMenuProvider } from "react-native-hold-menu";
import Test from "./app/Test.js";
import UserProfile from "./app/screen/UserProfile";
import MyProfile from "./app/screen/MyProfile";
import StatusScreen from "./app/screen/StatusScreen";
import AddProfileDetailsScreen from "./app/screen/AddProfileDetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <HoldMenuProvider theme="light">
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      {/* <WelcomeScreen /> */}
    </HoldMenuProvider>
  );
}
