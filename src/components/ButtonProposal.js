import React, {Component} from 'react';
import Bootstrap from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Popout from 'react-popout';
import DetailedView from './DetailedView/DetailedView'
import detailedview from './DetailedView/detailedview.css';





class ButtonProposal extends Component{
  constructor(props) {
    super(props);
    this.popout = this.popout.bind(this);

    this.popoutClosed = this.popoutClosed.bind(this);
    this.popoutContentClicked = this.popoutContentClicked.bind(this);
    this.state = { isPoppedOut: false };
  }

 

  popout() {
    this.setState({isPoppedOut: true});
  }

  popoutClosed() {
    if (this.state.timerId) {      
      this.setState({isPoppedOut: false});
    }
  }

  popoutContentClicked() {
    this.popoutClosed();
  }

  render() {

      return (
        <div>
          { this.state.isPoppedOut ?
          <Popout title='Test' onClosing={this.popoutClosed}>
            <div>
              <div><DetailedView /></div>
              <div onClick={this.popoutContentClicked}>Close</div>
            </div>
          </Popout> : false }
          <div>

          <Button bsSize="large" bsStyle="warning"
          onClick={this.popout}>VIEW PROJECT PROPOSAL
          </Button>
         
          </div>
        </div>
      );

    }
  }

export default ButtonProposal;