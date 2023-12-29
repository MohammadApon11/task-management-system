import React from "react";
import { Modal } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import bd from "/bangladesh.png";
import us from "/us.png";

const SecondaryModal = ({ show, handleClose, selectedSingleCountry }) => {
  const { phone, country } = selectedSingleCountry || {};
  return (
    <Modal className={`${phone?.startsWith("+8") ? "bg-success" : "bg-danger"} `} show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Country Details Modal 📝 (C)</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card className="btn btn-secondary m-2" style={{ width: "100%" }}>
          <Card.Img variant="top" src={phone?.startsWith("+1") ? us : bd} />
          <Card.Body>
            <Card.Title>{country?.name}</Card.Title>
            <Card.Text>{phone}</Card.Text>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn-cancel" onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default SecondaryModal;
