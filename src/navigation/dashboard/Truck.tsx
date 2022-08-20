import React from 'react';
import {Container} from "react-bootstrap";
import {
  useGetTruckByVinCompanyTruckGetTruckByVinGetQuery,
} from "../../store/api";
import TruckCard from "../../features/trucks/components/TruckCard";
import {Link, useParams} from "react-router-dom";

function Truck() {
  const { vin } = useParams();
  // @ts-ignore
  const { data, refetch } = useGetTruckByVinCompanyTruckGetTruckByVinGetQuery({ vin });

  return (
    <Container className="cont--fluid pt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="m-0">Truck</h2>
      </div>
      {data && <TruckCard reloadTrucks={refetch} truck={data} key={data.vin} />}
    </Container>
  );
}

export default Truck;
