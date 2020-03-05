import React from "react";
import {Button, Modal} from "react-bootstrap";

function ModalComponent(props){

    return(
        <>
            <Modal show={props.show} onHide={props.handleModalClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.body}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={props.handleModalClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalComponent;