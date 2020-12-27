import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/Input";

function Signup() {
  return (
    <>
      <Layout />
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    type="text"
                    placeholder="Enter your first name"
                    value=""
                    onChange={() => {}}
                    controlId="formBasicEmail"
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    type="text"
                    placeholder="Enter your last name"
                    value=""
                    controlId="formBasicEmail"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
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
                SignUp
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Signup;
