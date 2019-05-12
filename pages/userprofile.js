import { Grommet, Heading, Text, Box } from "grommet";
import { dark } from "grommet/themes";
import { materialdark } from "grommet-controls/themes";
import { Card, Avatar } from "grommet-controls";
import Layout from "./components/layout";

import fetch from "isomorphic-unfetch";

const userProfile = () => {
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
            title="user firstname"
            subTitle="who uses"
          />
          <Text>List of posted items</Text>
        </Box>
      </Layout>
    </Grommet>
  );
};

export default userProfile;
