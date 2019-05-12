import Layout from "./components/layout";
import React from "react";
import { Component } from "react";
import { Box, Form, FormField, Select, Button, Layer, Grommet } from "grommet";
import { AddCircle } from "grommet-icons";
import { dark } from "grommet/themes";
//should only show when user is logged in

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      url: "",
      description: "",
      price: "",
      category: ""
      // categories: ["WELLNESS", "OFFICE", "ACCESSORIES"]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("-----> ITEM STATE", this.state);
    fetch("http://localhost:8080/api/items", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name.toLowerCase(),
        url: this.state.url,
        description: this.state.description.toLowerCase(),
        price: this.state.price,
        category: this.state.category.toLowerCase()
      }),
      credentials: "include"
    })
      .then(() => {
        console.log("ADDED ITEM TOOOOOO ITEM LIST");
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Grommet theme={dark}>
        <Layout>
          <Box pad="large">
            <Form onSubmit={this.handleSubmit}>
             
              <FormField
                onChange={this.handleChange}
                name="name"
                label="Product Name"
                required={true}
              />
              <FormField
                onChange={this.handleChange}
                name="url"
                label="URL of Product Name"
                required={false}
              />
              <FormField
                onChange={this.handleChange}
                name="description"
                label="Product Description"
                required={true}
              />
              <FormField
                onChange={this.handleChange}
                name="price"
                label="Product Price"
                required={true}
              />
              <Select
                placeholder="Category"
                onChange={this.handleChange}
                value={this.state.category}
                options={["WELLNESS", "OFFICE", "ACCESSORIES"]}
                onChange={({ option }) => this.setState({ category: option })}
                name="category"
                required={true}
              />

              <Button
                icon={<AddCircle />}
                type="submit"
                label="Add Item"
                primary={true}
              />
            </Form>
          </Box>
        </Layout>
      </Grommet>
    );
  }
}
export default AddItem;
