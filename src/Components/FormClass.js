import React, { Component } from 'react';
import DisplayForm from './DisplayForm';
import '../App.css';


export class FormClass extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            department:"",
            rating:"",
            clicked:true,
            EmpData:[]
        }
    }
handleChange = (e) =>{
    this.setState({[e.target.name]:e.target.value})
};

toggleFunc = () =>{
    this.setState({clicked:!this.state.clicked})
}

handleClick = () =>{
  let obj={
    name:this.state.name,
    department:this.state.department,
    rating:this.state.rating,
  }
  this.state.EmpData.push(obj);
  this.setState({EmpData:this.state.EmpData, clicked:false, name:"", department:"", rating:""})
console.log(this.state.EmpData);
}
render() {
    return (
      <>
        {this.state.clicked ?
            < div className='main'>
                <form>
                    <label htmlFor="name" className='label'>Name:</label>
                    <input type="text" className='input' id="name" placeholder='Enter Name' name="name" value={this.state.name} onChange={this.handleChange} /><br/><br/>
                    <label htmlFor="department" className='label'>Department:</label>
                    <input type="text" className='input' id="deparment" placeholder='Enter Department' name="department" value={this.state.department} onChange={this.handleChange} /><br/><br/>
                    <label htmlFor="rating" className='label'>Rating:</label>
                    <input type="number" className='input' id="rating" placeholder='Enter Rating' name="rating" value={this.state.rating} onChange={this.handleChange} /><br/><br/>
                    <button type="button" className='submit' onClick={this.handleClick}>Submit</button>
                </form>
            </div>
          :
            <DisplayForm value={this.state.EmpData} toggle={this.toggleFunc} />
        }
      </>
    )
  }
}

export default FormClass;