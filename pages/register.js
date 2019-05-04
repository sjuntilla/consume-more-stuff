import Layout from './components/layout';
import React from "react";
import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,

  Select
} from "grommet";

export default function Register () {
   return (
       <Layout>
    <Form onSubmit={({ value }) => console.log("Submit: ", value)}>
      <FormField name="fname" label="First Name" required={true} />
      <FormField name="lname" label="Last Name" required={true} />
      <FormField name="email" label="E-mail" required={true} />
      <FormField name="username" label="Username" required={true} />
      <FormField name="password" label="Password" required={true} />
    
      <Button type="submit" label="Submit" primary={true} />
    </Form></Layout>
);
    }



