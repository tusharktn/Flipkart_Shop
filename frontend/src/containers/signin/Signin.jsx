import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/Input";

function Signin() {
  return (
    <>
      <Layout />
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Input
                label="Email address"
                type="email"
                placeholder="Enter email"
                value=""
                controlId="formBasicEmail"
                onChange={() => {}}
                errorMessage="We'll never share your email with anyone else."
              />
              <Input
                label="Password"
                type="password"
                placeholder="Password"
                value=""
                controlId="formBasicPassword"
                onChange={() => {}}
              />

              <Button variant="primary" type="submit">
                SignIn
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Signin;
