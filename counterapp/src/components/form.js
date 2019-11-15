//Cleanup code
// What is event object
// [] why need square bracked in setState
//How to assign default values.
//Set default value for start date and end date.
//Calculate day from start date and end date
// List  like Grid with approve and reject button.
// CSS Framework 
// React router

import React, { Component } from "react";
//import DatePicker from "react-datepicker";
import {math} from "mathjs";
import Index from "..";

class Simpleform extends Component {
  constructor() {
    super();
    this.state = {
      post:{
      name: "",
      email: "",
    //  startdate: new Date(),
      //defaulDate: new Date(),
     // enddate: new Date(),
      //select: "Full-day",
      //selectend: "Full-day",
      reason: "",
      showDetails: false,
   //   test : [{name : ''}]
      },
      jobs: []  
      };
  }
  handleOnClick = event => {
    event.preventDefault()
    const { name, value } = event.target;
    let {post} = this.state;
    post[name] = value
    this.setState({
     post               
     });
  };
  mySubmitHandler = event => {
    event.preventDefault();
    alert("Name is " + this.state.name);
    // console.log(this.state.name);
    // console.log(this.state.email);
    // console.log(this.state.date);
    // console.log(this.state.select);
    // console.log(this.state.enddate);
    // console.log(this.state.selectend);
    // console.log(this.state.reason);
    console.log(this.state);
    
  };
  changes = (event) => {
    event.preventDefault();
    const {jobs, post} = this.state;
    jobs.push(post);
    this.setState({jobs,post:{name:"", email:"" , reason:""}});
  };
  
  render() {
   // const {name,showDetails,email,startdate,select,enddate,selectend,reason} = this.state;
    return (
        // <div>
        //   <h1>
        //     {showDetails &&  "Name :" + name + "Email : " +email +"Date1 : " +startdate +"Day1 : " +select +"Date2 : " +enddate +"Day2 : " +selectend +"Reason : " +reason}
        
        //   </h1>
        // </div>
            <div className="form-group">
              <form onSubmit={this.mySubmitHandler}>
              <center>
                <table>
                  <tbody>
                  <tr>
                    <thead>
                      <h1>Leaves Form</h1>
                    </thead> 
                  </tr>
                  <tr>
                    <td>
                      <label>Name:</label>&nbsp;&nbsp;
                      <input
                        type="text"
                        name="name"
                        value={this.state.post.name}
                        onChange={this.handleOnClick}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Email-id:</label>&nbsp;&nbsp;
                      <input
                        type="email"
                        name="email"
                        value={this.state.post.email}
                        onChange={this.handleOnClick}
                      />
                    </td>
                  </tr>
                  {/* <tr>
                    <td>
                      <label>Start-date:</label>&nbsp;&nbsp;
                      <DatePicker
                      selected={this.state.post.startdate}
                        type="date"
                        name="startdate"
                        value={this.state.post.startdate}
                        onChange={this.handleOnClick}
                      />
                      &nbsp;&nbsp;
                      <select
                        name="select"
                        value={this.state.post.select}
                        onChange={this.handleOnClick}
                      >
                        <option>Full-day</option>
                        <option>Frist-session</option>
                        <option>Second-session</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>To-date:</label>&nbsp;&nbsp;
                      <DatePicker
                      selected={this.state.post.enddate}                                                    
                        type="date"
                        name="enddate"
                        value={this.state.post.enddate}
                        onChange={this.handleOnClick}
                      />
                      &nbsp;&nbsp;
                      <select
                        name="selectend"
                        value={this.state.post.selectend}
                        onChange={this.handleOnClick}
                      >
                        <option>Full-day</option>
                        <option>Frist-session</option>
                        <option>Second-session</option>
                      </select>
                    </td>
                  </tr> */}
                  <tr>
                    <td>
                      <textarea
                        name="reason"
                        value={this.state.post.reason}
                        onChange={this.handleOnClick}
                        placeholder="Enter the Reason"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button onClick={this.changes}>Submit</button>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </center>
              </form>
          <ul>
            {this.state.jobs.map((job , index)=>(
              <li key={index}>
            {index}    {job.name}:{job.email}:{job.reason}
              </li>
            ))}
          </ul>
           </div>
      );            
     }

}

export default Simpleform;
