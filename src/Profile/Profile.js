  import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import './Profile.css';

class Profile extends Component {
  componentWillMount() {
    console.log("aqui ", this.props);
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    return (
      <div className="col-lg-12">
        <div className="profile-area">
          <h1><b>Welcome {profile.name}</b></h1>
          <hr />
          <Panel header={profile.given_name + "'s' Profile"}>
          <div className="row">
          <div className="col-lg-6">
            <img src={profile.picture} alt="profile" />
          </div>
                 <div className="col-lg-6">
             <ControlLabel><Glyphicon glyph="user" /> Nickname:  <h3>{profile.nickname}</h3>
              </ControlLabel>
          </div>
          </div>
            <div>
        
            <p>This is your sales portal from Energy Logan. Please use this Application to update your pipeline by adding new projects in the Add New Project Section</p>
            <p> You can also access to your client's proposals, once the operations team finishes the survey and post-fixtures analysis.</p>
            <p>Please verify the numbers are correct and have your customer sign the proposal</p>
            <h4>Happy Sales!</h4>
             
            </div>
            
          </Panel>
        </div>
      </div>
    );
  }
}

export default Profile;
