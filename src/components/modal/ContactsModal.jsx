import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import InnerModal from "./InnerModal";
import useAllContacts from "../../hooks/useAllContacts";
import useUSContacts from "../../hooks/useUSContacts";
import {
  fetchAllContacts,
  fetchUSContacts,
} from "../../redux/features/contacts/contactsSlice";
import { useDispatch, useSelector } from "react-redux";

const ContactsModal = ({ show, handleClose, title }) => {
  const [showEven, setShowEven] = useState(false);
  const [showInnerModal, setShowInnerModal] = useState(false);
  const [innerModalTitle, setInnerModalTitle] = useState("");
  const [country, setCountry] = useState([]);
  // data fecth with hooks start
  // const { allContacts } = useAllContacts();
  // const { usContacts } = useUSContacts();
  // data fecth with hooks start

  // redux start
  const { allContacts, usContacts, loadingAll, loadingUS, errorAll, errorUS } =
    useSelector((state) => state.contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the actions to fetch contacts when the component mounts
    dispatch(fetchAllContacts());
    dispatch(fetchUSContacts());
  }, [dispatch]);

  // Render loading state or error message if applicable
  if (loadingAll || loadingUS) {
    return <div className="text-center mt-5 display-4">Loading...</div>;
  }

  if (errorAll || errorUS) {
    return <div className="text-center display-4">Error: {errorAll || errorUS}</div>;
  }
  // redux end
  
  const handleCheckboxChange = (e) => {
    setShowEven(e.target.checked);
  };

  const renderNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= 10; i++) {
      if (!showEven || (showEven && i % 2 === 0)) {
        numbers.push(<p key={i}>{i}</p>);
      }
    }
    return numbers;
  };

  const handleInnerModal = (innerModalTitle) => {
    let selectedContacts = [];

    if (innerModalTitle === "All Countries Contacts Here 🌐 (A)") {
      selectedContacts = allContacts.results;
    } else {
      selectedContacts = usContacts.results;
    }

    if (showEven) {
      selectedContacts = selectedContacts?.filter(
        (contact, index) => (index + 1) % 2 === 0
      );
    }

    setCountry(selectedContacts);
    setShowInnerModal(true);
    setInnerModalTitle(innerModalTitle);
  };

  const handleCloseInnerModal = () => {
    setShowInnerModal(false);
    setInnerModalTitle("");
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>
          Success is a journey 💎 {title === "All Contacts" ? "A" : "B"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-between">
          <button
            onClick={() =>
              handleInnerModal("All Countries Contacts Here 🌐 (A)")
            }
            className="btn-a"
          >
            <NavLink
              className="text-decoration-none text-white"
              to="/problem-2/all-contact"
            >
              ALL Contacts
            </NavLink>
          </button>

          <button
            className="btn-b"
            onClick={() => handleInnerModal("Only Us's Contacts Here 🚩 (B)")}
          >
            <NavLink
              className="text-decoration-none text-white"
              to="/problem-2/us-contact"
            >
              Us Contacts
            </NavLink>
          </button>
        </div>
        <div className="form-check mt-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="onlyEvenCheckbox"
            checked={showEven}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="onlyEvenCheckbox">
            Only Even
          </label>
          <div className="d-flex gap-3" id="numbers">
            {renderNumbers()}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn-cancel" onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
      <InnerModal
        show={showInnerModal}
        handleClose={handleCloseInnerModal}
        innerModalTitle={innerModalTitle}
        country={country}
      />
    </Modal>
  );
};

export default ContactsModal;
