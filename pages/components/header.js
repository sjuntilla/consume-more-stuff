import Link from 'next/link';
import { Heading, Grommet, Anchor, Box, Accordion, AccordionPanel, DropButton } from 'grommet';
import { dark } from 'grommet/themes';


const linkStyle = {
    marginRight: 15,
    textDecoration: "none"
}


const PostLink = props => (
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
        <Anchor color="brand">{props.title}</Anchor></Link>
)

const Header = () => (
    <Grommet theme={dark}>
        <Box direction="row-responsive" fit="cover" alignContent="between">
            <DropButton elevation="xxsmall" margin="small" height="xxsmall" animate="true" label="Menu" dropAlign={{ top: 'bottom', left: 'left' }} dropContent={
                <Box pad="small" background="backgroundColor">
                    <Link href="/">
                        <Anchor style={linkStyle} color="brand" background="backgroundColor">Home</Anchor>
                    </Link>
                    <PostLink id="items" title="Tech Accessories" />
                    <PostLink id="office-supplies" title="Office Supplies" />
                    <PostLink id="health-wellness" title="Health and Wellness" />

                </Box>
            }>
            </DropButton>
        </Box>
    </Grommet >

)

export default Header