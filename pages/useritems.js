import Layout from "./components/layout";
import fetch from "isomorphic-unfetch";

import Link from "next/link";
import { Grommet, Heading, Anchor, Text, Box, Layer } from "grommet";
import { Card } from "grommet-controls";
import { dark } from "grommet/themes";
import { Disposer } from "bluebird";

const UserItems = ({ items }) => {
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
                            </Card.CardContent>
                        </Card>
                    ))}
                </Box>
            </Layout>
        </Grommet>
    );
};

UserItems.getInitialProps = async ({ req }) => {
    const res = await fetch("http://localhost:8080/api/items");
    // console.log("ressssss", res)
    const json = await res.json();
    return { items: json };
};

//THIS ALLOWS CLIENT TO DELETE ITEMS VIA BROWSER//
removedItem = id => {
    const headers = { 'Content-Type': 'application/json' };
    let itemData = { items: id };
    // console.log("THIS IS THE CARD DATA", cardData)
    fetch(`/kanban`, { method: 'DELETE', body: JSON.stringify(itemData), headers })
        .then(res => {
            return fetch('http://localhost:8080/api/items')
                .then((res) => { return res.json() })
                .then((body) => { this.setState({ items: body }) })
        })
}

export default UserItems;