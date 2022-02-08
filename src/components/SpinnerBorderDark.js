import React from "react";
import { Spinner } from "react-bootstrap";

export default function SpinnerBorderDark() {
  return (
    <div style={{ textAlign: "center" }}>
      <Spinner animation="border" variant="dark" />
    </div>
  );
}
