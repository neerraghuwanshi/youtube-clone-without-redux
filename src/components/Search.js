import React from 'react'
import '../css/videoContainer.css'
import VideoContainer from './VideoContainer'

class Search extends React.Component{
    
    render() {
        return <VideoContainer query={localStorage.getItem('searchTerm')}/>  
    }
} 

export default Search