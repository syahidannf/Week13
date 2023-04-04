import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardBooks from "../components/CardBooks";
import MyNav from "../components/MyNav";

export default function Home() {
  return (
    <React.Fragment>
      <MyNav title="Books" />
      <Container className="d-flex flex-row justify-content-center align-items-center gap-5">
        <CardBooks />
      </Container>
    </React.Fragment>
  );
}
