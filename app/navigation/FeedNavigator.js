import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MessagesScreen from "../screen/MessagesScreen";
import ChatScreen from "../screen/ChatScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Messages"
      component={MessagesScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Chats"
      component={ChatScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
