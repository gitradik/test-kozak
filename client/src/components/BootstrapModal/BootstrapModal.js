import React from "react";
import styles from './BootstrapModal.module.sass';
import './BootstrapModal.module.sass';
import Modal from "react-bootstrap/Modal";

export default function BootstrapModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="addWorkerModalTitleId"
            centered
            className={styles.addWorkerModal + " add-worker-modal"}
        >
            <Modal.Header className={styles.modalHeader} closeButton>
                <Modal.Title className={styles.modalTitle} id="addWorkerModalTitleId">
                   <i className={ props.fontaw }/>{ props.title }
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