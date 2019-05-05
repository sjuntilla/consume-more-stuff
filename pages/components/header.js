import Link from 'next/link';
import { Component } from 'react';
import { Heading, Grommet, Anchor, Box, Accordion, AccordionPanel, DropButton, Tabs, Tab, Layer, Button, FormField, TextInput, TextArea, Text, Add } from 'grommet';
import { dark } from 'grommet/themes';


const linkStyle = {
    marginRight: 15,
    textDecoration: "none"
}

const PostLink = props => (
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
        <Anchor color="neutral-2">{props.title}</Anchor></Link>
)

class CornerLayer extends Component {
    state = {};

    onOpen = () => this.setState({ open: true });

    onClose = () => this.setState({ open: undefined });

    render() {
        const { open } = this.state;
        return (
            <Grommet theme={dark} full>
                <Box fill align="center" justify="center">
                    <Button
                        icon={<Add color="brand" />}
                        label={
                            <Text>
                                <strong>Add Corner Layer</strong>
                            </Text>
                        }
                        onClick={this.onOpen}
                        plain
                    />
                </Box>
                {open && (
                    <Layer position="top-right">
                        <Box height="small" overflow="auto">
                            <Box pad="xlarge">Corner top-right position</Box>
                        </Box>
                    </Layer>
                )}
            </Grommet>
        );
    }
}

const Header = () => (
    <Grommet theme={dark}>
        <Box direction="row-responsive" fit="cover" pad="small">


            {/* TABS OPTION */}
            <Tabs>
                <Tab title="HOME" />
                <Tab title="SHOP">
                    <CornerLayer />
                </Tab>
                <Tab title="LOGIN">
                    <Layer
                        position="right"
                        full="vertical"
                        onClickOutside={{ open: false }}
                    >
                        <Box
                            as="form"
                            fill="vertical"
                            overflow="auto"
                            width="medium"
                            pad="medium"
                        >
                            <Box flex={false} direction="row" justify="between">
                                <Heading level={2} margin="none">
                                    Login
                  </Heading>
                            </Box>
                            <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
                                <FormField label="Username">
                                    <TextInput />
                                </FormField>
                                <FormField label="Password">
                                    <TextArea />
                                </FormField>
                            </Box>
                            <Box flex={false} as="footer" align="start">

                            </Box>
                        </Box>
                    </Layer>
                </Tab>
                <Tab title="REGISTER">
                </Tab>
            </Tabs>

        </Box>
    </Grommet >

)

export default Header