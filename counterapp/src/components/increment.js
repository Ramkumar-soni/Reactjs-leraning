import React, { Component } from 'react';
class Count extends Component {
    constructor(){
        super()
        this.state={
            count : 0
        }
    }

    increment(){
        this.setState({
            count : this.state.count + 1
        })
        
        console.log(this.state.count)
    }
    decrement(){
        this.setState({
            count : this.state.count - 1
        })
    }
   
    render() { 
    return (
        <div>
         <h1>Counter-{this.state.count}</h1> 
         <button onClick={()=>this.increment()}>Increment</button>&nbsp;
         <button onClick={()=>this.decrement()}>Decrement</button>
         </div>
         );
    }
}
 
export default Count;