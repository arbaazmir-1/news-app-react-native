import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StatusBar } from "expo-status-bar";

import {
  Flex,
  Row,
  Column,
  Button,
  Text,
  Image,
  Box,
  Spacer,
} from "native-base";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashPage from "./DashPage";
import Settings from "./Settings";
import SavedNews from "./SavedNews";
import { Provider } from "react-redux";
import store from "../redux/store";
const Tab = createBottomTabNavigator();
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const HomePage = ({ navigation }) => {

    

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          //do nothing
        } else {
            navigation.replace("Login")
          // ...
        }
      });
    return unsubscribe;
  }, []);
  

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
    <Tab.Navigator>
    <Tab.Screen
        name="Dashboard"
        component={DashPage}

        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
        <Tab.Screen
        name="Saved"
        component={SavedNews}
        options={{
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-bookmark" color={color} size={size} />
            ),
            headerShown: false,
        }}
        />
        <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-settings" color={color} size={size} />
            ),
            headerShown: false,
        }}
        />
    
  </Tab.Navigator>
    </Provider>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
