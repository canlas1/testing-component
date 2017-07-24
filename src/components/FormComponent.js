import React from 'react';
import {
  Button,
  PageHeader,
  ControlLabel,
  FormControl,
  FormGroup,
  Radio } from 'react-bootstrap';

class FormComponent extends React.Component {
  constructor(props){
   super(props);
   this.state = { 
    isSigned: false,
    isInspected: false,
    isOrdered: false,
    isCompleted: false,
    isProcessed: false, 
    value: 'write notes here'
    }
   
   //Here we set a generic state assocated with the text being searched for
  }

//  handleCheckBox(event){
//   console.log('event',event)
//   let newState = {};
//   newState[this.data.radioGroup]=event.target.value;
//   // this.setState(newState)  
// }


 handleChange(event){
  this.setState({value: event.tartget.value});
 }

 handleSubmit(event){
  alert('you submitted your notes now to Mongo!')
  event.preventDefault();
 }

render(){
  return(
    <div id="wrapper" className="col-lg-12">
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Forms</PageHeader>
        </div>
       
       <ControlLabel>Proposal Signed</ControlLabel> 
        <FormGroup name="isSigned">
          <Radio data-radio="isSigned" name = "radioGroup" value="Yes" checked={this.state.isSigned === 'Yes'} onChange={(e)=> this.setState({isSigned:e.target.value})}>
            Yes
          </Radio>
          {' '}
          
          <Radio data-radio="isSigned" name = "radioGroup" value="No" checked={this.state.isSigned === 'No'} onChange={(e)=> this.setState({isSigned:e.target.value})}>
            No
          </Radio>
          {' '}
        </FormGroup>

      <ControlLabel>Pre-Inspection Completion</ControlLabel>
        <FormGroup name="isInspected">
          <Radio data-radio="isInspected" name = "radioGroup" value="Yes" checked={this.state.isInspected === 'Yes'} onChange={(e)=> this.setState({isInspected:e.target.value})}>
            Yes
          </Radio>
          {' '}
          <Radio data-radio="isInspected" name = "radioGroup" value="No" checked={this.state.isInspected === 'No'} onChange={(e)=> this.setState({isInspected:e.target.value})}>
           No
          </Radio>
          {' '}
        </FormGroup>

      <ControlLabel>Material Ordered</ControlLabel>
        <FormGroup name="isOrdered">
          <Radio data-radio="isOrdered" name = "radioGroup" value="Yes" checked={this.state.isOrdered === 'Yes'} onChange={(e)=> this.setState({isOrdered:e.target.value})}>
          Yes
          </Radio>
          {' '}
          <Radio data-radio="isOrdered" name = "radioGroup" value="No" checked={this.state.isOrdered === 'No'} onChange={(e)=> this.setState({isOrdered:e.target.value})}>
          No
          </Radio>
          {' '}
        </FormGroup>

      <ControlLabel>Installation Completed</ControlLabel>
        <FormGroup name="isCompleted">
          <Radio data-radio="isCompleted" name = "radioGroup" value="Yes" checked={this.state.isCompleted === 'Yes'} onChange={(e)=> this.setState({isCompleted:e.target.value})}>
          Yes
          </Radio>
          {' '}
          <Radio data-radio="isCompleted" name = "radioGroup" value="No" checked={this.state.isCompleted === 'No'} onChange={(e)=> this.setState({isCompleted:e.target.value})}>
          No
          </Radio>
          {' '}
      </FormGroup>

      <ControlLabel>Payment Processed</ControlLabel>
        <FormGroup name="isProcessed">
          <Radio data-radio="isProcessed" name = "radioGroup" value="Yes" checked={this.state.isProcessed === 'Yes'} onChange={(e)=> this.setState({isProcessed:e.target.value})}>
          Yes
          </Radio>
          {' '}
          <Radio data-radio="isProcessed" name = "radioGroup" value="No" checked={this.state.isProcessed === 'No'} onChange={(e)=> this.setState({isProcessed:e.target.value})}>
          No
        </Radio>
        {' '}
      </FormGroup>

    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Notes</ControlLabel>
        <FormControl componentClass="textarea" value={this.state.value} onChange={this.handleChange} />
    </FormGroup>

    <Button  type="submit" onSubmit={this.handleSubmit}>
      Submit
    </Button>
    
    </div>
      </div>
      );
  };
};


export default FormComponent;