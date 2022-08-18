import React from 'react';
import {Container} from "react-bootstrap";
import {Employee, Truck} from "../../../assets/icons";

const formConstructor = {
  steps: [
    {
      stepId: 'truck',
      title: 'Truck',
      icon: Truck,
    },
    {
      stepId: 'insurance',
      title: 'Insurance',
      icon: Truck,
    },
    {
      stepId: 'permit',
      title: 'Permit',
      icon: Employee,
    }
  ]
}

const TruckForm = () => {
  return (
    <div className="background-white h-100">
      <Container className="d-flex pt-5 text-center h-100">
        <div className="steps">
          {formConstructor.steps.map(step => (
            <div key={step.stepId} className="step">
              <div className="step-icon">
                  <step.icon />
              </div>
              <div className="step-title">{step.title}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default TruckForm;