import React from 'react';
import { Link } from 'react-router-dom';
import Youtube from '../api/Youtube'
import {fetchVideosPending, fetchVideosSuccess} from '../actions/actions';
import VideoContainer from './VideoContainer';
import '../css/Navbar.css';
import { connect } from 'react-redux';
import gapi from 'gapi'
import SearchBar from './SearchBar'

class Navbar extends React.Component {
    state = {selectedVideo:null, videos:null, isSignedIn:false}
    
    dispatch = this.props.dispatch

    fetchVideos = async (searchTerm) => {
        this.dispatch(fetchVideosPending())
        const response = await Youtube.get('/search',{
            params: {
                part:'snippet',
                maxResults:5,
                key:'AIzaSyCPiOYHaZW38JJPKUJOWt7gt-fcALtzsiM',
                q:searchTerm
            }})
            this.setState({videos:response.data,selectedVideo:response.data.items[0]})
            this.dispatch(fetchVideosSuccess(response.data))
        }

    onClickHandler = item => this.setState({selectedVideo:item})

    handleClick = searchTerm => this.fetchVideos(searchTerm)

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
          return <div>I dont know if I am signed in</div>;
        } else if (this.state.isSignedIn) {
          return <div>I am signed in!</div>;
        } else {
          return <div>I am not signed in</div>;
        }
      }
    
    componentDidMount() {
        this.fetchVideos('bad guy');

        
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
              clientId:
                "523079595316-p7u2ij1348dinmoktf016n2o861d0lro.apps.googleusercontent.com",
                scope:'email'
            });
          });
    }
    
    render() {
        const {videos, selectedVideo} = this.state
        return (
            <React.Fragment>
            <div className="maindiv">
                <div>
                    <Link onClick={()=>this.handleClick('home')} className="link" to="/">Home</Link>
                </div>
                <div>
                    <Link onClick={()=>this.handleClick('trending')} className="link" to="/trending">Trending</Link>
                </div>
                <div>
                    <Link onClick={()=>this.handleClick('categories')} className="link" to="/categories">Categories</Link>
                </div>
                <div>
                    <Link className="link" to="/search"><SearchBar handleClick={this.handleClick}/></Link>
                </div>
                <div>
                    <Link onClick={()=>this.setState({videos:null,selectedVideos:null})} className="link rightalign" to="/about">About</Link>
                </div>
                <div>
                    <Link onClick={()=>this.setState({videos:null,selectedVideos:null})} className="link" to="/contact">Contact</Link>
                </div>
                <div className="rightalign">
                    <Link onClick={()=>this.setState({videos:null,selectedVideos:null})} className="link" to="/settings">Settings</Link>
                </div>
                <div style={{color:'white'}}className="rightalign">
                {this.renderAuthButton()}
                </div>
            </div>
            <VideoContainer videos={videos} selectedVideo={selectedVideo} onClickHandler={this.onClickHandler}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state =>{
    return{
        data : state.VideosDataReducer.data,
        state
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)