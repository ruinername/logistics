import React from 'react';
import { Button, Form, Container, Row, Col } from "react-bootstrap";

function UI() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className="btn-small" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>2 of 2</Col>
      </Row>
    </Container>
  );
}

export default UI;
