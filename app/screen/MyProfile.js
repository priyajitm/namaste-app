import React from "react";
import { useState } from "react";
import { Image, Text, TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "../components/Header";
import Screen from "../components/Screen";
import colors from "../config/colors";
import * as Yup from "yup";
import { useFormikContext } from "formik";

import Form from "../components/Form";
import FormField from "../components/FormField";
import ImageInput from "../components/ImageInput";
import SubmitButton from "../components/SubmitButton";
import { useRef } from "react";
import { appAuth, appFirestore, userData } from "../config/firebase";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().min(1).max(8).label("Display Name"),
  status: Yup.string().label("Status"),
});

const verifyData = (data) => {
  console.log(data);
};

function MyProfile({ self }) {
  const user = appAuth.currentUser.uid;
  const userData = async (uid) => {
    const doc = await appFirestore.collection("users").doc(uid).get();

    if (doc) {
      setName(doc.data().name);
      setStatus(doc.data().status);
      setusername(doc.data().username);
      setUserImage(doc.data().profilePic);
    }
  };

  if (user) {
    userData(user);
  }
  const [isEdit, setEdit] = useState(false);
  const [name, setName] = useState();
  const [status, setStatus] = useState();
  const [userImage, setUserImage] = useState();
  const [username, setusername] = useState();

  const handlePress = () => {
    setEdit(!isEdit);
  };

  const rightIconName = !isEdit ? "file-edit-outline" : "close";

  return (
    <Screen>
      <Header
        leftIconName="chevron-left"
        headerName="Profile"
        rightIconName={rightIconName}
        handleRightIcon={handlePress}
      />
      <View style={styles.container}>
        {!isEdit ? (
          <>
            <View style={{ alignItems: "center" }}>
              <Image style={styles.image} source={{ uri: userImage }} />

              <Text style={styles.name}>{name}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
            <View style={styles.optionsContainer}>
              <Text style={styles.options}>Username: {username}</Text>
              <Text style={styles.options}>Namaste Web</Text>
              <Text style={styles.options}>Blocked Users</Text>
              <Text style={styles.options}>Delete Account</Text>
            </View>
            <View style={styles.logOutButton}>
              <Text style={styles.logOutText}>Log Out</Text>
            </View>
          </>
        ) : (
          <View style={{ alignItems: "center", top: 50 }}>
            <Form
              initialValues={{
                username: name,
                status: status,
                image: userImage,
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => verifyData(values)}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ImageInput name="image" />
                <MaterialCommunityIcons
                  name="file-edit-outline"
                  size={50}
                  style={{ position: "absolute" }}
                />
              </View>

              <FormField
                placeholder="Display Name"
                width="90%"
                name="username"
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
              <SubmitButton title="Save" width={350} />
            </Form>
          </View>
        )}
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
    width: 150,
    height: 150,
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
  logOutButton: {
    width: "90%",
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  logOutText: {
    fontSize: 20,
    fontWeight: "800",
  },
});

export default MyProfile;
