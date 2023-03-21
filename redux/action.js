import axios from "axios";
import {
  FETCH_NEWS,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
  GENERAL_NEWS_REQUEST,
    GENERAL_NEWS_SUCCESS,
    GENERAL_NEWS_FAILURE,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE

} from "./constants";

import { API_TOKEN } from 'react-native-dotenv';
import {auth} from '../firebase'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";


const url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_TOKEN}`
export const fetchNews = () => async (dispatch) => {
    try {
        dispatch({ type: FETCH_NEWS });
        const response = await axios.get(url);
        dispatch({ type: FETCH_NEWS_SUCCESS, payload: response.data.articles });
    } catch (error) {
        dispatch({ type: FETCH_NEWS_FAILURE, payload: error });
    }
}
const generalNewsUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_TOKEN}`

export const generalNews = () => async (dispatch) => {
    try {
        dispatch({ type: GENERAL_NEWS_REQUEST });
        const response = await axios.get(generalNewsUrl);
        dispatch({ type: GENERAL_NEWS_SUCCESS, payload: response.data.articles });
    } catch (error) {
        dispatch({ type: GENERAL_NEWS_FAILURE, payload: error });
    }
}


export const userRegister = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });
         createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //dispatch the success action
            dispatch({ type: USER_REGISTER_SUCCESS, payload: userCredential });
            dispatch({ type: USER_LOGIN_SUCCESS, payload: userCredential });
            //set the user in async storage
            

        })
        .catch((error) => {
            //dispatch the failure action
            dispatch({ type: USER_REGISTER_FAILURE, payload: error });
        }
        );


        
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAILURE, payload: error });
    }
}

export const userLogin = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });
         signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //dispatch the success action
            dispatch({ type: USER_LOGIN_SUCCESS, payload: userCredential });
            //set the user in async storage
           

        })
        .catch((error) => {
            //dispatch the failure action
            dispatch({ type: USER_LOGIN_FAILURE, payload: error });
        }
        );

        
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAILURE, payload: error });
    }
}
