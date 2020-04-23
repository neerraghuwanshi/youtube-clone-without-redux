import React from 'react';

class SearchBar extends React.Component{
    state = {SearchTerm:''}

    render(){
        const onSubmitHandler = (event) => {
                event.preventDefault();
        }

        const {searchTerm} = this.state

        return(
            <form onSubmit={onSubmitHandler}>
                <input onChange={(event)=>this.setState({searchTerm:event.target.value})} value={searchTerm} placeholder="Search"/>
                <div>
                    <i className="fa fa-search" aria-hidden="true" onClick={onSubmitHandler}></i>
                </div>
            </form>
        );
    }
}
export default SearchBar