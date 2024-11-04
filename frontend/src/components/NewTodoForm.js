import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewTodoForm extends React.Component {
    state = {
        id: 0,
        title: "",
        description: "",
        completed: false
    };

    componentDidMount() {
        if (this.props.todo) {
            const { id, title, description, completed } = this.props.todo;
            this.setState({ id, title, description, completed});
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    };

    createTodo = e => {
        e.preventDefault();
        axios.post(API_URL, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    editTodo = e => {
      e.preventDefault();
      axios.put(API_URL + this.state.id, this.state).then(() => {
          this.props.resetState();
          this.props.toggle();
      });
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    render () {
        return (
            <Form onSubmit={this.props.todo ? this.editTodo : this.createTodo}>
                <FormGroup>
                    <Label for="title">Title:</Label>
                    <Input
                        type="text"
                        name="title"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.title)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description:</Label>
                    <Input
                        type="text"
                        name="description"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.description)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label check>
                        <Input
                            type="checkbox"
                            name="completed"
                            defaultChecked={this.state.completed}
                            value={this.defaultIfEmpty(!this.state.completed)}
                            onChange={this.onChange}
                        />
                        Completed
                    </Label>
                </FormGroup>
                <Button>Send</Button>
            </Form>
        );
    }
}

export default NewTodoForm;
