import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import TodoList from "./TodoList";
import NewTodoModal from "./NewTodoModal";
import axios from "axios";
import { API_URL } from "../constants";

class Home extends Component {
    state = {
        viewCompleted: false,
        todos: []
    };

    componentDidMount() {
        this.resetState();
    }

    getTodos = () => {
        axios.get(API_URL).then(res => this.setState({ todos: res.data }));
    };

    resetState = () => {
        this.getTodos();
    };

    render() {
        return (
            <main className="container">
                <h1 className="text-black text-uppercase text-center my-4">Todo app</h1>
                <div className="nav nav-tabs">
                    <span
                        className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
                        onClick={() => this.setState({viewCompleted: true})}
                    >
                    Complete
                    </span>
                    <span
                        className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
                        onClick={() => this.setState({viewCompleted: false})}
                    >
                    Incomplete
                    </span>
                </div>
                <Container style={{ marginTop: "20px"}}>
                    <Row>
                        <Col>
                            <TodoList
                                todos={this.state.todos}
                                resetState={this.resetState}
                                tab={this.state.viewCompleted}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <NewTodoModal create={true} resetState={this.resetState} />
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }
}

export default Home;
