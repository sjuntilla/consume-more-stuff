import Layout from './components/layout';
import React from "react";
import { Component } from "react";
import { Box, Form, FormField, Select, Button } from "grommet";
//should only show when user is logged in

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            price: "",
            category: "",
            // categories: ["WELLNESS", "OFFICE", "ACCESSORIES"]
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
                name: this.state.name.toLowerCase(),
                description: this.state.description.toLowerCase(),
                price: this.state.price,
                category: this.state.category.toLowerCase()
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
            <Layout>
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
                    <Select
                        placeholder="Category"
                        onChange={this.handleChange}
                        value={this.state.category}
                        options={["WELLNESS", "OFFICE", "ACCESSORIES"]}
                        onChange={({ option }) => this.setState({ category: option })}
                        name="category"
                        required={true}
                    />
                    {/* <Select
                        multiple
                        closeOnChange={false}
                        placeholder="select an option..."
                        selected={selected}
                        options={options}
                        dropHeight="medium"
                        onClose={() =>
                            this.setState({
                                options: options.sort((p1, p2) => {
                                    const p1Exists = selected.includes(p1);
                                    const p2Exists = selected.includes(p2);

                                    if (!p1Exists && p2Exists) {
                                        return 1;
                                    }
                                    if (p1Exists && !p2Exists) {
                                        return -1;
                                    }
                                    return p1.localeCompare(p2, undefined, {
                                        numeric: true,
                                        sensitivity: "base"
                                    });
                                })
                            })
                        }
                        onChange={({ selected: nextSelected }) => {
                            this.setState({ selected: nextSelected });
                        }}
                    >
                        {(option, index) => (
                            <Option
                                value={option}
                                selected={selected.indexOf(index) !== -1}
                            />
                        )} */}

                    <Button type="submit" label="AddItem" primary={true} />

                </Form>
            </Layout>
        );
    }
}
export default AddItem;