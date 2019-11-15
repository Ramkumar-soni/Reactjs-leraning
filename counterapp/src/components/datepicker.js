import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment';

class Datepicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date(),
          endDate: new Date(),
          days: 0,
        };
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.daysLeft = this.daysLeft.bind(this);
    
      }
    
      handleChangeStart(date) {
        this.setState({
          startDate: date
        });
      }
    
    
     handleChangeEnd(date) {
        this.setState({
          endDate: date
        });
      }
    
    
    daysLeft() {
        let {startDate, endDate} = this.state;
        console.log(startDate);
        console.log(endDate);
        let amount = endDate.diff(startDate, 'days');
        this.setState({
          days: amount
        });
      }
    
    
    
      render() {
        return (
         <div>
              <h3>Get Difference between two dates in days</h3>
    
    <b>Start Date</b>:
     <DatePicker
       selected={this.state.startDate}
       onChange={this.handleChangeStart}
     />
    
    &nbsp;&nbsp;&nbsp;
    
    <b>End Date</b>:
     <DatePicker
       selected={this.state.endDate}
       onChange={this.handleChangeEnd}
     />
    
     <div className="amount">
       {this.state.days}
     </div>
    
    </div>
        );
      }
    // constructor(){
    //     super()
    //     this.state = {
    //         startdate : new Date()
    //     }
    // }
    // handeldate= date =>{
    //     this.setState({
    //         startdate:date
    //     });
    // };
    // render() { 
    //     return ( 
    //         <div>
    //             <center>
    //         <DatePicker selected={this.state.startdate} onChange={this.handeldate} />
    //         </center>
    //         </div> 
    //      );
    // }
}
 
export default Datepicker ;