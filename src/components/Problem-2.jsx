import React, { useState } from "react";
import ContactsModal from "./modal/ContactsModal";

const Problem2 = () => {
  const [title, setTitle] = useState("");
  const [showContactsModal, setShowContactsModal] = useState(false);

  const handleContactsModal = (title) => {
    setShowContactsModal(true);
    setTitle(title);
  };

  const handleCloseContactsModal = () => {
    setShowContactsModal(false);
    setTitle("");
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={() => handleContactsModal("All Contacts")}
            className="btn btn-lg btn-outline-primary"
          >
            All Contacts
          </button>

          <button
            onClick={() => handleContactsModal("US Contacts")}
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
        </div>

        <ContactsModal
          show={showContactsModal}
          handleClose={handleCloseContactsModal}
          title={title}
        />
      </div>
    </div>
  );
};

export default Problem2;
