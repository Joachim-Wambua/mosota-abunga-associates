import { Modal, Button } from "@mui/material";

const EmailStatusModal = ({ open, onClose, success }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="email-status-modal"
      aria-describedby="email-status-modal-description"
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#fff",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* <h2 id="email-status-modal">Status</h2> */}
        <p id="email-status-modal-description">
          {success ? "Email sent successfully!" : "Failed to send email."}
        </p>
        <Button variant="outlined" color="#000" onClick={onClose}>Close</Button>
      </div>
    </Modal>
  );
};

export default EmailStatusModal;
