import React, { Component } from 'react';

class Binding extends Component {
   constructor(){
       super()
       this.state = {
           message : ''
       }
      // this.handlechanege = this.handlechanege.bind(this);
   }
   changes=()=>{
       this.setState({
           message  : 'Good bye'
       })
   }
   handlechaneges = (event) => {
       this.setState({
           message :  event.target.value
       })
   }
    render() { 
        return ( 
            <div>
                <h1>Name:<input type='text'value={this.state.message} onChange={this.handlechaneges} /></h1>
                {/* <button onClick={this.changes.bind(this)}>Click</button> */}
                {/* <button onClick = {() => {this.changes()}}>Click</button> */}
                <button onClick={this.changes}>Click</button>
            </div>
         );
    }
}
 
export default Binding;
