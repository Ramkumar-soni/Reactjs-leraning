import React , {Component}  from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';   
import Simpleform from './components/form';
//import Counter from './components/counter';
//import Timer from './components/functions';
//import Message from './components/message';
//import Count from './components/increment';
//import Event from './components/events';
import Binding from './components/evenntbind';

class Index   extends Component {
 render() { 
        return (
          <div className="index">
               <Simpleform />
               
          </div>
          
             /* //       <Counter name="Ram" yz="sdf" />
        //     <Counter name="shyam"/>
        //     <Counter name="Jaypal" >
        //        <p> THis is first Component</p>
        //     </Counter>
        // <Timer name="spider" />
        //  <Timer name="superman" />
        //     <Timer name="Batman">
        //         <p>this is Second Component</p>
        //     </Timer>
        //     <Event /> 
        //     <Binding />
            /* <Message /> */
            /* <Count /> */ 
          )
    }
}
 
export default Index;
ReactDOM.render(<Index  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
