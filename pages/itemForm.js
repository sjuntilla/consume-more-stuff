import Layout from './components/layout';
import React from "react";
import { Component } from "react";
import { Box, Form, FormField, Select, Button, Layer, Grommet } from "grommet";
//should only show when user is logged in

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            price: "",
            category: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("-----> ITEM STATE", this.state);
        fetch("http://localhost:8080/api/items", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                description: this.state.description,
                price: this.state.price,
                category: this.state.category
            })
        })
            .then(() => {
                console.log("ADDED ITEM TOOOOOO ITEM LIST")
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render() {
        return (
            <Layer
                position="right"
                width="large"
                full="vertical"
                modal={false}
                animate="true"
                onClickOutside={this.onClose}
                onEsc={this.onClose}
            >
                <Box pad="large">
                    <Form onSubmit={this.handleSubmit}>
                        <FormField
                            onChange={this.handleChange}
                            name="name"
                            label="Product Name"
                            required={true}
                        />
                        <FormField
                            onChange={this.handleChange}
                            name="description"
                            label="Product Description"
                            required={true}
                        />
                        <FormField
                            onChange={this.handleChange}
                            name="price"
                            label="Product Price"
                            required={true}
                        />
                        <FormField
                            onChange={this.handleChange}
                            name="category"
                            label="Category"
                            required={true}
                        />
                        <Button type="submit" label="Add Item" primary={true} />
                    </Form>
                </Box>
            </Layer>

        );
    }
}
export default AddItem;