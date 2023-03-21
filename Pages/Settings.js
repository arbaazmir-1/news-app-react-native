import { Alert, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text,Button } from 'native-base'

import { auth } from '../firebase'
import { StatusBar } from 'expo-status-bar'


const Settings = ({navigation}) => {


  const signOut = () => {
    //ask user if they want to sign out
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => {
          auth.signOut();
          console.log('OK Pressed')
          navigation.replace('Login');
        } },
      ],
      { cancelable: false }
    )

  }
  return (
    <SafeAreaView>
      <StatusBar
        style="auto"
      />
      <View style={{padding:5}}>
          <Text fontSize="xl" fontWeight="bold" marginTop={5} marginLeft={5}>
            Settings
          </Text>
          <Button
            onPress={signOut}
            title="Sign Out"
            
            accessibilityLabel="Learn more about this purple button"
          >
            Sign Out
          </Button>

          </View>
        </SafeAreaView>
    
  )
}

export default Settings

const styles = StyleSheet.create({})