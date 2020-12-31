import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions";
function Header() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(signout());
  };
  const renderLoggedInUser = () => {
    return (
      <Nav>
        <li className="nav-item">
          <span
            className="nav-link"
            onClick={logOut}
            style={{ cursor: "pointer" }}
          >
            SignOut
          </span>
        </li>
      </Nav>
    );
  };

  const renderNotLoggedInUser = () => {
    return (
      <Nav>
        <li className="nav-item">
          <NavLink to="/signin" className="nav-link">
            SignIn
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signup" className="nav-link">
            SignUp
          </NavLink>
        </li>
      </Nav>
    );
  };
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ zIndex: "1" }}
    >
      <Container>
        <Link className="navbar-brand" to="/">
          Admin Dashboard
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          {auth.authenticate ? renderLoggedInUser() : renderNotLoggedInUser()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
