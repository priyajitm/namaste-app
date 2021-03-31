import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import Form from "../components/Form";
import FormField from "../components/FormField";
import ImageInput from "../components/ImageInput";
import SubmitButton from "../components/SubmitButton";
import { appAuth, uploadFile, appFirestore } from "../config/firebase";

function AddProfileDetailsScreen() {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required().min(1).max(8).label("Username"),
    name: Yup.string().required().min(1).max(8).label("Name"),
    status: Yup.string().label("Status"),
    image: Yup.mixed().required().label("Image"),
  });

  const verifyData = async ({ name, status, username, image }) => {
    var user = appAuth.currentUser;
    if (user != null) {
      const imageUrl = await uploadFile(image);

      if (imageUrl) {
        await appFirestore.collection("users").doc(user.uid).set({
          name,
          status,
          username,
          profilePic: imageUrl,
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <Form
        initialValues={{ username: "", name: "", status: "", image: null }}
        validationSchema={validationSchema}
        onSubmit={(values) => verifyData(values)}
      >
        <ImageInput name="image" />

        <FormField
          placeholder="Public Username"
          width="90%"
          name="username"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={30}
        />

        <FormField
          placeholder="Display Name"
          width="90%"
          name="name"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={30}
        />

        <FormField
          placeholder="Add you status"
          width="90%"
          name="status"
          autoCapitalize="none"
          textContentType="none"
          multiline={true}
          maxLength={140}
        />
        <SubmitButton title="Finish" width="90%" />
      </Form>
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
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 100,
    backgroundColor: "white",
  },
});

export default AddProfileDetailsScreen;
