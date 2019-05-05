import Link from 'next/link';
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

            {/* DROPBUTTON OPTION */}
            {/* <DropButton elevation="xxsmall" margin="small" height="xxsmall" animate="true" label="Menu" dropAlign={{ top: 'bottom', left: 'left' }} dropContent={
                <Box pad="small">
                    <Box background="#444">
                        <Link href="/">
                            <Anchor style={linkStyle} color="brand" background="backgroundColor">Home</Anchor>
                        </Link></Box>
                    <Box background="#111">
                        <PostLink id="items" title="Tech Accessories" />
                    </Box>
                    <Box background="#444">
                        <PostLink id="office-supplies" title="Office Supplies" />
                    </Box>
                    <Box background="#111">
                        <PostLink id="health-wellness" title="Health and Wellness" />
                    </Box>
                </Box>
            }>
            </DropButton> */}


            {/* TABS OPTION */}
            <Tabs>
                <Tab title="SHOP">

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
                <Link href="/register">
                <a>Register</a>
                </Link>

                </Tab>
            </Tabs>

        </Box>
    </Grommet >

)

export default Header