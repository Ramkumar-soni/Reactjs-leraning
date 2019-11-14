import React, { Component } from 'react';

class Event extends Component {
    event(){
       alert('Hii Events Devloper!!');
    }
    // event = (a) => {
    //     // alert('Hii Events Devloper!!');
    //     alert(a);
    //  }
    render() { 
        return (
           
            <button onClick={this.event}>Click-Me</button>
            // <button onClick={()=>this.event('hiiii')}>Click-Me</button>
          );
    }
}
 
export default Event
