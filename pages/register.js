import React from "react";
import { Component } from "react";
import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  Select,
  Layer,
  onClickOutside,
  Grommet
} from "grommet";
import { dark } from "grommet/themes";
import Layout from './components/layout';
import Router from 'next/router';



class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      username: "",
      open: false,
      select: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("STATEEEE", this.state);
    fetch("http://localhost:8080/api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(() => {
        console.log("added to database");
        alert("Thank you for registering, " + this.state.first_name + "! You will now be redirected to log in with your registered email and password. :) ")
      })
      // .then(function(response) {
      //   console.log(response);
      // })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = e => {
    // console.log("HITTT", e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
  

  render() {
    const { layerType } = this.state;

    return (
      <Grommet theme={dark}>
        <Layout>
          <Box pad="large" background="neutral-4" width="medium">
            <Form onSubmit={this.handleSubmit}>
              <FormField
                onChange={this.handleChange}
                name="first_name"
                label="First Name"
                required={true}
              />
              <FormField
                onChange={this.handleChange}
                name="last_name"
                label="Last Name"
                required={true}
              />
              <FormField
                onChange={this.handleChange}
                name="email"
                label="E-mail"
                required={true}
              />
              <FormField
                onChange={this.handleChange}
                name="username"
                label="Username"
                required={true}
              />
              <FormField
                onChange={this.handleChange}
                name="password"
                type="password"
                label="Password"
                required={true}
              />
              <Button onClick={() => Router.push('/login')} type="submit" label="Register" primary={true}  />
            </Form>
          </Box>
        </Layout></Grommet>
    );
  }
}
export default Register;
