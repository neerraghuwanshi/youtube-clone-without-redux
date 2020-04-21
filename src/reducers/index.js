import {combineReducers} from  'redux'

import {VideosErrorReducer} from './VideosErrorReducer'
import {VideosPendingReducer} from './VideosPendingReducer'
import {VideosDataReducer} from './VideosDataReducer'

const reducer = combineReducers({
    VideosErrorReducer:VideosErrorReducer,
    VideosPendingReducer:VideosPendingReducer,
    VideosDataReducer:VideosDataReducer
})



export default reducer
