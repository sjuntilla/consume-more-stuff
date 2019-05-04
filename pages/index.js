import Layout from './components/layout';
import Link from 'next/link';
import { Grommet, Heading, Anchor, Menu, Box, Text, Clock, AccordionPanel, Accordion } from 'grommet';
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
      <Layout animation="fadeIn">
        <Heading color="neutral-2">silk code.</Heading>

        <Box key="type" align="start">
          <Text>Excuse me sir this is my emotional support text tag</Text>
          <Clock type="digital" background="brand" />
        </Box>
      </Layout>
    </Grommet >
  )
}