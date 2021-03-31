import React, { useState, useRef } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import * as FirebaseRecaptcha from "expo-firebase-recaptcha";
import { firebaseConfig, checkOTP, getOTP } from "../config/firebase";

export default function PhoneAuthScreen({ navigation }) {
  const recaptchaVerifier = useRef(null);
  const verificationCodeTextInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [verifyError, setVerifyError] = useState();

  const [verificationCode, setVerificationCode] = useState("");
  const [confirmError, setConfirmError] = useState();

  const isConfigValid = !!firebaseConfig.apiKey;

  const sendOTP = async () => {
    try {
      setVerifyError(undefined);
      setVerificationId("");
      const verificationId = await getOTP(
        phoneNumber,
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
      verificationCodeTextInput.current?.focus();
    } catch (err) {
      setVerifyError(err);
    }
  };

  const verifyOTP = async () => {
    try {
      setConfirmError(undefined);
      const authResult = await checkOTP(verificationId, verificationCode);
      setVerificationId("");
      setVerificationCode("");
      verificationCodeTextInput.current?.clear();
      navigation.navigate("ProfileAdd");
    } catch (err) {
      setConfirmError(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FirebaseRecaptcha.FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
          attemptInvisibleVerification={true}
        />
        <Text style={styles.title}>Verify your phone number</Text>
        <Text style={styles.subtitle}>
          Namaste will send an SMS message to verify your phone number. Enter
          your country code and phone number
        </Text>
        <Text style={styles.text}>Enter phone number</Text>
        <TextInput
          style={styles.textInput}
          autoFocus={isConfigValid}
          autoCompleteType="tel"
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          placeholder="+1 999 999 9999"
          editable={!verificationId}
          onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
        />
        <Button
          title={`${verificationId ? "Resend" : "Send"} Verification Code`}
          disabled={!phoneNumber}
          onPress={sendOTP}
        />
        {verifyError && (
          <Text style={styles.error}>{`Error: ${verifyError.message}`}</Text>
        )}

        {verificationId ? (
          <Text style={styles.success}>
            A verification code has been sent to your phone
          </Text>
        ) : undefined}
        <Text style={styles.text}>Enter verification code</Text>
        <TextInput
          ref={verificationCodeTextInput}
          style={styles.textInput}
          editable={!!verificationId}
          placeholder="123456"
          onChangeText={(verificationCode) =>
            setVerificationCode(verificationCode)
          }
        />
        <Button
          title="Confirm Verification Code"
          disabled={!verificationCode}
          onPress={verifyOTP}
        />
        {confirmError && (
          <Text style={styles.error}>{`Error: ${confirmError.message}`}</Text>
        )}
      </View>
      {!isConfigValid && (
        <View style={styles.overlay} pointerEvents="none">
          <Text style={styles.overlayText}>
            To get started, set a valid FIREBASE_CONFIG in App.tsx.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    marginTop: 50,
  },
  title: {
    marginBottom: 10,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    margin: 4,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    marginTop: 30,
    marginBottom: 4,
  },
  textInput: {
    marginBottom: 8,
    fontSize: 17,
    fontWeight: "bold",
  },
  error: {
    marginTop: 10,
    fontWeight: "bold",
    color: "red",
  },
  success: {
    marginTop: 10,
    fontWeight: "bold",
    color: "blue",
  },
  loader: {
    marginTop: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#FFFFFFC0",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    fontWeight: "bold",
  },
});
