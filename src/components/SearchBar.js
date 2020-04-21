import React from 'react';


class SearchBar extends React.Component{
    state={searchTerm:""}

    render(){
        const {searchTerm} = this.state;
        const {handleClick} = this.props
        return(
            <form style={{textAlign:'center'}} onSubmit={(event)=>{event.preventDefault();
            handleClick(searchTerm)}}>
                <input style={{width:'90%', textAlign:'center'}} onChange={(event)=>this.setState({searchTerm:event.target.value})} value={searchTerm} placeholder="Search..."/>
            </form>
        );
    }
}
export default SearchBar