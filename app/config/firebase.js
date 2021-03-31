import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// Firebase Configuration

const firebaseConfig = {
  apiKey: "AIzaSyBimaP18wU-dOdf6PLAbtGEd1PU3dw4ib8",
  authDomain: "namaste-6e650.firebaseapp.com",
  projectId: "namaste-6e650",
  storageBucket: "namaste-6e650.appspot.com",
  messagingSenderId: "1057807915837",
  appId: "1:1057807915837:web:ce16cbc0ff0b8a0fbc4354",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const appStorage = firebase.storage();
const appFirestore = firebase.firestore();
const appAuth = firebase.auth();

// Phone Authentication

const getOTP = async (phone, recaptcha) => {
  const phoneProvider = new firebase.auth.PhoneAuthProvider();
  const verificationId = await phoneProvider.verifyPhoneNumber(
    phone,
    recaptcha
  );
  return verificationId;
};

const checkOTP = async (verificationId, verificationCode) => {
  const credential = firebase.auth.PhoneAuthProvider.credential(
    verificationId,
    verificationCode
  );
  const authResult = await firebase.auth().signInWithCredential(credential);
  return authResult;
};

// Profile Image Upload

const uploadFile = async (uri) => {
  const imageName = Math.random().toString(36).substr(2, 5);
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });

  const ref = firebase.storage().ref().child(imageName);
  const snapshot = await ref.put(blob);

  blob.close();

  return await snapshot.ref.getDownloadURL();
};

export {
  firebaseConfig,
  appFirestore,
  appStorage,
  appAuth,
  getOTP,
  checkOTP,
  uploadFile,
};
