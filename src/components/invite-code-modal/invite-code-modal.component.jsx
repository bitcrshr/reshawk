import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useAuth } from "../../firebase/firebase.util";
import { verifyInviteCode } from "../../firebase/invite-manager";

const InviteCodeModal = ({ showModal, setShowModal }) => {
  const auth = useAuth();
  const [inviteCode, setInviteCode] = useState(null);

  const handleModalCancel = () => {
    auth.signOut();
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    verifyInviteCode(inviteCode, auth.state.user);
  };

  return (
    <Modal
      show={showModal}
      onHide={handleModalCancel}
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Verification Time!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Welcome to reshawk! We've been expecting you. All you need to do to
          get started is enter the invite code you were sent!
        </p>
        <Form id="invite-form" onSubmit={(event) => handleSubmit(event)}>
          <Form.Control
            type="text"
            placeholder="Invite Code"
            onChange={(event) => setInviteCode(event.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleModalCancel}>
          Nevermind!
        </Button>
        <Button variant="primary" type="submit" form="invite-form">
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InviteCodeModal;
