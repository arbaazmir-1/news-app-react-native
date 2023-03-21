import {
  View,
  SafeAreaView,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { Flex, Text, Spacer, Stack, Input, Button,Modal,Spinner } from "native-base";
import register from "../assets/lottie/register.json";
import LottieView from "lottie-react-native";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { userRegister } from "../redux/action";
import { auth } from "../firebase";
import success from "../assets/lottie/success.json";

const RegisterPage = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  const inputSize = width > 400 ? "2xl" : "md";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user);
    console.log(user);
    const {loading} = useSelector(state => state.user);
    const [error, setError] = useState("null");

    const animation = React.useRef(null);

  

  const registerUser = () => {
    if (email === "" || password === "" || confirmPassword === "") {
      alert("Please fill all the fields");
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match");
    }
    else {
        
        dispatch(userRegister(email,password));
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigation.replace("Home");
                  
            }
        }
        );
        
       
    }
  };

  const goToLogin = () => {
    navigation.navigate("Login");
    };

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
                

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          h="100%"
          _light={{ bg: "blueGray.50" }}
          _dark={{ bg: "blueGray.800" }}
        >
          <LottieView
            source={register}
            autoPlay
            loop
            style={{ width: 300, height: 300 }}
          />
          <Text
            fontSize="2xl"
            fontWeight="bold"
            textAlign="left"
            _light={{ color: "blueGray.800" }}
            _dark={{ color: "blueGray.50" }}
          >
            Join The News Community!
          </Text>
          <Text
            fontSize="sm"
            color="gray.500"
            _light={{ color: "blueGray.400" }}
            _dark={{ color: "blueGray.50" }}
            w="80%"
            marginBottom={4}
          >
            Create an account to get all the latest news and updates.
          </Text>

          <Stack space={4} w="80%">
            <Input
              placeholder="Email"
              size={inputSize}
              _light={{ placeholderTextColor: "blueGray.400" }}
              _dark={{ placeholderTextColor: "blueGray.50" }}
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none"
            />
            <Input
              placeholder="Password"
              size={inputSize}
              _light={{ placeholderTextColor: "blueGray.400" }}
              _dark={{ placeholderTextColor: "blueGray.50" }}
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
              autoCapitalize="none"
            />
            <Input
              placeholder="Confirm Password"
              size={inputSize}
              _light={{ placeholderTextColor: "blueGray.400" }}
              _dark={{ placeholderTextColor: "blueGray.50" }}
              secureTextEntry
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              autoCapitalize="none"
            />
            <Button
              colorScheme="blue"
              _text={{ color: "white" }}
              size={width > 400 ? "lg" : "md"}
                onPress={registerUser}
              
            >
              Register
            </Button>
          </Stack>
          <Spacer />

          <Text
            fontSize="sm"
            color="gray.500"
            _light={{ color: "blueGray.400" }}
            _dark={{ color: "blueGray.50" }}
            textAlign="center"
            w="80%"
            margin={5}
          >
            Already have an account?
            <Text bold color="cyan.500" onPress={goToLogin}>
              {" "}
              Sign In
            </Text>
          </Text>
        </Flex>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterPage;
