import { Grommet, Heading, Text, Box } from "grommet";
import { dark } from "grommet/themes";
import { materialdark } from "grommet-controls/themes";
import { Card, Avatar } from "grommet-controls";
import Layout from "./components/layout";

import fetch from "isomorphic-unfetch";

const userProfile = ({ users }, { items }) => {
  console.log({ users });
  console.log({ items });
  return (
    <Grommet theme={dark}>
      <Layout>
        <Box
          basis="small"
          width="medium"
          background="neutral-2"
          gap="medium"
          pad="medium"
        >
          <Avatar
            image="https://thumbs.gfycat.com/UnequaledBruisedAffenpinscher-max-1mb.gif"
            title={users[1].username}
            subTitle="who uses"
          />
          <Text>List of posted items</Text>
        </Box>
      </Layout>
    </Grommet>
  );
};

userProfile.getInitialProps = async ({ req }) => {
  const res = await fetch("http://localhost:8080/api/users");
  // console.log("ressssss", res)
  const json = await res.json();
  return { users: json };
};

export default userProfile;
