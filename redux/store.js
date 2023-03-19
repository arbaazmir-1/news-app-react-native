import {combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';
import {configureStore} from '@reduxjs/toolkit'
import { fetchNews,generalNews } from './reducers';

const reducer = combineReducers({
    news: fetchNews,
    generalNews:generalNews
})

const initialState = {
   
   
}

const middleware = [thunk]

const store = configureStore({
    reducer,
    middleware,
    initialState,
    devTools: true,

    
  })


  

export default store
