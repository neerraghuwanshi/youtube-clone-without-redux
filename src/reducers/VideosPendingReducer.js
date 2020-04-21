import {FETCH_VIDEOS_PENDING} from '../actions/actionTypes'
import {initialState} from './initialState'

export const VideosPendingReducer = (state = initialState, action) => {
    if(action.type === FETCH_VIDEOS_PENDING){
        return {
            ...state,
            pending:true,
            data: [],
            error: null
        }
    }
    else {
        return state
    }
    
}