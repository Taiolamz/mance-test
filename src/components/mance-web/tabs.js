import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import OnboardImg from "../../assets/OnboardImg.png";
import manageImg from "../../assets/manageImg.png";
import deadlineImg from "../../assets/deadlineImg.png";
import Fade from "react-reveal/Fade";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div>
        <Container className="sixth-section p-5 mt-5">
          <Row>
            <Col>
              <h3 className="text-center">Product Features</h3>
              <br />
              <div className="text-center d-flex">
                <Col className="d-flex justify-content-center justify-content-around">
                  <div
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                  >
                    <span>
                      <b>Onboard Company Staff</b>
                    </span>
                  </div>
                  {/* </Col> */}
                  {/* <Col> */}
                  <div
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                  >
                    <span>
                      <b>Manage Mission Plan</b>
                    </span>
                  </div>
                  {/* </Col> */}
                  {/* <Col> */}
                  <div
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                  >
                    <span>
                      <b>Set Deadlines</b>
                    </span>
                  </div>
                </Col>
              </div>
            </Col>
            <Container fluid>
              <Col lg="12">
                <div
                  className={
                    toggleState === 1 ? "content active-content" : "content"
                  }
                >
                  <Fade>
                    {" "}
                    <h2 className="text-center">
                      Automatically Onboard New Employees
                    </h2>
                    <p className="text-center mt-2">
                      When a new staff comes into your work environment, the
                      system
                      <br /> automatically conducts a quick onboarding by taking
                      the staff through preset entry exercises
                      <br /> and notifies employee about their induction
                      exercise date
                    </p>
                    <Col className="text-center">
                      <img
                        className="image-fluid"
                        src={OnboardImg}
                        alt="onboardImg"
                      />
                    </Col>
                  </Fade>
                </div>
              </Col>
            </Container>

            <div
              className={
                toggleState === 2 ? "content active-content" : "content"
              }
            >
              <Fade>
                <h2 className="text-center">
                  Access Mission Plan and Track KPI
                </h2>
                <p className="text-center mt-2">
                  Allow employees set their mission plan pillars, create KPI
                  deliverables and submit, then
                  <br /> afford line managers accessment authority to review,
                  give approval grading period, award
                  <br />
                  grades for successful accomplishment or shortfal on mission
                  plan and KPI objectives
                </p>
                <Col className="text-center">
                  <img
                    src={manageImg}
                    className="image-fluid manage_img"
                    alt="manage_img"
                  />
                </Col>
              </Fade>
            </div>
            <div
              className={
                toggleState === 3 ? "content active-content" : "content"
              }
            >
              <Fade>
                <h2 className="text-center">
                  Plan Events and Schedule Deadlines
                </h2>
                <p className="text-center mt-2">
                  Pre-plan company events, determine financial seasons, set
                  project deadlines to
                  <br /> allow the system automatically chart a company schedule
                  and send off notifications
                  <br /> to entire organization on time sensitive subjects or
                  periodic developments
                </p>
                <Col className="text-center">
                  <img
                    src={deadlineImg}
                    className="image-fluid deadline_img"
                    alt="deadline_img"
                  />
                </Col>
              </Fade>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Tabs;
