import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import FetchLogin from "../fetch/axios";

export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    FetchLogin({
      method: "POST",
      url: "/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        const { token } = res.data;
        console.log(res.data);
        // Memasukan token kedalam LStorage
        localStorage.setItem("Token", token);
        // Mengarahkan user setelah register
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{props.email}</Form.Label>
          <Form.Control type="email" placeholder={props.emailPlaceholder} required onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>{props.password}</Form.Label>
          <Form.Control type="password" placeholder={props.passPlaceholder} required onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <div className="container text-center mt-4">
        <p>
          Dont Have An Account? <Link to={`/register`}> Register !!</Link>
        </p>
      </div>
    </div>
  );
}
