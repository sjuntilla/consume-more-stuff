import Layout from "./components/layout";
import React from "react";
import { Component } from "react";
import { Redirect } from "react-router";
import { Box, Button, CheckBox, Form, FormField, Select, Layer } from "grommet";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("STAATEE", this.state);
        fetch("http://localhost:8080/api/login",
            {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            })
            .then((res) => {
                return res.json()
                // console.log("LOGGED INNNNNN");
            })
            .then((data) => {
                console.log(data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { isAuthenticated } = this.props;
        if (isAuthenticated) {
            return <Redirect to='/items' />
        }

        return (
            <Layer
                position="right"
                width="large"
                full="vertical"
                modal={false}
                animate={true}
                onClickOutside={this.onClose}
                onEsc={this.onClose}
            >
                <Box pad="large">
                    <Form onSubmit={this.handleSubmit} >
                        <FormField onChange={this.handleChange}
                            name="email"
                            label="email"
                            required={true}
                        />
                        <FormField onChange={this.handleChange}
                            type="password"
                            name="password"
                            label="password"
                            required={true}
                        />
                        <Button type="submit" label="Sign In" primary={true}
                        />

                    </Form>
                </Box>
            </Layer>
        )
    }
}

export default Login;
