import Link from "next/link";
import Layout from "./layout";
import fetch from "isomorphic-unfetch";
import Register from "../register";
import AddItem from "../itemForm";
import Items from "../items";
import UserItems from "../useritems";
import Index from "../index";
import Login from "../login";
import Logout from "../logout";
import { Component } from "react";
import {
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
import { VerticalMenu } from "grommet-controls";

const linkStyle = {
  marginRight: 15,
  textDecoration: "none"
};

const PostLink = props => (
  <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
    <Anchor color="neutral-2">{props.title}</Anchor>
  </Link>
);

const Header = () => (
  <Grommet theme={dark}>
    <Box fit="cover" pad="small">
      {/* TABS OPTION */}
      {/* <Tabs>
            <Tab title="HOME" />
            <Tab title="ALL ITEMS">
                <Items />
            </Tab>

            <Tab title="ADD ITEM">
                <AddItem />
            </Tab>
            <Tab title="LOGIN">
                <Login />
            </Tab>
            <Tab title="REGISTER">
                <Register />
            </Tab>
            <Tab title="USER ITEMS">
                <UserItems />
            </Tab>
        </Tabs> */}

      <VerticalMenu
        pad="xxsmall"
        activeItem={{ id: "home" }}
        items={[
          {
            id: "main",
            label: "NAVIGATION",

            items: [
              {
                id: "home",
                label: "HOME",
                href: "/"
              },
              {
                id: "register",
                label: "REGISTER",
                href: "/register"
              },
              {
                id: "login",
                label: "LOGIN",
                href: "/login"
              }
            ]
          },
          {
            id: "items",
            label: "ITEMS",
            items: [
              { id: "allitems", label: "ALL ITEMS", href: "/items" },
              { id: "add", label: "ADD ITEM", href: "/itemform" }
            ]
          }
        ]}
      />
      <Logout />
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css?family=Roboto");

          h1 {
            font-family: "Roboto", sans-serif;
            font-weight: bold;
          }

          body {
            font-family: "Roboto", sans-serif;
          }
          ul {
            background-color: #ddd;
            margin: 5px;
          }
        `}
      </style>
    </Box>
  </Grommet>
);

export default Header;
