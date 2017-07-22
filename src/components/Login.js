// import React from 'react';
// import App from '../App';

// import {
//   Panel,
//   FormControl,
//   Button,
//   Form,
//   Checkbox,
 
//   InputGroup,
  

// } from 'react-bootstrap';

// // import FormControlFeedback from 'react-bootstrap/lib/FormControlFeedback';
// // import FormControlStatic from 'react-bootstrap/lib/FormControlStatic';
// // import InputGroupAddon from 'react-bootstrap/lib/InputGroupAddon';

// // const loginSchema = new Schema({
  
// //   login:{
// //     type: String, 
// //     required: true
// //   },

// //   password:{
// //     type: String, 
// //     required: true
// //   } 
// // });

// class Login extends React.Component {
//   render(){
//     return(

//       <div className="col-md-6 col-md-offset-6">
        
//         <div className="text-center">
//           <h1 className="login-brand-text">Login Portal!</h1>
     
//         <Panel header className="login-panel">  
//           <Form
//           onSubmit={data => console.log(data)}
//           onError={(errors, data) => console.log('error', errors, data)}
//           >
//             <form role="form">
//                <fieldset>
//                  <div className="form-group">
//                    <FormControl
//                      type="text"
//                      className="form-control"
//                      placeholder="Username"
//                      name="name"
//                    />
//                  </div>

//                  <div className="form-group">
//                    <FormControl
//                      className="form-control"
//                      placeholder="Password"
//                      type="password"
//                      name="password"
//                    />
//                  </div>
//                  <Checkbox label="Remember Me" > Remember Me </Checkbox>
//                  <Button type="submit" bsSize="large" bsStyle="success" block>Submit</Button>
//                </fieldset>
//             </form>
//           </Form>
//         </Panel>

//       </div>
//      </div>
//       )
//   }
// }

// export default Login