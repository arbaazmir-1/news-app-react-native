import { View,SafeAreaView,Dimensions,KeyboardAvoidingView,Platform } from 'react-native'
import React from 'react'
import { Flex,Text,Spacer,Stack,Input,Button } from 'native-base'
import register from '../assets/lottie/register.json'
import LottieView from 'lottie-react-native'


const RegisterPage = ({navigation}) => {


    const goToLogin = () => {
        navigation.navigate('Login')
    }


  const { width, height } = Dimensions.get('window');
  const inputSize = width > 400 ? '2xl' : 'md'; 

  return (
    <SafeAreaView>
        <KeyboardAvoidingView behavior={
            Platform.OS === "ios" ? "padding" : "height"
        } enabled>
        <Flex direction="column" align="center" justify="center" h="100%"_light={{bg: 'blueGray.50'}} _dark={{bg: 'blueGray.800'}}>
            <LottieView
                source={register}
                autoPlay
                loop
                style={{width: 300, height: 300}}
            />
            <Text fontSize="2xl" fontWeight="bold"  textAlign="left"  _light={{color: 'blueGray.800'}} _dark={{color: 'blueGray.50'}}
            >Join The News Community!</Text>
            <Text fontSize="sm" color="gray.500" _light={{color: 'blueGray.400'}} _dark={{color: 'blueGray.50'}}  w="80%" marginBottom={4}>
                Create an account to get all the latest news and updates.
            </Text>

            <Stack space={4} w="80%">

             
                <Input placeholder="Email"
                    size={inputSize}
                _light={{placeholderTextColor: 'blueGray.400'}}
                _dark={{placeholderTextColor: 'blueGray.50'}}
                />
                <Input placeholder="Password"
                    size={inputSize}
                _light={{placeholderTextColor: 'blueGray.400'}}
                _dark={{placeholderTextColor: 'blueGray.50'}}
                secureTextEntry
                />
                <Input placeholder="Confirm Password"
                    size={inputSize}
                _light={{placeholderTextColor: 'blueGray.400'}}
                _dark={{placeholderTextColor: 'blueGray.50'}}
                secureTextEntry

                />
                <Button colorScheme="blue" _text={{color: 'white'}}
                    size={width > 400 ? 'lg' : 'md'}
                >
                    Register
                </Button>
            </Stack>
            <Spacer />


            <Text fontSize="sm" color="gray.500" _light={{color: 'blueGray.400'}} _dark={{color: 'blueGray.50'}} textAlign="center" w="80%" margin={5}>
                Already have an account?
                <Text bold color="cyan.500"
                onPress={goToLogin}
                >
                    {' '}Sign In
                </Text>
            </Text>




            
            
        </Flex>
        </KeyboardAvoidingView>
    </SafeAreaView>

  )
}

export default RegisterPage

