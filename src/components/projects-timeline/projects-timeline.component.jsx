import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import TheGamingNetwork from "../../assets/img/projects/the-gaming-network.webp";
import EmployeeDirectory from "../../assets/img/projects/employee-directory.webp";
import ReadYourMovie from "../../assets/img/projects/read-your-movie.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_MONGODB from "../../assets/img/skills/mongoDB.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_AUTH0 from "../../assets/img/skills/auth0.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import Image from "react-bootstrap/Image";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_MATERIALIZE from "../../assets/img/skills/material-ui-1.svg";

import "./projects-timeline.style.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: The Gaming Network */}

          <ImageEvent
            date="08/2020"
            className="text-center"
            text="The Gaming Network"
            src={TheGamingNetwork}
            alt="The Gaming Network Demo"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that lets gamers
                        connect to find games and groups to play together.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            Personalized dashboard to search for a game to store
                          </li>
                          <li>Find details about each game you search </li>
                          <li>Chat with other users via socket.io</li>
                          <li>Login and authenticate with Auth0</li>
                          <li>Unofficial Metacritic server-side API</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_AUTH0}
                                alt="Auth0"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Auth0
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://good-game2020.herokuapp.com/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/adbergen/the-gaming-network"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Employee Directory */}

          <ImageEvent
            date="09/2020"
            className="text-center"
            text="Employee Directory"
            src={EmployeeDirectory}
            alt="Employee Directory Demo"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that lets you view
                        an employee directory.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Search, filter, and sort through employees</li>
                          <li>Employees being fetched via API call</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="Javascript"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GITHUB_PAGES}
                                alt="GitHub Pages"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              GitHub Pages
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://adbergen.github.io/employee-directory/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/adbergen/employee-directory"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Read Your Movie */}

          <ImageEvent
            date="08/2020"
            className="text-center"
            text="Read Your Movie"
            src={ReadYourMovie}
            alt="Read Your Movie Demo"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that lets you find
                        movie versions of books and vice versa
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Search for a book</li>
                          <li>Search for a movie</li>
                          <li>Link to purchase book or movie</li>
                          <li>Google and IMDB server-side API's</li>
                          <li>Responsive User Interface</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALIZE}
                                alt="Materialize"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Materialize
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="Javascript"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://mi6gy.github.io/read_your_movie/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/mi6gy/read_your_movie"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
