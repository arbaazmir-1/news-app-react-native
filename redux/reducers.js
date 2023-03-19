
import  {
    FETCH_NEWS,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE
    ,GENERAL_NEWS_REQUEST,
    GENERAL_NEWS_SUCCESS,
    GENERAL_NEWS_FAILURE
}
from  './constants'

export const  fetchNews  = (state =  {news:[]} , action) => {
    
    switch (action.type) {
        case FETCH_NEWS:
            return {
                ...state,
                loading: true
            }
        case FETCH_NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                news: action.payload,
                error: ''
            }
        case FETCH_NEWS_FAILURE:
            return {
                ...state,
                loading: false,
                news: [],
                error: action.payload
            }
        default:
            return state

    }

}

export const  generalNews  = (state =  {generalNews:[]} , action) => {
        
        switch (action.type) {
            case GENERAL_NEWS_REQUEST:
                return {
                    ...state,
                    loading: true
                }
            case GENERAL_NEWS_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    generalNews: action.payload,
                    error: ''
                }
            case GENERAL_NEWS_FAILURE:
                return {
                    ...state,
                    loading: false,
                    generalNews: [],
                    error: action.payload
                }
            default:
                return state
    
        }
}