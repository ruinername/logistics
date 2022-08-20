import {Button, Modal} from "react-bootstrap";
import React, {useState} from "react";
import {Delete} from "../../../assets/icons";
import {useDeleteTruckByVinCompanyTruckDeleteTruckByVinDeleteMutation} from "../../../store/api";

export const DeleteTruck: React.FC<{ truckVin: string; reloadTrucks: () => void }> = ({truckVin, reloadTrucks}) => {
  const [show, setShow] = useState(false);
  const [deleteTruck] = useDeleteTruckByVinCompanyTruckDeleteTruckByVinDeleteMutation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = () => {
    deleteTruck({ vin: truckVin });
    handleClose();
    reloadTrucks();
  }

  return (
    <>
      <div className="pointer" onClick={handleShow}>
        <Delete />
      </div>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Body>
          <p className="body-l mb-0 text-center gotham">Delete truck?</p>
        </Modal.Body>
        <Modal.Footer className="d-flex flex-row justify-content-between delete-buttons">
          <Button className="btn-modal" variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="btn-modal" variant="primary" onClick={handleDelete}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}