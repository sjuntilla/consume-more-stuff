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

// const UserItems = ({ items }) => {
//   UserItems.getInitialProps = async ({ req }) => {
//     const res = await fetch("http://localhost:8080/api/items");
//     // console.log("ressssss", res)
//     const json = await res.json();
//     return { items: json };
//   };

class UserItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
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

  // componentDidMount = e => {
  //   e.preventDefault();
  //   console.log("-----> USERITEM STATE", this.state);
  //   fetch("http://localhost:8080/api/items", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       name: this.state.name.toLowerCase(),
  //       url: this.state.url,
  //       description: this.state.description.toLowerCase(),
  //       price: this.state.price,
  //       category: this.state.category.toLowerCase()
  //     }),
  //     credentials: "include"
  //   })
  //     .then(() => {
  //       console.log("USERITEM LIST RENDERED");
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

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
              >
                <Card.CardTitle color="neutral-2">{item.name}</Card.CardTitle>
                <Card.CardContent color="dark-1">
                  <Text>{item.description}</Text>
                  <Text>${item.price}</Text>
                  <Text>{item.category}</Text>
                  <Button
                    icon={<Edit />}
                    label="Edit"
                    onClick={() => {
                      console.log("--->EDIT BUTTON FIRED");
                    }}
                  />
                  <Button
                    icon={<FormTrash />}
                    label="Delete"
                    onClick={() => {
                      console.log("--->DELETE BUTTON FIRED");
                    }}
                  />
                </Card.CardContent>
              </Card>
            ))}
          </Box>
        </Layout>
      </Grommet>
    );
  }
}

export default UserItems;
