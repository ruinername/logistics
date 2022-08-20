import React from 'react';
import {Button, Container} from "react-bootstrap";
import { useGetTrucksCompanyTruckGetTrucksGetQuery } from "../../store/api";
import Placeholder from "../../features/trucks/components/Placeholder";
import TruckCard from "../../features/trucks/components/TruckCard";
import { ReactComponent as Add } from '../../assets/icons/add-24.svg';
import {Link} from "react-router-dom";

function Trucks() {
  const { data, refetch } = useGetTrucksCompanyTruckGetTrucksGetQuery({ left: 0, right: 100 });

  return (
    <Container className="cont--fluid pt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="m-0">Trucks park</h2>
          {data && data?.number_of_trucks ? (
            <Link to="../add-truck">
              <Button className="btn-normal"><Add /> Add truck</Button>
            </Link>
          ) : null}
        </div>
        {data && !data?.number_of_trucks && <Placeholder />}
        {data?.series && data.series.map((truck) => <TruckCard reloadTrucks={refetch} truck={truck} key={truck.vin} />
        )}
    </Container>
  );
}

export default Trucks;
