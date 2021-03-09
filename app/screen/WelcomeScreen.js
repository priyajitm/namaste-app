import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Form from "../components/Form";
import FormField from "../components/FormField";
import SubmitButton from "../components/SubmitButton";

function WelcomeScreen() {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required().min(1).max(8).label("Username"),
    name: Yup.string().required().min(1).label("Display Name"),
    email: Yup.string().required().email().label("Email"),
  });

  const [visible, setVisible] = useState(true);

  const verifyData = (data) => {
    console.log(data);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/namaste.png")} />

      {visible ? (
        <Form
          initialValues={{ username: "", name: "", email: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => verifyData(values)}
        >
          <FormField
            icon="at"
            placeholder="Public_Username"
            width="90%"
            name="username"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <FormField
            icon="account"
            placeholder="Display Name"
            width="90%"
            name="name"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <FormField
            icon="email"
            placeholder="Email"
            width="90%"
            name="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <SubmitButton title="Sign In" width="90%" />
        </Form>
      ) : (
        <Form
          initialValues={{ otp: "" }}
          onSubmit={(values) => console.log(values)}
        >
          <FormField
            icon="onepassword"
            placeholder="One Time Password"
            width="90%"
            name="otp"
            keyboardType="number-pad"
          />
          <SubmitButton title="Submit" width="90%" />
        </Form>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4a261",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    position: "absolute",
    top: 60,
  },
});

export default WelcomeScreen;
