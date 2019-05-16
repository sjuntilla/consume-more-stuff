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
      items: [],
      id: "",
      name: "",
      url: "",
      description: "",
      price: "",
      category: ""
    }
  };


  // handleSubmit(e) {
  //   e.preventDefault();
  //   // console.log(this.state.items);
  // }

  handleChange = e => {
    e.preventDefault();
    let items = this.state.items;
    let name = e.target.name;
    let value = e.target.value;

    items[name] = value;
    this.setState({ items })
  }

  editItem = (id) => {
    console.log("----->EDIT")
    fetch("http://localhost:8080/api/items", {
      method: "PUT",
      headers: {
        Accept: "application/json", "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: parseInt(id)
      }),
      credentials: "include"
    }).then(res => {
      console.log("------>EDIT ITEM ID!!!!!", id)
    })
      .then(res => {
        console.log("EDITED USERITEM FROM ITEM LIST")
        return fetch("http://localhost:8080/api/items")
          .then((res) => { return res.json() })
          .then((body) => { this.setState({ items: body }) })
      })
  }

  render() {
    const { item } = this.state;

    return (
      <Grommet theme={dark}>
        <Layout>
          <Box pad="large">
            <Form>

              <FormField
                onChange={this.handleChange}
                value={this.state.items["name"]}
                name="name"
                label="Product Name"
                required={true}
              />
              <FormField
                onChange={this.handleChange}
                value={this.state.items["url"]}
                name="url"
                label="URL of Product Name"
                required={false}
              />
              <FormField
                onChange={this.handleChange}
                value={this.state.items["description"]}
                name="description"
                label="Product Description"
                required={true}
              />
              <FormField
                onChange={this.handleChange}
                value={this.state.items["price"]}
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
              <Item edit={this.editItem} id={this.id} />
            </Form>
          </Box>
        </Layout>
      </Grommet>
    );
  }
}

function Item(props) {
  return (
    <div className="buttons">
      <Button
        icon={<Update />}
        type="submit"
        label="Update"
        primary={true}
        onClick={() => props.edit(props.id)}
      />
    </div>
  )
}

export default EditItem;
