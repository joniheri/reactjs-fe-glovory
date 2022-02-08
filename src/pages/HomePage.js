import React from "react";
import { Button, Carousel, Container } from "react-bootstrap";

// import components

// import Datas
import { DataSlideWelcome } from "../Data/DataSlide";

export default function HomePage() {
  console.log("DataSlide: ", DataSlideWelcome);
  return (
    <div>
      <Carousel>
        {DataSlideWelcome.map((DataSlide) => (
          <Carousel.Item key={DataSlide.id}>
            <img
              // className="d-block w-auto h-60 img-slide-welcome"
              style={{ height: "550px", width: "100%", objectFit: "cover" }}
              src={DataSlide.imgUrl}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{DataSlide.title}</h3>
              <p>{DataSlide.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Container fluid>
        <h1 style={{ textAlign: "center" }}>SELAMAT DATANG</h1>
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="danger">Danger</Button>{" "}
      </Container>
    </div>
  );
}
