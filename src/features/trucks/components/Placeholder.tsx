import React from 'react';
import {Button, Container} from "react-bootstrap";

const Placeholder = () => {
  return (
    <Container className="d-flex justify-content-center pt-5 text-center h-100">
      <div>
        <h2>It's empty here</h2>
        <p className="placeholder-description">Add your first truck</p>
        <Button className="btn-normal d-inline">Add truck</Button>
      </div>
    </Container>
  );
}

export default Placeholder;