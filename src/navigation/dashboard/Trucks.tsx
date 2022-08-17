import React from 'react';
import { Container } from "react-bootstrap";
import { useGetTrucksCompanyTruckGetTrucksGetQuery } from "../../store/api";
import Placeholder from "../../features/trucks/components/Placeholder";

function Trucks() {
  const { data } = useGetTrucksCompanyTruckGetTrucksGetQuery({ left: 0, right: 100 });

  return (
    <Container className="cont--fluid pt-5">
        <h2>Trucks park</h2>
        {!data?.number_of_trucks && <Placeholder />}
    </Container>
  );
}

export default Trucks;
