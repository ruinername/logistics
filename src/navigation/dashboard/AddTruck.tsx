import React from 'react';
import TruckForm from "../../features/truck/components/TruckForm";

function AddTruck() {

  return (
    <TruckForm title="Adding a truck" handleSave={console.log} />
  );
}

export default AddTruck;
