import React, {Component} from 'react';
import {Button, Collapse, Well} from 'react-bootstrap';
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div onClick={ ()=> this.setState({ open: !this.state.open })}>
          click
        </div>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}
export default Example;