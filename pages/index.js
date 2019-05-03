import Layout from './components/layout';
import Link from 'next/link';
import { Grommet, Heading, Anchor, Menu } from 'grommet';
import { dark } from 'grommet/themes';
import generate from '@babel/generator';

const PostLink = props => (
  <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
    <Anchor>{props.title}</Anchor></Link>
)

// < PostLink id = "lady-tech-gear" title = "Lady Tech Gear" />
// < PostLink id = "tech-accessories" title = "Tech Accessories" />

export default function Items() {
  return (
    <Grommet theme={dark}>
      <Layout>
        <Heading>Some shit</Heading>
        <Menu label="Menu"
          size="xlarge"
          items={[
            { label: 'Gear' }
          ]} />
      </Layout>
    </Grommet >
  )
}