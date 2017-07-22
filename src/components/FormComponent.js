import React from 'react';
import {
  Button,
  PageHeader,
  ControlLabel,
  FormControl,
  FormGroup,
  Radio 
  } from 'react-bootstrap';
import '../App.css';



 
class FormComponent extends React.Component {
  // constructor(props){
  //   super(props);

  //   this.state{

  //   }
  // }

 render(){
return(
<div id="wrapper" className="col-lg-12">
<div className="row">
        <div className="col-lg-12">
          <PageHeader>Forms</PageHeader>
        </div>
       <ControlLabel>Proposal Signed</ControlLabel>
    <FormGroup>
      <Radio name="radioGroup" inline>
      Yes
      </Radio>
      {' '}
      <Radio name="radioGroup" inline>
       No
      </Radio>
      {' '}
     
    </FormGroup>

     <ControlLabel>Pre-Inspection Completion</ControlLabel>
    <FormGroup>
      <Radio name="radioGroup" inline>
      Yes
      </Radio>
      {' '}
      <Radio name="radioGroup" inline>
       No
      </Radio>
      {' '}
     
    </FormGroup>

      <ControlLabel>Material Ordered</ControlLabel>
    <FormGroup>
      <Radio name="radioGroup" inline>
      Yes
      </Radio>
      {' '}
      <Radio name="radioGroup" inline>
       No
      </Radio>
      {' '}
     
    </FormGroup>

      <ControlLabel>Installation Completed</ControlLabel>
    <FormGroup>
      <Radio name="radioGroup" inline>
      Yes
      </Radio>
      {' '}
      <Radio name="radioGroup" inline>
       No
      </Radio>
      {' '}
     
    </FormGroup>

      <ControlLabel>Payment Processed</ControlLabel>
    <FormGroup>
      <Radio name="radioGroup" inline>
      Yes
      </Radio>
      {' '}
      <Radio name="radioGroup" inline>
       No
      </Radio>
      {' '}
     
    </FormGroup>
  <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Notes</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" />
    </FormGroup>

  <Button type="submit">
      Submit
    </Button>


      </div>



  </div>

      )

  }
    


}


export default FormComponent;