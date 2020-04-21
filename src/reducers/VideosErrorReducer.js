import {FETCH_VIDEOS_ERROR} from '../actions/actionTypes'
import {initialState} from './initialState'

export const VideosErrorReducer = (state = initialState, action) => {
    if(action.type === FETCH_VIDEOS_ERROR){
        return {
            ...state,
            pending:false,
            error: action.payload,
            data: []
        }
    }
    else {
        return state
    }
    
}