import React, { Component } from 'react';
//import {Button,Form,table} from 'react-bootstrap';

class Counter extends Component {

    render() { 
        const {name} = this.props
        return (
            <div>
            <h1>Name {name}</h1>
            {/* {this.props.children} */}
            </div>
            //   <div>
            //   <h1>Name {this.props.name}</h1>
            //   {this.props.children}
            //   </div>
            )
        
    }
}
 
export default Counter ;