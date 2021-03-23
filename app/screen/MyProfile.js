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

const userData = {
  name: "John Doe",
  image: { uri: "https://randomuser.me/api/portraits/men/51.jpg" },
  status:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ma",
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required().min(1).max(8).label("Display Name"),
  status: Yup.string().label("Status"),
});

const verifyData = (data) => {
  console.log(data);
};

function MyProfile({ self }) {
  const [isEdit, setEdit] = useState(false);
  const [name, setName] = useState(userData.name);
  const [status, setStatus] = useState(userData.status);
  const [userImage, setUserImage] = useState(userData.image.uri);

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
              <Image style={styles.image} source={userData.image} />

              <Text style={styles.name}>{userData.name}</Text>
              <Text style={styles.status}>{userData.status}</Text>
            </View>
            <View style={styles.optionsContainer}>
              <Text style={styles.options}>Username:</Text>
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
