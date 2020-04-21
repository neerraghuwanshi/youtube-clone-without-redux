import {FETCH_VIDEOS_PENDING, FETCH_VIDEOS_SUCCESS, FETCH_VIDEOS_ERROR} from './actionTypes'

export const fetchVideosPending =  () => {
    return {
        type: FETCH_VIDEOS_PENDING
        
    }
}

export const fetchVideosSuccess = (data) => {
    return {
        type: FETCH_VIDEOS_SUCCESS,
        payload: data
    }
}

export const fetchVideosError = (error) => {
    return {
        type: FETCH_VIDEOS_ERROR,
        payload: error
    }
}

