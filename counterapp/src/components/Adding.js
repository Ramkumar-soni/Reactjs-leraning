import React, { Component } from 'react';
import { Form, button, } from "react-bootstrap";
import { FormInput } from "shards-react";
class MultipleChoice extends Component {
    constructor(props) {
        super(props);
        this.state = { inputs: ['input-0'] };
    }

    render() {
        return(
            <div>
               <Form>
                  Name: <div id="dynamicInput">
                       {this.state.inputs.map(input => <FormInput key={input} />)}
                   </div>
                   SurName: <div id="dynamicInput">
                       {this.state.inputs.map(input => <FormInput key={input} />)}
                   </div>
               </Form>
               <button onClick={ () => this.appendInput() }>
                   CLICK ME TO ADD AN INPUT
               </button>
            </div>
        );
    }

    appendInput() {
        var newInput = `input-${this.state.inputs.length}`;
        this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
    }
}
 
export default MultipleChoice;