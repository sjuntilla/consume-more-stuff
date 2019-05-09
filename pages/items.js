import Layout from "./components/layout";
import fetch from "isomorphic-unfetch";

import Link from "next/link";
import { Grommet, Heading, Anchor, Text, Box, Distribution } from "grommet";
import { dark } from "grommet/themes";
import { Disposer } from "bluebird";

import Link from "next/link";
import { Grommet, Heading, Anchor, Menu } from "grommet";
import { dark } from "grommet/themes";

const Items = ({ items }) => {
  return (
    <Grommet theme={dark}>
      <Layout>
        <Box key="wrapper" direction="row-responsive">
          {items.map(item => (
            <Box
              key={item.id}
              background="#666"
              animate="fadeIn"
              margin="small"
              pad="small"
              size="small"
              elevation="xsmall"
            >
              <Heading level={3} color="brand">
                {item.name}
              </Heading>
              <Text>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text>${item.price}</Text>
              <Text>{item.category}</Text>
            </Box>
          ))}
        </Box>
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
