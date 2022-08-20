import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {useGetTrucksCompanyTruckGetTrucksGetQuery, useGetUserCompanyUserGetQuery} from "../../store/api";
import {DateTime} from "luxon";
import {verifyIsTruckOk} from "../../features/trucks/components/TruckFiles";

const datesMap = [
  {
    name: 'Commercial general liability',
    key: 'commercial_general_liabilit',
  },
  {
    name: 'Automobile liability',
    key: 'automobile_liability',
  },
  {
    name: 'Workers compensation',
    key: 'workers_compensation',
  },
  {
    name: 'Comp/Collision',
    key: 'comp_collision',
  },
  {
    name: 'Cargo',
    key: 'cargo',
  },
]

function Home() {
  const { data, refetch } = useGetUserCompanyUserGetQuery();
  const { data: trucks } = useGetTrucksCompanyTruckGetTrucksGetQuery({ left: 0, right: 100 });

  if (!data) return null;

  return (
    <Container className="cont--fluid pt-5">
      <Card>
        <Card.Body style={{ paddingLeft: 40, paddingRight: 40 }} className="truck">
          <Row>
            <Col md={6}>
              <h4>{data.username}</h4>
            </Col>
            <Col md={5}>
              {datesMap.map(date => {
                // @ts-ignore
                const d = data[date.key];
                if (!d) return null;
                return (
                  <div style={{ marginBottom: 8 }} className="d-flex justify-content-between">
                    <div className="body-m text-secondary">
                      {date.name}
                    </div>
                    <div className="body-m">
                      {DateTime.fromISO(d).toFormat('MM / dd / yyyy')}
                    </div>
                  </div>
                )
              })}
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {trucks && <Card>
        <Card.Body style={{paddingLeft: 40, paddingRight: 40}} className="truck">
          <div className="d-flex justify-content-between">
            <h4 className="mb-0">Status</h4>
            <div className="d-flex">
              <div style={{marginRight: 8}} className={`status body-m text-primary`}>
                status
              </div>
              <div className={`status body-m text-primary problem`}>
                status
              </div>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <h1>{trucks?.series?.map((truck) => verifyIsTruckOk(truck).isOk).filter(truck => truck).length} trucks</h1>
            <h2 className="text-neutral">from {trucks.number_of_trucks}</h2>
          </div>
        </Card.Body>
      </Card>}
    </Container>
  );
}

export default Home;