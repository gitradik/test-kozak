import React from "react";
import styles from './AddWorkerModal.module.sass';
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

export default function AddWorkerModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="addWorkerModalTitleId"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="addWorkerModalTitleId">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={ props.onHide }>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}