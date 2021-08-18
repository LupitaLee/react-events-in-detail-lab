// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component{


onDelayed =(e)=>{
   e.persist()

   window.setTimeout(()=>{
       this.props.onDelayedClick(e)
   },
   this.props.delay
   )
}


render(){
    console.log(this.props)
    return(

        <button onClick= {this.onDelayed}>delayed</button>
    )
}

}

export default DelayedButton