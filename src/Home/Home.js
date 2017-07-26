import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Panel, Form, FormControl, Checkbox, Modal } from 'react-bootstrap';
import App from '../App.js';
import Dashboard from './../components/Dashboard';

class Home extends Component {
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
  
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
     
            <Modal dialogClassName="proposal" show={this.state.showModal} onHide={this.close}>
            <Modal.Body>

            Welcome to Energy Logan

            </Modal.Body>
            <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>


                      )
        }
         {
          isAuthenticated() && (

              <Dashboard />
              // <Button
              //     bsStyle="primary"
              //     className="btn-margin"
              //     onClick={this.goTo.bind(this, 'profile')}
              //   >
              //     Profile
              //   </Button>
              )
            }

        {
          !isAuthenticated() && (



            <Modal dialogClassName="proposal" show={this.state.showModal} onHide={this.close}>
            <Modal.Body>

            <h4>
                You are not logged in! Please{' '}
                <Link
                  to={'/login'}
                >
                  Log In
                </Link>
                {' '}to continue.
              </h4>

            </Modal.Body>
            <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
              
            )
        }
      </div>
    );
  }
}

export default Home;
