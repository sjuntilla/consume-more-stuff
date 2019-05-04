import Link from 'next/link';
import { Heading, Grommet, Anchor, Box, Accordion, AccordionPanel } from 'grommet';
import { dark } from 'grommet/themes';


const linkStyle = {
    marginRight: 15
}

const PostLink = props => (
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
        <Anchor>{props.title}</Anchor></Link>
)

const Header = () => (
    <Grommet theme={dark}>
        <Link href="/">
            <Anchor style={linkStyle} color="neutral-4">Home</Anchor>
        </Link>

        <Link href="/items">
            <Anchor style={linkStyle} color="neutral-4">Items</Anchor>
        </Link>
        <Box background="text-dark" direction="row-responsive">
            <Accordion color="neutral-2" elevation="medium">
                <AccordionPanel label="Menu">
                    <Box pad="small">
                        <PostLink id="lady-tech-gear" title="Lady Tech Gear" />
                        <PostLink id="tech-accessories" title="Tech Accessories" />
                    </Box>
                </AccordionPanel>
            </Accordion>

            <Box direction="row-responsive" justify="end">
                <Anchor style={{ margin: "left" }} color="neutral-3">Login</Anchor></Box>
        </Box>

    </Grommet>

)

export default Header