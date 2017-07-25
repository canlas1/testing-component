import React, {Component} from 'react';
import Bootstrap from 'react-bootstrap';
import {Button, Modal} from 'react-bootstrap';
// import Popout from 'react-popout';

import DetailedView from './DetailedView/DetailedView'
import detailedview from './DetailedView/detailedview.css';





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
        <p>Click to get the full Modal experience!</p>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Launch demo modal
        </Button>

        <Modal dialogClassName="proposal" show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
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