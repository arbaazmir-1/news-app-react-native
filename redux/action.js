import axios from "axios";
import {
  FETCH_NEWS,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
  GENERAL_NEWS_REQUEST,
    GENERAL_NEWS_SUCCESS,
    GENERAL_NEWS_FAILURE

} from "./constants";

import { API_TOKEN } from 'react-native-dotenv';


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