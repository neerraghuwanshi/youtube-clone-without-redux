import React from 'react'
import VideoList from './VideoList'
import Iframe from './Iframe'
import '../css/videoContainer.css'

import axios from 'axios';

class VideoContainer extends React.Component{
    
    state = {selectedVideo:{}, videos:{}}

    fetchVideos = async (searchTerm) => {
        const response = await axios.get('https://www.googleapis.com//youtube/v3/search',{
            params: {
                part:'snippet',
                maxResults:5,
                key:'AIzaSyCHp5gglrp9A6lDz76jyJDLOBeIuRLE1_I',
                q:searchTerm
            }})
                this.setState({videos:response.data,
                    selectedVideo:response.data.items[0]})
        }
        
    componentDidMount(){
        this.fetchVideos(this.props.query)
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props){
            this.fetchVideos(this.props.query)
        }
        
    }
        
    onClickHandler = (item) => {
        this.setState({selectedVideo:item})
    }

    render(){
        const {videos, selectedVideo} = this.state

        if(videos.items){
        return(
            <div>
            <div className={'container'}> 
                    <Iframe src={selectedVideo.id.videoId} title={selectedVideo.snippet.title} description={selectedVideo.snippet.description}/>
                    <VideoList onClickHandler={this.onClickHandler} items={videos.items}/>
                </div>
            </div>);
        }
        return null
    }
}

export default VideoContainer
