import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { useAuth } from "../../firebase/firebase.util";

const InviteCodeModal = ({ showModal, setShowModal }) => {
  const auth = useAuth();
  const [inviteCode, setInviteCode] = useState(null);
  const [verificationError, setVerificationError] = useState(false);

  const handleModalCancel = () => {
    auth.signOut();
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    auth.verifyInviteCode(inviteCode).then((success) => {
      setVerificationError(!success);
    });
  };

  console.log(auth.state.dbUser);

  return (
    <Modal
      show={showModal && !auth.state.dbUser}
      onHide={handleModalCancel}
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Verification Time!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Alert variant="danger" show={verificationError}>
          That code didn't work.
        </Alert>
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
