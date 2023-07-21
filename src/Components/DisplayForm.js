import React, { Component } from 'react';

export class DisplayForm extends Component {
            constructor(props){
              super(props);
              console.log(this.props.value);
            }
  render() {
    return (
      <>
        <div className='arr'>
            {this.props.value.map((item,index)=>{
                return (
                  <h3 key={index} className='span'> {item.name}  || {item.department}  || {item.rating} </h3>
                )
                })}
        </div>
        <button type="button"  className='back' onClick={this.props.toggle}>Go Back</button>
      </>
    )
  }
}

export default DisplayForm;