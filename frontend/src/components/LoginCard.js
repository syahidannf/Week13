import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import LoginForm from "./LoginForm";

function LoginCard() {
  return (
    <Container className="my-5 py-5">
      <Card>
        <Card.Body>
          <LoginForm password="Password :" passPlaceholder="*******" email="Email :" emailPlaceholder="example@mail.com" />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LoginCard;
