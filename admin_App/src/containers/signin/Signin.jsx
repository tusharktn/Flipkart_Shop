import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/Input";
import { login } from "../../actions";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = (e) => {
    e.preventDefault();

    const user = {
      username,
      password,
    };
    dispatch(login(user));
    setUsername("");
    setPassword("");
  };
  if (
    window.localStorage.getItem("user") != null &&
    window.localStorage.getItem("user").isLoggedIn === true
  ) {
    return <Redirect />;
  }
  return (
    <>
      <Layout />
      <Container>
        <Row style={{ marginTop: "40px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                label="Username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
