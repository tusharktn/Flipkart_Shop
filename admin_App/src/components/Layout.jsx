import React from "react";
import Header from "./Header";
import { Row, Col, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../../src/styling/layout.css";
export default function Layout(props) {
  return (
    <>
      <Header />
      {props.sidebar ? (
        <Container fluid>
          <Row>
            <Col md={2} className="sidebar">
              <ul>
                <li>
                  <NavLink exact to={`/`}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/categories`}>Category</NavLink>
                </li>
                <li>
                  <NavLink to={`/products`}>Products</NavLink>
                </li>
                <li>
                  <NavLink to={`/orders`}>Orders</NavLink>
                </li>
              </ul>
            </Col>
            <Col md={10} style={{ marginLeft: "auto", paddingTop: "60px" }}>
              {props.children}
            </Col>
          </Row>
        </Container>
      ) : (
        props.children
      )}
    </>
  );
}
