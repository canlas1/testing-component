import React, {Component} from 'react';
import Bootstrap from 'react-bootstrap';
import {Button, Modal} from 'react-bootstrap';
// import Popout from 'react-popout';

import DetailedView from './../DetailedView/DetailedView'
import detailedview from './../DetailedView/detailedview.css';
import quickview from './quickview.css'





class ButtonProposal extends Component{
  constructor(props) {
    super();
        this.state = {
          showModal: false
        }
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);   
  }


  close() {
    this.setState({showModal:false});
  }

  open() {
    this.setState({showModal:true});
  }
 


  render() {

      return (
       
      <div>
        
        <Button
          bsStyle="warning"
          bsSize="large"
          onClick={this.open}
        >
          View Proposal
        </Button>

        <Modal dialogClassName="proposal" show={this.state.showModal} onHide={this.close}>
         
          <Modal.Body>

          <DetailedView />

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
     );

    }
  }

export default ButtonProposal;