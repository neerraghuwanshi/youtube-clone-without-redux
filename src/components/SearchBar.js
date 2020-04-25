import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component{

    state={searchTerm:''}

    render(){

        const onSubmitHandler = (event) => {
            const {searchTerm} = this.state
            const {history} = this.props;   
            event.preventDefault() 
            history.push({
                pathname:'/search',
                state:{searchTerm}
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