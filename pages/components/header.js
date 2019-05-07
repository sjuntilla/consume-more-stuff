import Link from "next/link";
import Register from "../register";
import Login from "../login";
import { Component } from "react";
import {
  Heading,
  Grommet,
  Anchor,
  Box,
  Accordion,
  AccordionPanel,
  DropButton,
  Tabs,
  Tab,
  Layer,
  Button,
  FormField,
  TextInput,
  Select,
  TextArea,
  onClickOutside
} from "grommet";
import { dark } from "grommet/themes";

const linkStyle = {
  marginRight: 15,
  textDecoration: "none"
};

const PostLink = props => (
  <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
    <Anchor color="neutral-2">{props.title}</Anchor>
  </Link>
);

class CornerLayer extends Component {
  state = {};

  onOpen = () => this.setState({ open: true });

  onClose = () => this.setState({ open: undefined });

  render() {
    const { open } = this.state;
    return (
      <Grommet theme={dark} full>
        <Box fill align="center" justify="center">
          <Button
            label={
              <Text>
                <strong>Add Corner Layer</strong>
              </Text>
            }
            onClick={this.onOpen}
            plain
          />
        </Box>
        {open && (
          <Layer position="top-right">
            <Box height="small" overflow="auto">
              <Box pad="xlarge">Corner top-right position</Box>
            </Box>
          </Layer>
        )}
      </Grommet>
    );
  }
}

class FormLayer extends Component {
  state = { open: false, select: "" };

  onOpen = () => this.setState({ open: true });

  onClose = () => {
    this.setState({ open: undefined });
  };

  render() {
    const { open, select } = this.state;
    return (
      <Tab title="LOGIN" onClick={this.onOpen}>
        {open && (
          <Layer
            position="right"
            full="vertical"
            modal
            onClickOutside={this.onClose}
            onEsc={this.onClose}
          >
            <Box
              as="form"
              fill="vertical"
              overflow="auto"
              width="medium"
              pad="medium"
              onSubmit={this.onClose}
            >
              <Box flex={false} direction="row" justify="between">
                <Heading level={2} margin="none">
                  Add
                </Heading>
                <Button onClick={this.onClose} />
              </Box>
              <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
                <FormField label="First">
                  <TextInput />
                </FormField>
                <FormField label="Third">
                  <TextArea />
                </FormField>
              </Box>
              <Box flex={false} as="footer" align="start">
                <Button
                  type="submit"
                  label="Submit"
                  onClick={this.onClose}
                  primary
                />
              </Box>
            </Box>
          </Layer>
        )}
      </Tab>
    );
  }
}

const Header = () => (
  <Grommet theme={dark}>
    <Box direction="row-responsive" fit="cover" pad="small">
      {/* TABS OPTION */}
      <Tabs>
        <Tab title="HOME" />
        <Tab title="SHOP">
          <CornerLayer />
        </Tab>
        <Tab title="LOGIN">
          <Login />
        </Tab>
        <Tab title="REGISTER">
          <Register />
        </Tab>
      </Tabs>
    </Box>
  </Grommet>
);

export default Header;
