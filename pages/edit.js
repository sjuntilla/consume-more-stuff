import Layout from "./components/layout";
import React from "react";
import { Component } from "react";
import { Box, Form, FormField, Select, Button, Layer, Grommet } from "grommet";
import { Update } from "grommet-icons";
import { dark } from "grommet/themes";
//should only show when user is logged in

class EditItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        itemValues: {}
    }
    };
   

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.itemValues);
  }

  handleChange = e => {
      e.preventDefault();
      let itemValues = this.state.itemValues;
      let name = e.target.name;
      let value = e.target.value;

      itemValues[name] = value;
      this.setState({itemValues})
  }

  render() {
    return (
      <Grommet theme={dark}>
        <Layout>
          <Box pad="large">
            <Form onSubmit={this.handleSubmit}>
             
              <FormField
                onChange={this.handleChange}
                value={this.state.itemValues["name"]}
                name="name"
                label="Product Name"
                required={true}
              />
              <FormField
                onChange={this.handleChange}
                value={this.state.itemValues["url"]}
                name="url"
                label="URL of Product Name"
                required={false}
              />
              <FormField
                onChange={this.handleChange}
                value={this.state.itemValues["description"]}
                name="description"
                label="Product Description"
                required={true}
              />
              <FormField
                onChange={this.handleChange}
                value={this.state.itemValues["price"]}
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
                icon={<Update />}
                type="submit"
                label="Update"
                primary={true}
              />
            </Form>
          </Box>
        </Layout>
      </Grommet>
    );
  }
}
export default EditItem;
