import React, {useEffect} from 'react';
import { Button, Form, Container, Row, Col, Alert } from "react-bootstrap";
import { useSignInAuthSignInPostMutation } from "../store/api";

function SignIn() {
  const [mail, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [signIn, result] = useSignInAuthSignInPostMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn({ oAuth2PasswordRequestForm: { mail, password } });
  }

  useEffect(() => {
    if (result.isSuccess) {
        window.location.href = '/dashboard';
    }
  } , [result.isSuccess]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            {result.isError && <Alert variant="danger">{(result.error as any)?.data?.detail as string}</Alert>}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control value={mail} onChange={handleEmailChange} type="email" placeholder="Enter e-mail" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control value={password} onChange={handlePasswordChange} type="password" placeholder="Enter password" />
              <Button className="ml-auto" variant="link">
               Forget password
              </Button>
            </Form.Group>
            <div className="d-grid gap-2">
              <Button disabled={result.isLoading} className="btn-normal" variant="primary" type="submit">
                Sign in
              </Button>
            </div>
          </Form>
        </Col>
        <Col md={6}></Col>
      </Row>
    </Container>
  );
}

export default SignIn;
