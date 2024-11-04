import React, { Component } from "react";
import { Table } from "reactstrap";
import NewTodoModal from "./NewTodoModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";

class TodoList extends Component {
    render() {
        var todos = this.props.todos.filter((item) => item.completed==this.props.tab);
        console.log(todos);
        if (!todos || todos.length <=0) {
            return (
                <Table dark>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="4" align="center">
                                <b>Nothing to see here!</b>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            );
        } else {
            return (
                <Table dark>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Completed</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(todo =>
                            <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{todo.completed ? "True" : "False"}</td>
                                <td align="center">
                                    <NewTodoModal
                                        create={false}
                                        todo={todo}
                                        resetState={this.props.resetState}
                                    />
                                    &nbsp;&nbsp;
                                    <ConfirmRemovalModal
                                        id={todo.id}
                                        resetState={this.props.resetState}
                                    />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            );
        }
    }
}

export default TodoList;
