import { StyleSheet, View, SafeAreaView, Dimensions,KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Button, Flex, Row, Spacer, Stack, Input, Text, Modal ,Spinner} from "native-base";
import LottieView from 'lottie-react-native';
import welcome from '../assets/lottie/welcome.json'
import { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { userLogin } from '../redux/action';
import { db ,auth} from '../firebase';
import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';





const LoginPage = ({ navigation }) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [error, setError] = useState('null');


  const animation = useRef(null);
  const {user} = useSelector(state => state.user);
  console.log(user);
  const {loading} = useSelector(state => state.user);
  console.log(loading);

  const dispatch = useDispatch();
  

  const goToHome = () => {
    if(email === '' || password === ''){
        alert('Please fill all the fields');
    }
    else{
        
        dispatch(userLogin(email,password));
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigation.replace('Home');
                
            }
        }
        );
    }
    
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      
      if (user) {

        navigation.replace('Home');
      } else {

        navigation.canGoBack() && navigation.popToTop();
        
      }
    });
    return () => {
      unsubscribe();
    };
  },[]);

  

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
            onChangeText={(text) => setEmail(text)}
            value={email}
            autoCapitalize='none'
          />
          <Input placeholder="Password"
            size={inputSize} // Use the input size determined based on the screen width
            _light={{ placeholderTextColor: 'blueGray.400' }}
            _dark={{ placeholderTextColor: 'blueGray.50' }}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}

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
