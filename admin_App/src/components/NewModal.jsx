import React from "react";
import { Button, Modal } from "react-bootstrap";
function NewModal(props) {
  return (
    <Modal size={props.size} show={props.show} onHide={props.hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>{props.modalTitle}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{props.children}</Modal.Body>

      <Modal.Footer>
        {props.display === "false" ? null : (
          <Button variant="primary" onClick={props.handleClose}>
            Add
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default NewModal;
