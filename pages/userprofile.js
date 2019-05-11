import { Grommet, Heading } from "grommet";
import { dark } from "grommet/themes";
import { materialdark } from "grommet-controls/themes";
import { Card, Avatar } from "grommet-controls";
import Layout from "./components/layout";

const userProfile = () => {
  return (
    <Grommet theme={materialdark}>
      <Layout>
        <Card basis="xxsmall" background="accent-4" gap="medium" pad="medium">
          <Avatar
            image="https://thumbs.gfycat.com/UnequaledBruisedAffenpinscher-max-1mb.gif"
            title="A User"
            subTitle="who uses"
          />
        </Card>
      </Layout>
    </Grommet>
  );
};

export default userProfile;
