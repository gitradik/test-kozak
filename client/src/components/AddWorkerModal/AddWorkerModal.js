import React from "react";
import styles from './AddWorkerModal.module.sass';
import Modal from "react-bootstrap/Modal";

export default function AddWorkerModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="addWorkerModalTitleId"
            centered
            className={styles.addWorkerModal}
        >
            <Modal.Header className={styles.modalHeader} closeButton>
                <Modal.Title className={styles.modalTitle} id="addWorkerModalTitleId">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.modalBody}>
                { props.component }
            </Modal.Body>
            <Modal.Footer className={styles.modalFooter}>
            </Modal.Footer>
        </Modal>
    );
}