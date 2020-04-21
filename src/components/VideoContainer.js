import React from 'react'
import VideoList from './VideoList'
import Iframe from './Iframe'


class VideoContainer extends React.Component{

    render(){
       
        const {videos, selectedVideo, onClickHandler} = this.props
        if(videos && selectedVideo)
        {
        return(
        <div>
         <div className={'container'}> 
                <Iframe src={selectedVideo.id.videoId} title={selectedVideo.snippet.title} description={selectedVideo.snippet.description}/>
                <VideoList onClickHandler={onClickHandler} items={videos.items}/>
            </div>
        </div>);
        }
        return null
    }
}

export default VideoContainer
