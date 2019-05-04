
import Layout from './components/layout';
import Link from 'next/link';
import { Grommet, Heading, Anchor, Menu } from 'grommet';
import { dark } from 'grommet/themes';
export default function Items() {
    return (
        <Grommet theme={dark}>
            <Layout>
                <Heading color="neutral-2">This is where all our items will go</Heading>
            </Layout>
        </Grommet >
    )
}