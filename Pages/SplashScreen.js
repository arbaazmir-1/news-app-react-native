import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { auth } from "../firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";


const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log(uid);
          if (uid) {
            navigation.replace("Home");
          }
          // ...
        } else {
            // User is signed out
            navigation.replace("Login")
          // ...
        }
      });
    return unsubscribe;
  }, []);
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
