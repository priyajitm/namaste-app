import React, { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { HoldMenuProvider } from "react-native-hold-menu";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import { appAuth } from "./app/config/firebase";

export default function App() {
  const [isAuthenticated, setAuthenticated] = useState(true);

  // useEffect(() => {
  //   const user = appAuth.currentUser;
  //   setAuthenticated(true);
  // });

  return (
    <HoldMenuProvider theme="light">
      <NavigationContainer>
        {!isAuthenticated ? <AuthNavigator /> : <AppNavigator />}
      </NavigationContainer>
      {/* <WelcomeScreen /> */}
    </HoldMenuProvider>
  );
}
