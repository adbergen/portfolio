import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Profile from "../../assets/img/profile/profile.webp";

function About() {
  return (
    <div id="about">
      <h1>About Me</h1>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Row>
              <Image src={Profile} thumbnail />
            </Row>
          </Col>
          <Col xs={12} md={6}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
