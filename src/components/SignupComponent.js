import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label,Alert } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

//Modify the signup Thunk here and send it to the store-> Just like Login form ---same level
class Signup extends Component {

  constructor(props){
    super(props);

    this.state={
      // isModalOpen:false,
      redirectToReferrer:false
    }


    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup() {
    // this.toggleModal();
    this.props.signupUser({username: this.username.value, password: this.password.value,firstname: this.firstname.value,lastname: this.lastname.value});
    // event.preventDefault();
    this.setState({redirectToReferrer:true})
    alert("You have succesfully registered")
}


  render() {
    const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer === true) {
            return <Redirect to="/home" />
        }
    else
    return (
      <div className="col-12 col-md-3 mx-auto" style={{margin:'50px',border:'solid black 1px',padding:'15px',borderRadius:'20px'}}>
      <h3>Signup</h3>
      <hr />
        <Form onSubmit={this.handleSignup}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
                  <Input type="text" id="username" name="username"
                      innerRef={(input) => this.username = input} required />
              </FormGroup>
              <FormGroup>
                  <Label htmlFor="password">Password</Label>
                  <Input type="password" id="password" name="password"
                      innerRef={(input) => this.password = input} required />
              </FormGroup>
              <FormGroup>
                  <Label htmlFor="firstname">First Name</Label>
                  <Input type="text" id="firstname" name="firstname"
                      innerRef={(input) => this.firstname = input} required />
              </FormGroup>
              <FormGroup>
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input type="text" id="lastname" name="lastname"
                      innerRef={(input) => this.lastname = input} required />
              </FormGroup>
              
              <Button type="submit" to="/home"  value="submit" color="primary">Signup</Button>
              
          </Form>
    </div>
  
    );
  }
}

export default Signup;