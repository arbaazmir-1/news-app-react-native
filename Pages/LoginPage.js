import { StyleSheet, View, SafeAreaView, Dimensions,KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Button, Flex, Row, Spacer, Stack, Input, Text, Modal ,Spinner} from "native-base";
import LottieView from 'lottie-react-native';
import welcome from '../assets/lottie/welcome.json'
import { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

const LoginPage = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

  const animation = useRef(null);

  const goToHome = () => {
    // setLoading(true);
    // //after 5 seconds, set loading to false
    // setTimeout(() => {
    //     setLoading(false);
    //     navigation.navigate('Home')
    //     }
    //     , 5000);

        navigation.navigate('Home')
    
    


  }

  const goToRegister = () => {
    navigation.navigate('Register')

  }

  const { width, height } = Dimensions.get('window');
  const inputSize = width > 400 ? '2xl' : 'md'; // Adjust the input size based on the screen width

  return (
    <SafeAreaView>
        {loading && (
        <Modal isOpen={loading} onClose={() => setLoading(false)}>
            <Modal.Content maxWidth="400px">
            
            <Modal.Header>Please Wait</Modal.Header>
            <Modal.Body>
            <Spinner color="emerald.500" />
            </Modal.Body>
            </Modal.Content>
        </Modal>
        )
        }
        
        <KeyboardAvoidingView behavior={
            Platform.OS === "ios" ? "padding" : "height"
        } enabled>
      <StatusBar style="dark" />
      <Flex direction="column" align="center" justify="center" h="100%"
        _light={{ bg: 'blueGray.50' }}
        _dark={{ bg: 'blueGray.800' }}
      >
        <LottieView
          ref={animation}
          source={welcome}
          autoPlay
          loop
          style={{ width: 300, height: 300 }}
        />

        <Text fontSize="3xl" fontWeight="bold" textAlign="left" w="80%" _light={{ color: 'blueGray.800' }} _dark={{ color: 'blueGray.50' }}
        >Welcome Back</Text>
        <Text fontSize="sm" color="gray.500" _light={{ color: 'blueGray.400' }} _dark={{ color: 'blueGray.50' }} w="80%" marginBottom={4}>
          We missed you! Login to get all the latest news and updates.
        </Text>

        <Stack space={4} w="80%">
          <Input placeholder="Email"
            size={inputSize} // Use the input size determined based on the screen width
            _light={{ placeholderTextColor: 'blueGray.400' }}
            _dark={{ placeholderTextColor: 'blueGray.50' }}
          />
          <Input placeholder="Password"
            size={inputSize} // Use the input size determined based on the screen width
            _light={{ placeholderTextColor: 'blueGray.400' }}
            _dark={{ placeholderTextColor: 'blueGray.50' }}
            secureTextEntry

          />
          <Button colorScheme="blue" _text={{ color: 'white' }} onPress={goToHome}
            size={width > 400 ? 'lg' : 'md'}>
            Login
          </Button>
          
        </Stack>

        <Spacer />
        <Text fontSize="sm" color="gray.500" _light={{ color: 'blueGray.400' }} _dark={{ color: 'blueGray.50' }} textAlign="center" w="80%" margin={5}>
          Don't have an account?
          <Text bold color="cyan.500" onPress={goToRegister}>
            {' '}Sign Up
          </Text>
        </Text>


      </Flex>
      </KeyboardAvoidingView>

    </SafeAreaView>
  )
}

export default LoginPage

const styles = StyleSheet.create({})
