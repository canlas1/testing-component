import React from 'react';
// import from './sideBarMenu.css';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon, Modal} from 'react-bootstrap'


class Sidebar extends React.Component {


  render() {
    return (

      <div id="sidebar-menu" >

        <Modal className='Sidebar left'
      ></Modal>

        </div>


    );
  }
}

   //constructor(props) {
    //super(props);
  //   this.state = {
  //     uiElementsCollapsed: true,
  //     chartsElementsCollapsed: true,
  //     multiLevelDropdownCollapsed: true,
  //     thirdLevelDropdownCollapsed: true,
  //     samplePagesCollapsed: true,
  //   };
  // }

  



export default Sidebar;
