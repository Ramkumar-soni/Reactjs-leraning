import React, { Component } from 'react';

class Message extends Component {
    constructor(){
        super()
        this.state ={
            message:'Welcome to Cayzen'
        }
    }
    changemessage() {
        this.setState({
            message:'Thanks for visit'
        })
    }

    render() { 
        return(
            <div>
                <center>
             <h1>{this.state.message} </h1>
             <button onClick={()=> this.changemessage() }>submit</button>
             </center> 
             </div>
        )
    }
}
 
export default Message;