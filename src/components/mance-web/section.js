import React from "react";
import { Container, Col, Row, Button } from "reactstrap";
import EmployeesImg from "../../assets/employeeImg.png";
import SettingIcon from "../../assets/SettingsIcon.svg";
import TimeIcon from "../../assets/TimeIcon.svg";
import ManIcon from "../../assets/ManIcon.svg";
import DocIcon from "../../assets/DocIcon.svg";
import PlanImg from "../../assets/PlanImg.svg";
import HappyImg from "../../assets/HappyImg.svg";
import ArrowRight from "../../assets/ArrowRight.svg";
import { BsArrowRight } from "react-icons/bs";
import objectiveImg from "../../assets/ObjectiveImg.svg";
import Resources from "./resources";
import NavBar from "./navbar";
import Footer from "./footer";
import Tabs from "./tabs";

function Section() {
  return (
    <>
      <NavBar />
      <div>
        <Container>
          <Container fluid>
            <div className="first-section">
              <Row>
                <Col className="mt-5" lg="6">
                  <h1>
                    <b>
                      Make the achievement
                      <br />
                      of your company's goals
                      <br />
                      fun for employees
                    </b>
                  </h1>
                  <br />
                  <p>
                    Mance is a robust platform for continously stimulating
                    <br /> awesome performance from high-energy teams towards
                    <br /> intentional strategy execution.
                    <br />
                    <br />
                  </p>
                  <Col>
                  
                    <Button outline className="trans-btn request-btn">
                      Request for a demo
                    </Button>
                    <Button
                      href="/waitlist"
                      outline
                      className="solid-btn try-btn"
                    >
                      Join Waitlist <img src={ArrowRight} alt="arrow_right" />
                    </Button>
                  </Col>
                </Col>
                <Col md="6">
                  <div className="smile-img">
                    {" "}
                    <img
                      src={EmployeesImg}
                      alt="employee_img"
                      className="employee-img"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="second-section" id="why-mance">
            <Row>
              <br />
              <br />
              <Col className="text-center mt-5">
                <h3>Why Mance</h3>
              </Col>
              <p className="text-center">
                Transform and manage business growth with:
              </p>
            </Row>
          </div>
          <div className="third-section">
            <Row className="text-center">
              <Col>
                <img src={SettingIcon} alt="setting_img" />
                <br />
                <br />
                <br />
                <Col>
                  <div>
                    <h5 className="text-center">360 Degree Evaluation</h5>
                    <p className="text-center">
                      Get a complete picture of an employee's <br />
                      performance, and collect feedback from peers, direct
                      reports, and senior management.
                    </p>
                  </div>
                </Col>
              </Col>{" "}
              <Col>
                <img src={TimeIcon} alt="time_img" />
                <br />
                <br />
                <br />
                <Col>
                  <div>
                    <h5 className="text-center mt-2">
                      Goal Setting & Monitoring
                    </h5>
                    <p className="text-center">
                      Set Goals and cascade them
                      <br />
                      to all employees.
                    </p>
                  </div>
                </Col>
              </Col>{" "}
              <Col>
                <img src={ManIcon} alt="setting_img" />
                <br />
                <br />
                <br />
                <Col>
                  <div>
                    <h5 className="text-center">Employee Engagement</h5>
                    <p className="text-center">
                      Discover what drives your staff
                      <br />
                      to perform better on the job.
                    </p>
                  </div>
                </Col>
              </Col>{" "}
              <Col>
                <img src={DocIcon} alt="setting_img" />
                <br />
                <br />
                <br />
                <Col>
                  <div>
                    <h5 className="text-center ">Indepth Assessments</h5>
                    <p className="text-center">
                      Make rating scales, competencies, and <br /> questions
                      more specific to your team's
                      <br /> needs and company's culture
                    </p>
                  </div>
                </Col>
              </Col>{" "}
            </Row>
          </div>
          {/*  */}
          <div className="fourth-section">
            <Row>
              <Col className="mt-4" lg="5">
                <h2>
                  Your Company is distinct.
                  <br />
                  So should your performance
                  <br />
                  management plan!
                </h2>
                <br />
                <p>
                  Mance captures your expectations so you can manage
                  <br /> every aspect of your mission (and the executors) in one
                  <br />
                  place, including goals, core values & associated behvaiour
                  <br />
                  as well as provide feedback.
                </p>
                <br />

                <div>
                  <Button
                    outline
                    className="trans-btn request-btn free-btn"
                    href="/waitlist"
                  >
                    Join Waitlist <BsArrowRight />
                  </Button>
                </div>
              </Col>

              <Col lg="6">
                <img className="plan mb-5" src={PlanImg} alt="plan_img" />
                <br />
                <br />
                <br />
              </Col>
            </Row>
          </div>
          <div className="fifth-section">
            <Row>
              <Col lg="6">
                <img src={HappyImg} alt="happy_img" />
              </Col>

              
              <Col className="feedback">
                <h2>
                  "68% of people who recieved accurate and
                  <br /> continous feedback claim
                  <br />
                  they felt fulfilled at their
                  <br />
                  job"
                  <span></span>
                  <span className="name-span">- Clutch</span>
                </h2>
                <br />
                <p>
                  Employees are happier at work if they recieve regular
                  <br /> and accurate feedback, as shown by the organizations
                  <br /> with the best performance management systems.
                </p>
                <br />
                <Button outline className="trans-btn request-btn free-btn">
                  Request a demo
                </Button>
              </Col>
            </Row>
          </div>
          <div className="seventh-section">
            <Row>
              <Col className="mt-3 mission-alignment" lg="6">
                <h2>
                  Align everyone on the mission and deliver your key priorities
                </h2>

                <Button
                  href="#"
                  outline
                  className="trans-btn request-btn free-btn align-btn mt-3"
                >
                  Request a demo
                </Button>
                
              </Col>
              <Col className="mt-4" lg="6">
                <img  src={objectiveImg} alt="alt_img" />
              </Col>
            </Row>
            <Tabs />
          </div>
          <Resources />
          <br />
          <br />
          <br />
        </Container>
        <Container fluid="small">
          <div className="last-section">
            <Row>
              <Col className="text-center">
                <h2>A Tool Just For Every Business</h2>
                <p>
                  We realized how hard employee resource management can be so we
                  designed a tool to
                  <br /> help mitigate lapses in your organization structure and
                  ensure employee engagement
                </p>
                <Container>
                  <Button href="/waitlist" outline className="last-btn">
                    Join Waitlist <BsArrowRight />
                  </Button>
                </Container>
              </Col>
            </Row>
          </div>
        </Container>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Section;
