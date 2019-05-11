import Layout from "./components/layout";
import React from "react";
import { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { Grommet, Heading, Anchor, Text, Box, Layer, Button } from "grommet";
import { Card } from "grommet-controls";
import { FormTrash, Edit } from 'grommet-icons';
import { dark } from "grommet/themes";
import { Disposer } from "bluebird";

//This USERITEMS component will only show after user is logged in to view their items posted, so one can edit and delete

class UserItems extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      description: "",
      price: "",
      category: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount = e => {
    console.log("---------> USERITEM STATE", this.state);
    fetch("http://localhost:8080/api/items")


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
                    onClick={() => { console.log('--->EDIT BUTTON FIRED') }}
                  />
                  <Button
                    icon={<FormTrash />}
                    label="Delete"
                    onClick={() => { console.log('--->DELETE BUTTON FIRED') }}
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
