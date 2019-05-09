import Layout from './components/layout';
import fetch from 'isomorphic-unfetch';

import Link from 'next/link';
import { Grommet, Heading, Anchor, Text, Box, Layer } from 'grommet';
import { Card } from 'grommet-controls';
import { dark } from 'grommet/themes';
import { Disposer } from 'bluebird';


const Items = ({ items }) => {
    return (
        <Grommet theme={dark}>
            <Layout>
                <Box key="wrapper" direction="row-responsive" alignContent="between">
                    {items.map(item =>
                        <Card basis="medium" animation="fadeIn" background="neutral-4" elevation="small" gap="small" margin="medium">
                            <Card.CardTitle color="neutral-1">{item.name}</Card.CardTitle>
                            <Card.CardContent>
                                <Text>{item.description}</Text>
                                <Text>${item.price}</Text>
                                <Text>{item.category}</Text>
                            </Card.CardContent>
                        </Card>
                    )}
                </Box>


            </Layout>
        </Grommet>
    )

}

Items.getInitialProps = async ({ req }) => {
    const res = await fetch('http://localhost:8080/api/items');
    // console.log("ressssss", res)
    const json = await res.json();
    return { items: json }
}

export default Items;