import React from 'react'
import VideoItem from './VideoItem'

class VideoList extends React.Component{
    state={}
    render(){
        const {items, onClickHandler} = this.props
        const videoList = items.map(
            (item)=><VideoItem src={item.snippet.thumbnails.medium.url} onClickHandler={onClickHandler} key={item.snippet.title} item={item} alt={item.snippet.title}/>)
            
    return(<div>{videoList}</div>)

    }}
    
    export default VideoList
