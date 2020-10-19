import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Profile from "../../assets/img/profile/profile.png";
import Button from "react-bootstrap/Button";

import "./about.style.css";

function About() {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className="align-items-start p-2 my-details rounded">
                Hi! I am<strong>&nbsp;Anthony Bergen.</strong>
                <br />
                A software engineer proficient in front-end and back-end web
                development.
                <br />
                <br />
                Additonally, I have over ten years of executive sales and
                managerial experience, across a diverse list of industries
                including cybersecurity, instrumentation engineering and
                automation, telecommunications, and logistics.
                <br />
                <br />
                I have a strong passion for coding because it gives me the ability to create something of my own, in practically a different world. My creations are an extension of myself that I hope others may find just as much fulfillment from them as I do.
                <br />
                <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1WuMCwg68WfNHswutbGghRH2Df2c-ySr3/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/adbergen"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="www.linkedin.com/in/anthonybergen"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
