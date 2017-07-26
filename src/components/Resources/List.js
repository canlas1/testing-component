import React, { Component } from 'react';
 
class List extends Component {
  constructor(props){
    super(props);
  }
 
  render() {
    return <ul> {this.props.program_name.map(this.renderItem)} </ul>;
  }
 
  renderItem(program_name) {
    return <li key={program_name}>{program_name}</li>;
  }
}
 
export default List;