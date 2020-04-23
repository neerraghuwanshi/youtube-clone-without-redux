import React from 'react';

class SearchBar extends React.Component{
    state = {SearchTerm:''}

    render(){
        const onSubmitHandler = (event) => {
                event.preventDefault();
        }

        const {searchTerm} = this.state

        return(
            <form style={{textAlign:'center', display:'flex',justifyContent:'center', alignContent:'center',height:'30px',width:'720px'}} 
            onSubmit={onSubmitHandler}>
                <input style={{width:'90%',padding: '2 6',textAlign:'center', fontSize:'medium'}} onChange={(event)=>this.setState({searchTerm:event.target.value})} value={searchTerm} placeholder="Search"/>
                <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center', padding: "1 7 2 7", width:'49px',backgroundColor:'rgb(240, 240, 240)',borderWidth:'1px 1px 1px 0px'}}>
                <i className="fa fa-search" aria-hidden="true" onClick={onSubmitHandler}></i>
                </div>
            </form>
        );
    }
}
export default SearchBar