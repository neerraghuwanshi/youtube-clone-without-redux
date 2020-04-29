import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component{

    state={searchTerm:''}

    render(){

        const onSubmitHandler = (event) => {
            event.preventDefault() 
            const {searchTerm} = this.state
            const {history} = this.props; 
            localStorage.setItem('searchTerm',searchTerm)  
            history.push({
                pathname:'/search',
            })}

        const {searchTerm} = this.state

        return(
            <form onSubmit={onSubmitHandler}>
                <input onChange={(event)=>this.setState({searchTerm:event.target.value})} value={searchTerm} placeholder="Search"/>
                <div onClick={onSubmitHandler}>
                <i className="fa fa-search" aria-hidden="true" ></i>
                </div>
            </form>
        );
    }
}
export default withRouter(SearchBar)