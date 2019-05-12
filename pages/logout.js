import Layout from "./components/layout";
import React from "react";
import { Component } from "react";
import { Box, Form, FormField, Select, Button, Layer, Grommet } from "grommet";
import Router from "next/router";
import Link from "next/link";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log("Hello");
    console.log("Peace Out!!! Loggin Off..");
    fetch("http://localhost:8080/api/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      // <Form onSubmit={this.handleSubmit}>
      //   <Button type="submit" label="Log Out" primary={true} />
      // </Form>
      //   <Link href="/">
      <Form onSubmit={this.handleSubmit}>
        {/* <a onClick={this.handleSubmit}>LOG OUT</a> */}
        <Button
          onClick={() => Router.push("/")}
          type="submit"
          label="Log Out"
          primary={true}
        />
      </Form>
      //   {/* </Link> */}
    );
  }
}

export default Logout;
