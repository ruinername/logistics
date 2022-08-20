import React from 'react';
import {Card, Container} from "react-bootstrap";
import {useGetUserCompanyUserGetQuery} from "../../store/api";

function Home() {
  const { data, refetch } = useGetUserCompanyUserGetQuery();

  if (!data) return null;

  return (
    <Container className="cont--fluid pt-5">
      <Card>
        <Card.Body style={{ paddingLeft: 40, paddingRight: 40 }} className="truck">
          <h4>{data.username}</h4>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;