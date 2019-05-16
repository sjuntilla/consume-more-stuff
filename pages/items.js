import Layout from "./components/layout";
import fetch from "isomorphic-unfetch";

import Link from "next/link";
import {
  Grommet,
  Heading,
  Anchor,
  Text,
  Box,
  Layer,
  Image,
  Button,
  Tab,
  Tabs
} from "grommet";
import { Card, Tag } from "grommet-controls";
import { dark } from "grommet/themes";
import { Disposer } from "bluebird";
import { IconButton } from "grommet-controls/components";
import { SubtractCircle } from "grommet-icons";
import { isContinueStatement } from "@babel/types";

const Items = ({ items }) => {
  return (
    <Grommet theme={dark}>
      <Layout>
        <Tabs>
          <Tab title="All Items">
            <Box direction="row" wrap="true" alignContent="around" pad="large">
              {items.map(item => (
                <Card
                  basis="medium"
                  animation="fadeIn"
                  background="dark-1"
                  elevation="xxsmall"
                  gap="medium"
                  margin="small"
                >
                  <Card.CardTitle color="brand">{item.name}</Card.CardTitle>
                  <Card.CardContent color="dark-1">
                    <Box
                      direction="row"
                      border={{ color: "brand", size: "large" }}
                      pad="medium"
                      round="small"
                    >
                      <Box height="small" width="medium">
                        <Image fit="cover" src={item.url} />
                      </Box>
                    </Box>
                    <Text>{item.description}</Text>
                    <Text>${item.price}</Text>
                    <Tag label={item.category} />
                  </Card.CardContent>
                </Card>
              ))}
            </Box>
          </Tab>
          <Tab title="Equipment">
            <Box direction="row" wrap="true" alignContent="around" pad="large">
              {items.map(item => {
                if (item.category === "equipment") {
                  return (
                    <Card
                      basis="medium"
                      animation="fadeIn"
                      background="dark-1"
                      elevation="xxsmall"
                      gap="medium"
                      margin="small"
                    >
                      <Card.CardTitle color="brand">{item.name}</Card.CardTitle>
                      <Card.CardContent color="dark-1">
                        <Box
                          direction="row"
                          border={{ color: "brand", size: "large" }}
                          pad="medium"
                          round="small"
                        >
                          <Box height="small" width="medium">
                            <Image fit="cover" src={item.url} />
                          </Box>
                        </Box>
                        <Text>{item.description}</Text>
                        <Text>${item.price}</Text>
                        <Tag label={item.category} />
                      </Card.CardContent>
                    </Card>
                  );
                }
              })}
            </Box>
          </Tab>
          <Tab title="Wellness">
            <Box direction="row" wrap="true" alignContent="around" pad="large">
              {items.map(item => {
                if (item.category === "wellness") {
                  return (
                    <Card
                      basis="medium"
                      animation="fadeIn"
                      background="dark-1"
                      elevation="xxsmall"
                      gap="medium"
                      margin="small"
                    >
                      <Card.CardTitle color="brand">{item.name}</Card.CardTitle>
                      <Card.CardContent color="dark-1">
                        <Box
                          direction="row"
                          border={{ color: "brand", size: "large" }}
                          pad="medium"
                          round="small"
                        >
                          <Box height="small" width="medium">
                            <Image fit="cover" src={item.url} />
                          </Box>
                        </Box>
                        <Text>{item.description}</Text>
                        <Text>${item.price}</Text>
                        <Tag label={item.category} />
                      </Card.CardContent>
                    </Card>
                  );
                }
              })}
            </Box>
          </Tab>
          <Tab title="Office">
            <Box direction="row" wrap="true" alignContent="around" pad="large">
              {items.map(item => {
                if (item.category === "office") {
                  return (
                    <Card
                      basis="medium"
                      animation="fadeIn"
                      background="dark-1"
                      elevation="xxsmall"
                      gap="medium"
                      margin="small"
                    >
                      <Card.CardTitle color="brand">{item.name}</Card.CardTitle>
                      <Card.CardContent color="dark-1">
                        <Box
                          direction="row"
                          border={{ color: "brand", size: "large" }}
                          pad="medium"
                          round="small"
                        >
                          <Box height="small" width="medium">
                            <Image fit="cover" src={item.url} />
                          </Box>
                        </Box>
                        <Text>{item.description}</Text>
                        <Text>${item.price}</Text>
                        <Tag label={item.category} />
                      </Card.CardContent>
                    </Card>
                  );
                }
              })}
            </Box>
          </Tab>
        </Tabs>
      </Layout>
    </Grommet>
  );
};

Items.getInitialProps = async ({ req }) => {
  const res = await fetch("http://localhost:8080/api/items");
  // console.log("ressssss", res)
  const json = await res.json();
  return { items: json };
};

export default Items;
