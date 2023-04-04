import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function MyNav(props) {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // perform login logic
    setIsLogin(true);
  };

  const handleLogout = () => {
    // perform logout logic
    setIsLogin(false);
  };

  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="ms-auto me-auto" href="/Home">
            {props.title}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default MyNav;
