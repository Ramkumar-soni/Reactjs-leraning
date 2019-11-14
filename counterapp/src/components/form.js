import React, { Component } from 'react';


class Simpleform extends Component {
    constructor(){
        super()
        this.state = {
           name : '',
           email : '',
           date : '',
           enddate : '',
           select : '',
           selectend : '',
           reason : '',
           showDetails : false
        }
    }
    handlename = (event) =>  {
        this.setState({
            name : event.target.value          
         })
    }
    handleemail = (event) =>{
        this.setState({
            email : event.target.value
        })

    }
    handledate = (event) => {
        this.setState({
            date : event.target.value
        })
    }
    handleenddate = (event) =>{
        this.setState({
            enddate : event.target.value
        })
    }
    handleselect = (event) => {
        this.setState({
            select : event.target.value
        })
    }
    handleselectend = (event) => {
        this.setState({
            selectend : event.target.value
        })
    }
    handletextarea = (event) => {
        this.setState({
            reason : event.target.value
        })
    }
    handlemale = (event) => {
        this.setState({
            male : event.target.value
        })
    }
    handlefemale = (event) => {
        this.setState({
            male : event.target.value
        })
    }

    submitAll =(event)=>{
        event.preventDefault();
        const {name,value} = event.target;
this.setState({
    [name] : value,
    
})
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("Name is " + this.state.name);
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.date);
        console.log(this.state.select);
        console.log(this.state.enddate);
       console.log(this.state.selectend);
        console.log(this.state.reason);
      }
      changes=()=>{
          this.setState({
              name : this.state.name,
              email : this.state.email,
              showDetails : true
            //   date : this.state.date,
            //   select : this.state.select,
            //   enddate : this.state.enddate,
            //   selectend : this.state.selectend,
            //   reason : this.state.reason
          })
      }
    render() { 
        debugger
        const{name,showDetails,email,date,select,enddate,selectend,reason}=this.state;
        return ( 
            <div>
    <div><h1>{showDetails && 'Name :'  + name + 'Email : ' + email +  'Date1 : ' + date + 'Day1 : ' + select + 'Date2 : ' + enddate  + 'Day2 : ' + selectend +  'Reason : ' + reason  }</h1></div>
    {!showDetails && 
            <form onSubmit={this.mySubmitHandler} >
                <div className='form-group'>
                    <center>
                        <table>
                            <tr>
                                <thead><h1>Leaves Form</h1></thead>
                            </tr>
                            <tr>
                                <td><label>Name:</label>&nbsp;&nbsp;
                                <input type='text'  name='name' value={this.state.name} onChange={this.submitAll} /></td>
                            </tr>
                            <tr>
                                <td><label>Email-id:</label>&nbsp;&nbsp;
                                <input type='email' name='email' value={this.state.email} onChange={this.submitAll} /></td>
                            </tr>
                            <tr>
                                <td><label>Start-date:</label>&nbsp;&nbsp;
                                <input type='date' name='date' value={this.state.date} onChange={this.handledate} />&nbsp;&nbsp;
                                <select name='select' value={this.state.select} onChange={this.handleselect}>
                                    <option>Full-day</option>
                                    <option>Frist-session</option>
                                    <option>Second-session</option>
                                </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label>To-date:</label>&nbsp;&nbsp;
                                <input type='date' name='enddate' value={this.state.enddate} onChange={this.handleenddate} />&nbsp;&nbsp;
                                <select name='selectend'  value={this.state.selectend} onChange={this.handleselectend}>
                                    <option >Full-day</option>
                                    <option>Frist-session</option>
                                    <option>Second-session</option>
                                </select>
                                </td>
                            </tr> 
                            {/* <tr>
                                <td><label>Gender:</label>
                                <input name='male' type='radio' value={this.state.male} onChange={this.handlemale} />Male
                                <input name='female' type='radio' value={this.state.female} onChange={this.handlefemale} />Female
                                </td>
                            </tr> */}
                            <tr>
                                <td><textarea name='reason' value={this.state.reason} onChange={this.handletextarea} placeholder='Enter the Reason' /></td>
                             </tr>
                             <tr>
                                 </tr>
                                
                            {/* <tr>
                                <td><label>Start-date:</label>&nbsp;&nbsp;
                                <input type='date' value={this.state.date} onChange={this.handledate} />&nbsp;&nbsp;
                                <select value={this.state.select} onChange={this.handleselect}>
                                    <option>Full-day</option>
                                    <option>Frist-session</option>
                                    <option>Second-session</option>
                                </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label>To-date:</label>&nbsp;&nbsp;
                                <input type='date' value={this.state.enddate} onChange={this.handleenddate} />&nbsp;&nbsp;
                                <select  value={this.state.selectend} onChange={this.handleselectend}>
                                    <option >Full-day</option>
                                    <option>Frist-session</option>
                                    <option>Second-session</option>
                                </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label>Gender:</label>
                                <input type='radio' value='male' />Male
                                <input type='radio' value='female' />Female
                                </td>
                            </tr>
                            <tr>
                                <td><textarea value={this.state.reason} onChange={this.handletextarea} placeholder='Enter the Reason' /></td>
                             </tr>
                             <tr> */}
                             <tr>
                                 <td>
                                     <button onClick={this.changes}>Submit</button>
                                 </td>
                             </tr>
                            </table>
                
                
                {/* <table className='table'>
                    <tr>
                    <td>NAME:&nbsp;&nbsp;
                    <input type='text' value='' placeholder=" Enter Valid Name."/></td>
                    </tr>
                    <tr>
                    <td>EMAIL-ID:&nbsp;&nbsp;
                    <input type='email' placeholder="Enter Valid Email-id."/>
                    </td>
                    </tr>
                    <tr>
                        <td>START-DATE:&nbsp;&nbsp;
                            <input type="date" />
                            &nbsp;&nbsp;
                     <select type="text">
                        <option value='Full-day'>Full-day</option>
                        <option value='Full-day'>First-session</option>
                        <option value='Full-day'>Second-session</option>
                     </select> 
                        </td>
                    </tr>
                    <tr>
                        <td>TO-DATE:&nbsp;&nbsp;
                            <input type="date" />
                            &nbsp;&nbsp;
                     <select type="text">
                        <option value='Full-day'>Full-day</option>
                        <option value='Full-day'>First-session</option>
                        <option value='Full-day'>Second-session</option>
                     </select> 
                        </td>
                    </tr>
                    <tr>
                        <td>GENDER:&nbsp;&nbsp;
                            <input type='radio' value='Male' />Male
                            <input type='radio' value='Female' />Female
                        </td>
                    </tr>
                    <tr>
                      <td><textarea type='teaxt' placeholder='Enter the Reason' /></td>
                    </tr>
                    <tr>
                        <td><button>Apply for leave</button></td>
                    </tr>
                </table> */}
                </center>
                </div>
            </form>}
            </div>
         );
    }
}
 
export default Simpleform;