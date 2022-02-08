import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <Container
      fluid
      style={{
        height: "70px",
        background: "#1C7CC5",
        marginTop: "15px",
        paddingTop: "5px",
        color: "white",
      }}
    >
      <h1>This is Footer</h1>
    </Container>
  );
}
