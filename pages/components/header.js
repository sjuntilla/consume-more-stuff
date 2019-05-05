import Link from 'next/link';
import Register from '../register';
import { Component } from 'react';
import { Heading, Grommet, Anchor, Box, Accordion, AccordionPanel, DropButton, Tabs, Tab, Layer, Button, FormField, TextInput, Select, TextArea, onClickOutside } from 'grommet';
import { dark } from 'grommet/themes';


const linkStyle = {
    marginRight: 15,
    textDecoration: "none"
}

const PostLink = props => (
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
        <Anchor color="neutral-2">{props.title}</Anchor></Link>
)

const Header = () => (
    <Grommet theme={dark}>
        <Box direction="row-responsive" fit="cover" pad="small">


            {/* TABS OPTION */}
            <Tabs>
                <Tab title="HOME" />
                <Tab title="SHOP">
                </Tab>
                <Tab title="ADD ITEM">
                </Tab>
                <Tab title="LOGIN">
                </Tab>
                <Tab title="REGISTER">
                    <Register />
                </Tab>

            </Tabs>

        </Box>
    </Grommet >

)

export default Header;