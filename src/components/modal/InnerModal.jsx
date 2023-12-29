import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import bd from "/bangladesh.png";
import us from "/us.png";

const InnerModal = ({ show, handleClose, innerModalTitle, country }) => {
  const [showSecondaryModal, setShowSecondaryModal] = useState(false);
  const [selectedSingleCountry, setSelectedSingleCountry] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSecondaryModal = (country) => {
    setSelectedSingleCountry(country);
    setShowSecondaryModal(true);
  };

  const handleCloseSecondaryModal = () => {
    setShowSecondaryModal(false);
    setSelectedSingleCountry("");
  };

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const filteredCountries = country
    ?.filter((singleCountry) =>
      singleCountry.country?.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    .slice(indexOfFirstCountry, indexOfLastCountry);

  const totalPages = Math.ceil((country?.length || 0) / countriesPerPage);

  return (
    <Modal
      className="modal-infinity-scroll overflow-auto"
      show={show}
      onHide={handleClose}
    >
      <Modal.Header>
        <Modal.Title>{innerModalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="overflow-auto">
        <div className="d-flex mb-3">
          <input
            type="text"
            placeholder="Search by country name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control me-2"
          />
          <button className="btn btn-primary" onClick={() => setSearchTerm("")}>
            Clear
          </button>
        </div>
        <div className="all-contries mx-auto">
          {filteredCountries?.map((singleCountry, index) => (
            <Card
              onClick={() => handleSecondaryModal(singleCountry)}
              className="btn btn-secondary m-2"
              key={index}
              style={{ width: "13.5rem" }}
            >
              <Card.Img variant="top" src={singleCountry.phone.startsWith("+1")?us:bd} />
              <Card.Body>
                <Card.Title>{singleCountry?.country?.name}</Card.Title>
                <Card.Text>{singleCountry.phone} ➜</Card.Text>
                <Button variant="primary">Go for Details</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer className="">
        <ul className="pagination mx-auto">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <li
                key={page}
                className={`page-item ${currentPage === page ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              </li>
            )
          )}
        </ul>
        <button className="btn-cancel" onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default InnerModal;
