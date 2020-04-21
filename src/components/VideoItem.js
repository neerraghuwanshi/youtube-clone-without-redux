import React from 'react';


class VideoItem extends React.Component{
    render(){
        const {alt, src, item, onClickHandler} = this.props
        return(
            <img onClick={()=>onClickHandler(item)} src={src} alt={alt} />
        );
    }
}
export default VideoItem