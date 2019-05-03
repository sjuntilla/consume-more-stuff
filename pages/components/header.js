import Link from 'next/link';
import { Heading, Grommet, Anchor } from 'grommet';
import { dark } from 'grommet/themes';


const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <Grommet theme={dark}>
        <div>

            <Link href="/">
                <Anchor style={linkStyle}>Home</Anchor>
            </Link>

            <Link href="/items">
                <Anchor style={linkStyle}>Items</Anchor>
            </Link>


        </div>
    </Grommet>

)

export default Header