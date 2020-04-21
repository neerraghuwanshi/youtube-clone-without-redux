import React from 'react'

class Iframe extends React.Component{
    
    render(){
        const {title, src, description} = this.props
        return(
            <div>
            <iframe src={`https://youtube.com/embed/${src}`} title={title}/>
            <h1>{title}</h1>
            <p>{description}</p>
            </div>
        );
    }
}
export default Iframe