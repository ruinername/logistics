import {Modal} from "react-bootstrap";
import React, {useState} from "react";
import {Cancel, IconWithBackground, QR} from "../../../assets/icons";
import QRCode from "react-qr-code";

const URI = `https://docksys.co/dashboard/truck/`;

export const TruckQR: React.FC<{ truckVin: string; }> = ({truckVin}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow} className="truck-desktop-qr-margin pointer">
        <IconWithBackground>
          <QR />
        </IconWithBackground>
      </div>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Body>
          <div style={{ marginBottom: 32 }} className="d-flex flex-row justify-content-between align-items-center">
            <h4 className="mb-0 gotham">QR-code</h4>
            <div onClick={handleClose} className="pointer">
              <Cancel />
            </div>
          </div>
          <div className="qr-container">
            <QRCode size={256} value={URI + truckVin} bgColor="#F0F6FC" />
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex flex-row justify-content-between delete-buttons">
        </Modal.Footer>
      </Modal>
    </>
  );
}