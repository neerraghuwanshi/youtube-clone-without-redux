import React from 'react'
import '../css/videoContainer.css'
import VideoContainer from './VideoContainer'

class Search extends React.Component{
    
    render(){
        return(<div>
            <VideoContainer query={this.props.location.state.searchTerm}/>  
            </div>  
        )
    }
} 

export default Search