import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";
import React from 'react';
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage';
import HomePage from './Pages/HomePage';
import NewsPage from './Pages/NewsPage';
import { Provider } from 'react-redux';
import store from './redux/store';
import SplashScreen from './Pages/SplashScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <NativeBaseProvider>
      
      <Stack.Navigator>
        <Stack.Screen
        options={{headerShown: false}}
        name="Splash"
        component={SplashScreen} />
        

        <Stack.Screen 
        options={{headerShown: false}}
        name="Login"
        component={LoginPage} />

        <Stack.Screen
        options={{headerShown: false}}
        name="Register"
        component={RegisterPage} />

        <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomePage} />

        <Stack.Screen
        options={{
          title:"Read More",
        }}
        name="News"
        component={NewsPage} />

       

      </Stack.Navigator>
      
      </NativeBaseProvider>
    </NavigationContainer>
    </Provider>
    

    
  );
}

const styles = StyleSheet.create({
  
});
