import { Grommet, Heading } from "grommet";
import { dark } from "grommet/themes";
import { materialdark } from "grommet-controls/themes";
import { Card } from "grommet-controls";
import Layout from "./components/layout";

const userProfile = () => {
  return (
    <Grommet theme={materialdark}>
      <Layout>
        <Card basis="small" background="brandColor" gap="medium">
          <Card.CardTitle>A user</Card.CardTitle>
        </Card>
      </Layout>
    </Grommet>
  );
};

export default userProfile;
