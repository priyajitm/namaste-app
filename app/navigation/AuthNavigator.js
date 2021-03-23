import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screen/WelcomeScreen";
import AddProfileDetailsScreen from "../screen/AddProfileDetailsScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProfileAdd"
      component={AddProfileDetailsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
