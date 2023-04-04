import React, { useState } from "react";
import { Form, Button, Accordion } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import FetchRegistUser from "../fetch/axios";

export default function RegisterForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegist = (e) => {
    FetchRegistUser({
      method: "POST",
      url: "/register",
      data: {
        name,
        email,
        password,
      },
    }).then((res) => {
      navigate("/login");
    });
  };

  return (
    <div>
      <Form onSubmit={handleRegist}>
        {/* Form untuk Name */}
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>{props.name}</Form.Label>
          <Form.Control type="text" name="name" placeholder={props.namePlaceholder} required onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        {/* Form untuk email */}
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>{props.email}</Form.Label>
          <Form.Control type="email" name="email" placeholder={props.emailPlaceholder} required onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        {/* Form untuk Password */}
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>{props.password}</Form.Label>
          <Form.Control type="password" name="password" placeholder={props.passPlaceholder} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button className="w-100" variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <div className="container text-center mt-4">
        <p>
          Already have Account <Link to={`/login`}> Login !!</Link>
        </p>
      </div>
    </div>
  );
}
