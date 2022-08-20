import React, {useCallback} from 'react';
import {Alert, Button, Card, Col, Form, Row} from "react-bootstrap";
import { Truck } from "../../../store/api";
import { ReactComponent as FolderOpenFill } from '../../../assets/icons/folder-open-fill.svg';
import {ChevronDown, Documents, IconWithBackground, Pen} from "../../../assets/icons";
import TruckFiles, {truckFiles} from "./TruckFiles";
import {DeleteTruck} from "./DeleteTruck";
import {Link} from "react-router-dom";

export interface TruckCardProps {
  truck: Truck;
  reloadTrucks: () => void;
}

const TruckCard: React.FC<TruckCardProps> = ({ truck, reloadTrucks }) => {
  const [isDocumentsOpened, setIsDocumentsOpened] = React.useState(false);

  const handleDocumentsClick = useCallback(() => {
    setIsDocumentsOpened(!isDocumentsOpened);
  }, [isDocumentsOpened]);

  return (
    <Card>
      <Card.Body className="truck">
        <div className="card-padding-h">
          <Card.Subtitle>#{truck.truck_number}</Card.Subtitle>
          <Row>
            <Col md={4}>
              <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <FolderOpenFill />
                  <Card.Title>{truck.driver_name}</Card.Title>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex flex-row align-items-center">
                <IconWithBackground>
                  <Documents />
                </IconWithBackground>
                <p className="mb-0 ml16px body-m">
                  {Object.keys(truckFiles).reduce((acc, file) => (truck as any)[file] ? acc + 1 : acc, 0)}/10 documents
                </p>
              </div>
            </Col>
            <Col md={2} className="d-flex flex-row align-items-center justify-content-end">
              <Link to={'../edit-truck/' + truck.vin}>
                <div style={{ marginRight: 32 }}>
                  <Pen />
                </div>
              </Link>
              <DeleteTruck reloadTrucks={reloadTrucks} truckVin={truck.vin as string} />
            </Col>
            <Col md={2} className="d-flex flex-row justify-content-end">
              <Button onClick={handleDocumentsClick} variant="link">
                <span className={`chevron chevron-${isDocumentsOpened ? 'up' : 'down'}`}>
                  <ChevronDown />
                </span>
              </Button>
            </Col>
          </Row>
        </div>
        {isDocumentsOpened && (
            <TruckFiles truck={truck} />
        )}
      </Card.Body>
    </Card>
  );
}

export default TruckCard;