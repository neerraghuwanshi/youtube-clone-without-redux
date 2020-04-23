import React from 'react'
import VideoList from './VideoList'
import Iframe from './Iframe'

import axios from 'axios';


class VideoContainer extends React.Component{
    
    state = {selectedVideo:{}, videos:{}, shouldRender:false}

    fetchVideos = async (searchTerm) => {
        const response = await axios.get('https://www.googleapis.com//youtube/v3/search',{
            params: {
                part:'snippet',
                maxResults:5,
                key:'AIzaSyCPiOYHaZW38JJPKUJOWt7gt-fcALtzsiM',
                q:searchTerm
            }})
            this.setState({videos:response.data,
                selectedVideo:response.data.items[0], shouldRender:true})
                console.log(response.data)   
        }
        
    componentDidMount(){
        this.fetchVideos(this.props.query)
    }
        
    onClickHandler = (item) => {
        this.setState({selectedVideo:item})
    }

    render(){
        const {videos, selectedVideo, shouldRender} = this.state

        if(shouldRender){
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
