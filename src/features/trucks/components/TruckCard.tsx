import React, {useCallback} from 'react';
import {Button, Card} from "react-bootstrap";
import { Truck } from "../../../store/api";
import { ReactComponent as FolderOpenFill } from '../../../assets/icons/folder-open-fill.svg';
import { ChevronDown } from "../../../assets/icons";
import TruckFiles from "./TruckFiles";

export interface TruckCardProps {
  truck: Truck;
}

const TruckCard: React.FC<TruckCardProps> = ({ truck }) => {
  const [isDocumentsOpened, setIsDocumentsOpened] = React.useState(false);

  const handleDocumentsClick = useCallback(() => {
    setIsDocumentsOpened(!isDocumentsOpened);
  }, [isDocumentsOpened]);

  return (
    <Card>
      <Card.Body className="truck">
        <div className="card-padding-h">
          <Card.Subtitle>#{truck.truck_number}</Card.Subtitle>
          <div className="d-flex flex-row justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <FolderOpenFill />
              <Card.Title>VIN: {truck.vin}</Card.Title>
            </div>
            <Button onClick={handleDocumentsClick} variant="link">
              <span className={`chevron chevron-${isDocumentsOpened ? 'up' : 'down'}`}>
                <ChevronDown />
              </span>
            </Button>
          </div>
        </div>
        {isDocumentsOpened && (
            <TruckFiles truck={truck} />
        )}
      </Card.Body>
    </Card>
  );
}

export default TruckCard;