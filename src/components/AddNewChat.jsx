import React from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "../components/AddNewChat.css";

// This Modal help Add a new friend
export function AddNewChat(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      className="AddNewChat"
      style={{
        position: "absolute",
        bottom: "0px",
        padding: "10px 45px 0 45px",
        margin: "0 95px 0 0",
        width: "97%",
        background: "black",
      }}
    >
      <Button
        className="mb-2 btn1 rounded-pill border border-dark button_slide slide_right"
        onClick={handleShow}
      >
        <div id="btnText1">Add New Friend</div>
      </Button>
      <Modal className="modal1" show={show} onHide={handleClose}>
        <Modal.Header className="modal2">
          <Modal.Title> Add New Friend </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal2">
          <Form.Group>
            <Form.Control
              required
              className="modal3"
              id="addPublicKey"
              size="text"
              type="text"
              placeholder="Enter Friends Public Key"
            />
            <br />
            <Form.Control
              required
              className="modal3"
              id="addName"
              size="text"
              type="text"
              placeholder="Name"
            />
            <br />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="modal2">
          <Button
            onClick={handleClose}
            className="btn2 rounded-pill border border-dark"
          >
            Close
          </Button>
          <Button
            className="btn1 rounded-pill border border-dark"
            onClick={() => {
              props.addHandler(
                document.getElementById("addName").value,
                document.getElementById("addPublicKey").value
              );
              handleClose();
            }}
          >
            Add Friend
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
