// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component{

    onClick =(e) =>{
        console.log(e.clientX)
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    
    }

    render(){
        console.log(this.props)
        return(
            <button onClick={this.onClick}>coords</button>
        )
    }

}

export default CoordinatesButton