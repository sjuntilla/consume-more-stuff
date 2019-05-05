import Layout from "./components/layout";
import Link from "next/link";
import {
  Grommet,
  Heading,
  Anchor,
  Menu,
  Box,
  Text,
  Clock,
  Carousel,
  Image
} from "grommet";
import { dark } from "grommet/themes";
import generate from "@babel/generator";

const PostLink = props => (
  <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
    <Anchor>{props.title}</Anchor>
  </Link>
);

export default function Items() {
  return (
    <Grommet theme={dark}>
      <Layout>
        <Box
          key="banner"
          pad="large"
          animation="fadeIn"
          background={{
            image: "url(https://i.imgur.com/JnPr8Hs.png)",
            size: "cover"
          }}
        >
          <Box key="heading" elevation="xxsmall">
            <Heading color="brand" responsive="true" size="large" pad="xxsmall">
              silk code.
            </Heading>
            <Box
              key="blurb"
              pad="xxsmall"
              height="small"
              width="large"
              alignSelf="start"
            >
              <Text color="accent-3">
                Lorem Khaled Ipsum is a major key to success. To be successful
                you’ve got to work hard, to make history, simple, you’ve got to
                make it. In life there will be road blocks but we will over come
                it. Life is what you make it, so let’s make it. Bless up. They
                will try to close the door on you, just open it. Look at the
                sunset, life is amazing, life is beautiful, life is what you
                make it. Major key, don’t fall for the trap, stay focused. It’s
                the ones closest to you that want to see you fail.
                Congratulations, you played yourself. Find peace, life is like a
                water fall, you’ve gotta flow.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box key="type" align="start" pad="hair" overflow="hidden">
          <Heading color="accent-2" margin="small">
            Featured Items
          </Heading>
          <Carousel
            play="30000"
            background="backgroundColor"
            height="small"
            fill
          >
            <Image fit="cover" src="https://i.imgur.com/W6fcu6b.png" />
            <Image
              fit="cover"
              src="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/04/Pomeranian_02.jpg"
            />
            <Image
              fit="cover"
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cat-quotes-1543599392.jpg?crop=1.00xw:0.759xh;0,0&resize=480:*"
            />
          </Carousel>
        </Box>
      </Layout>
    </Grommet>
  );
}
