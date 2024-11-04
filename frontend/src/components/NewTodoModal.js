import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewTodoForm from "./NewTodoForm";

class NewTodoModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState( previous => ({
            modal: !previous.modal
        }));
    };

    render() {
        const create = this.props.create;
        var title = "Editing Student";
        var button = <Button onClick={this.toggle}>Edit</Button>
        if (create) {
            title = "Creating New Student";
            button = (
                <Button
                    color="primary"
                    classsName="float-right"
                    onClick={this.toggle}
                    style={{ minWidth: "200px" }}
                >
                Create New
                </Button>
            );
        }
        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

                <ModalBody>
                    <NewTodoForm
                    resetState={this.props.resetState}
                    toggle={this.toggle}
                    todo={this.props.todo}
                    />
                </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default NewTodoModal
