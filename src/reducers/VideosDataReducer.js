import {FETCH_VIDEOS_SUCCESS} from '../actions/actionTypes'
import {initialState} from './initialState'

export const VideosDataReducer = (state = initialState, action) => {
    if(action.type === FETCH_VIDEOS_SUCCESS){
        return {
            ...state,
            pending:false,
            data: action.payload,
            error: null
        }
    }
    else {
        return state
    }
    
}