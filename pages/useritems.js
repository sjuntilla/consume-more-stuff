import Layout from "./components/layout";
import React from "react";
import { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { Grommet, Heading, Anchor, Text, Box, Layer, Button } from "grommet";
import { Card } from "grommet-controls";
import { FormTrash, Edit } from "grommet-icons";
import { dark } from "grommet/themes";
import { Disposer } from "bluebird";


class UserItems extends Component {
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
    };
  }

  componentDidMount = e => {
    fetch("http://localhost:8080/api/items")
      .then(res => {
        return res.json();
      })
      .then(itemsData => {
        this.setState({ items: itemsData });
      })
      .catch(err => {
        console.log(err);
      });
  };


  removeItem = (id) => {

    fetch("http://localhost:8080/api/items", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id,
      }),
      credentials: "include"
    })
      .then(res => {
        console.log("DELETED USERITEM FROM ITEM LIST")
        return fetch("http://localhost:8080/api/items")
          .then((res) => { return res.json() })
          .then((body) => { this.setState({ items: body }) })
      })
  }

  render() {
    const { items } = this.state;

    return (
      <Grommet theme={dark}>
        <Layout>
          <Box key="wrapper" direction="row" wrap="true" alignContent="between">
            {items.map(item => (

              <Card
                basis="medium"
                animation="fadeIn"
                background="dark-1"
                elevation="xxsmall"
                gap="small"
                margin="medium"
                key={item.id}
              >
                <Card.CardTitle color="neutral-2">{item.name}</Card.CardTitle>
                <Card.CardContent color="dark-1">
                  <Text>{item.url}</Text>
                  <Text>{item.description}</Text>
                  <Text>${item.price}</Text>
                  <Text>{item.category}</Text>
                  <Item delete={this.removeItem} id={item.id} />
                  <Link href="/edit"><Button
                    icon={<Edit />}
                    label="Edit"
                    onClick={() => {
                      console.log("--->EDIT BUTTON FIRED");
                    
                    }}
                  /></Link>
                </Card.CardContent>
              </Card>
            ))}
          </Box>
        </Layout>
      </Grommet>
    );
  }
}

function Item(props) {
  return (
    <Button
      icon={<FormTrash />}
      label="Delete"
      onClick={() => props.delete(props.id)}
    />
  )
}

export default UserItems;
