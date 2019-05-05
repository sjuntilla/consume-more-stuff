// import Layout from './components/layout';
// import React from "react";
// import { Component } from "react";
// import fetch from 'isomorphic-unfetch';

// import { Box, Button, CheckBox, Form, FormField, Select } from "grommet";

// //should only show when user is logged in
// class NewItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       description: "",
//       price: "",
//       category: ""
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//  handleSubmit(e) {
//    e.preventDefault();
//    fetch("http://localhost:8080/api/items", {
//      method: "POST",
//      headers: {
//        "Accept": "application/json",
//        "Content-Type": "application/json"
//      },
//      body: JSON.stringify({
//        name: this.state.name,
//        description: this.state.description,
//        price: this.state.price,
//        category: this.state.category
//      })
//    })
//    .then(() => {
//      console.log("added to database")
//    })
//    .catch(err => {
//      console.log(err);
//    })
//  }

//  handleChange = e => {
//    this.setState({
//      [e.target.name]: e.target.value
//    });
//  };

//  render(){

//     return (
//         <Form onSubmit={this.handleSubmit}>
//         <FormField
//           onChange={this.handleChange}
//           name="name"
//           label="Item Name"
//           required={true}
//         />
//         <FormField
//           onChange={this.handleChange}
//           name="description"
//           label="Description"
//           required={true}
//         />
//         <FormField
//           onChange={this.handleChange}
//           name="price"
//           label="Price"
//           required={true}
//         />
//         <FormField
//           onChange={this.handleChange}
//           name="category"
//           label="category"
//           required={true}
//         />
        
//         <Button type="submit" label="Add Item" primary={true} />
//       </Form>
//     );
// }
// }

// export default NewItem;