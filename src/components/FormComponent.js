import React from 'react';
import {
  Button,
  PageHeader,
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock
} from 'react-bootstrap';
import helpers from '../utils/helpers';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


class FormComponent extends React.Component {
  constructor(props){
   super(props);
   this.state = { 
      project_name: '',
      customer: '',
      address: '',
      contact_name:'',
      contact_number:'',
      account_number:'',
      kwh_rate:'',
      notes:''
    }

  }

 handleChange(event){
    let newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
 }

 handleSubmit(event){
  event.preventDefault();
  let newProjectObject = this.state
  helpers.postNewForm(newProjectObject)
  alert('New Project submitted')
  this.setState({ 
    project_name: '',
    customer: '',
    address: '',
    contact_name:'',
    contact_number:'',
    account_number:'',
    kwh_rate:'',
    notes:''
    })
 }

render(){
  return(
    <div id="wrapper" className="col-lg-12">
      <div className="row">
        <div className="col-lg-12">
          <PageHeader><b>Add a New Project</b></PageHeader>
          <p> Fill out the following form to add a new customer or a new project to our system.</p>
          <p> This information will be received by the operations team in <b>Energy Logan Operations App</b> to be prepared for survey.</p>
           <hr /> <br />
        </div>  

       
        <div className="col-lg-12">
          <form>
            <FieldGroup
              id="project_name"
              type="text"
              label="Project Name"
              placeholder=""
              value={this.state.project_name}
              onChange={this.handleChange.bind(this)}
            />
            <FieldGroup
              id="customer"
              type="text"
              label="Customer"
              placeholder=""
              value={this.state.customer}
              onChange={this.handleChange.bind(this)}
            />
            <FieldGroup
              id="address"
              type="text"
              label="Address"
              placeholder=""
              value={this.state.address}
              onChange={this.handleChange.bind(this)}
            />
            <FieldGroup
              id="contact_name"
              type="text"
              label="Contact Name"
              placeholder=""
              value={this.state.contact_name}
              onChange={this.handleChange.bind(this)}
            />
            <FieldGroup
              id="contact_number"
              type="text"
              label="Contact Number"
              placeholder=""
              value={this.state.contact_number}
              onChange={this.handleChange.bind(this)}
            />
            <FieldGroup
              id="account_number"
              type="text"
              label="Account Number"
              placeholder=""
              value={this.state.account_number}
              onChange={this.handleChange.bind(this)}
            />
            <FieldGroup
              id="kwh_rate"
              type="text"
              label="kWh Rate"
              placeholder=""
              value={this.state.kwh_rate}
              onChange={this.handleChange.bind(this)}
            />
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Notes</ControlLabel>
              <FormControl componentClass="textarea" id="notes" value={this.state.notes} onChange={this.handleChange.bind(this)} placeholder="Enter text"/>
            </FormGroup>

            <Button bsSize="large" type="submit" onClick={this.handleSubmit.bind(this)}>
              Submit to Operations
            </Button>
          </form>
          <br /><br />
        </div>
    
    </div>
      </div>
      );
  };
};


export default FormComponent;
