import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/Input";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signup } from "../../actions";
function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const userSignup = useSelector((state) => state.userSignup);

  const register = (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
      firstName,
      lastName,
      email,
      contactNumber,
    };
    dispatch(signup(user));
    setUsername("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setContactNumber("");
  };

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  if (userSignup.loading) {
    return <p style={{ textAlign: "center" }}>Loading....</p>;
  }

  return (
    <>
      <Layout>
        <Container>
          <Row style={{ marginTop: "80px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={register}>
                <Row>
                  <Col md={6}>
                    <Input
                      label="First Name"
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      label="Last Name"
                      type="text"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Input
                      label="Username"
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      label="Contact Number"
                      type="tel"
                      placeholder="Contact number"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                    />
                  </Col>
                </Row>
                <Input
                  label="Email address"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  controlId="formBasicEmail"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  controlId="formBasicPassword"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button variant="primary" type="submit">
                  SignUp
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default Signup;
