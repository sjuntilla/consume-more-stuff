import Link from 'next/link';
import { Heading, Grommet, Anchor, Box } from 'grommet';
import { dark } from 'grommet/themes';


const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <Grommet theme={dark}>
        <Box background="text-dark" direction="row-responsive">
            <Link href="/">
                <Anchor style={linkStyle} color="neutral-4">Home</Anchor>
            </Link>

            <Link href="/items">
                <Anchor style={linkStyle} color="neutral-4">Items</Anchor>
            </Link>

            <Box direction="row-responsive" justify="end">
                <Anchor style={{ margin: "left" }} color="neutral-3">Login</Anchor></Box>
        </Box>

    </Grommet>

)

export default Header