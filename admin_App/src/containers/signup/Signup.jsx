import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/Input";

function Signup() {
  return (
    <>
      <Layout />
      <Container>
        <Row style={{ marginTop: "30px" }}>
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
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    type="text"
                    placeholder="Enter your last name"
                    value=""
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Input
                    label="Username"
                    type="text"
                    placeholder="Username"
                    value=""
                    controlId="formBasicEmail"
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Email address"
                    type="email"
                    placeholder="Enter email"
                    value=""
                    controlId="formBasicEmail"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
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
