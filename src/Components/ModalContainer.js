import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const ModalContainer = ({ title, onClose, children }) => {
  const handleCloseClick = (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the parent div
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}> {/* Prevent clicks on the modal content from closing */}
        <div className="modal-header">
          <h2>{title}</h2>
          <div onClick={handleCloseClick}>
            <CloseIcon />
          </div>
        </div>
        <div className="modal-body">
        {children}</div>
      </div>
    </div>
  );
};

export default ModalContainer;
