import React, {useMemo} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {apiEndpoint, useGetTrucksCompanyTruckGetTrucksGetQuery, useGetUserCompanyUserGetQuery} from "../../store/api";
import {DateTime} from "luxon";
import {verifyIsTruckOk} from "../../features/trucks/components/TruckFiles";
import {Download, IconWithBackground, DocumentsBlue, Pen} from "../../assets/icons";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {Link} from "react-router-dom";

ChartJS.register(ArcElement);

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

  const goodTrucks = useMemo(() => trucks?.series?.map((truck) => verifyIsTruckOk(truck).isOk).filter(truck => truck).length, [trucks]);

  const pieData = {
    labels: ['Good', 'With issues'],
    weight: 0.1,
    datasets: [
      {
        data: [goodTrucks, (trucks?.number_of_trucks || 0) - (goodTrucks || 0)],
        backgroundColor: [
          '#3F8CD6',
          '#F9BC61',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    rotation: 270,
    circumference: 180,
    legend: {
      display: false
    },
    tooltip: {
      enabled: false
    },
    cutoutPercentage: 95,
    maintainAspectRatio: false,
    responsive: true,
  };

  if (!data) return null;

  return (
    <Container className="cont--fluid pt-5">
      <Card>
        <Card.Body style={{ paddingLeft: 40, paddingRight: 40 }} className="truck">
          <Row>
            <Col className="d-flex flex-row" md={6}>
              <h4>{data.username}</h4>
              <Link to={'/dashboard/settings'}>
                <div style={{ marginLeft: 32 }}>
                  <Pen />
                </div>
              </Link>
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
          <div className="d-flex flex-row align-items-center">
            <IconWithBackground>
              <DocumentsBlue />
            </IconWithBackground>
            <Row className="container-fluid">
              <Col md={6}>
                <div>
                  <p className="mb-0 ml16px body-l">
                    Company insurance
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <a target="_blank" href={`${apiEndpoint}/company/get_company_file`}>
                  <Download />
                </a>
              </Col>
            </Row>
          </div>
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
          <div style={{ height: 300 }}>
            <Doughnut data={pieData} options={options} />
          <div/>
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