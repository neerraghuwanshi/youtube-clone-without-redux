import React from 'react';
import VideoContainer from './VideoContainer';

class Home extends React.Component{

    render(){
        return(
        <div>
            <VideoContainer query={'legends are made'}/>
        </div>
        );
       
    }
}

export default Home