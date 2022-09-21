import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Button, Card, CardTitle, Col, Container, Row } from "reactstrap";
import Footer from "./footer";
import NavBar from "./navbar";

function Pricing() {
  const [standardPrice, setStandardPrice] = useState("1,500");
  const [premiumPrice, setPremiumPrice] = useState("3,500");

  const handleAnnualClick = () => {
    const standardPrice = "7,500";
    setStandardPrice(standardPrice);

    const premiumPrice = "12,600";
    setPremiumPrice(premiumPrice);
    return;
  };
  const handleMonthlyClick = () => {
    window.location.reload();
  };

  return (
    <>
      <NavBar />
      <div>
        <br />
        <br />
        <br />
        <Container>
          <div className="pricing">
            <Container className="text-center mt-5">
              <h1>
                <b>Choose Mance Plan</b>
              </h1>
            </Container>
            <Container className="text-center mt-3">
              <p>Select the price that works best for you and your team</p>
            </Container>
          </div>
          <div>
            <Row>
              <Col>
                <Button
                  outline
                  className="monthly-btn"
                  onClick={handleMonthlyClick}
                >
                  Pay Monthly
                </Button>
              </Col>

              <Col>
                <Button
                  outline
                  className="annual-btn"
                  onClick={handleAnnualClick}
                >
                  Pay Annually
                </Button>
              </Col>
            </Row>
            <div>
              <Container className="mt-5">
                <Row>
                  <Col lg="4">
                    <Card
                      style={{
                        width: "20rem",
                      }}
                      className="price-card p-4"
                    >
                      <CardTitle className="text-center">
                        <h5>
                          {" "}
                          Free Test <br /> $0
                        </h5>
                      </CardTitle>
                      <span className="text-center">One time trial</span>
                      <p className="mt-3 text-center free-text">
                        First hand feel of the product and
                        <br /> how it relates to your needs
                      </p>

                      <ul className="text-left">
                        <li>AI-powered sourcing</li>
                        <li>Gmail/Outlook/Zoom integrations</li>
                        <li>Automated actions and self-scheduling</li>
                        <li>E-signatures and offer letters</li>
                        <li>Automated GDPR, CCPA compliance</li>
                        <li>Self-guided onboarding</li>
                      </ul>
                      <Col className="text-center">
                        <Button className="mt-5 test-btn">
                          Join Waitlist <BsArrowRight />
                        </Button>
                      </Col>
                    </Card>
                  </Col>
                  <Col>
                    <Card
                      style={{
                        width: "20rem",
                        height: "32rem",
                      }}
                      className="price-card second-price-card p-4"
                    >
                      <CardTitle className="text-center">
                        <h5>
                          {" "}
                          Standard <br /> ${standardPrice}
                        </h5>
                      </CardTitle>
                      <span className="text-center">Billed Monthly</span>
                      <p className="mt-3 text-center">
                        Our most popular plan, designed
                        <br /> for growing businesses.
                      </p>

                      <ul className="text-left second-card-list">
                        <li>AI-powered sourcing</li>
                        <li>Gmail/Outlook/Zoom integrations</li>
                        <li>Automated actions and self-scheduling</li>
                        <li>E-signatures and offer letters</li>
                        <li>Automated GDPR, CCPA compliance</li>
                        <li>Self-guided onboarding</li>
                      </ul>
                      <Col className="text-center">
                        <Button className="mt-5 standard-btn">Buy Plan</Button>
                      </Col>
                    </Card>
                  </Col>
                  <Col>
                    <Card
                      style={{
                        width: "20rem",
                      }}
                      className="p-4 price-card"
                    >
                      <CardTitle className="text-center">
                        <h5>
                          {" "}
                          Premium <br />${premiumPrice}
                        </h5>
                      </CardTitle>
                      <span className="text-center">Billed Monthly</span>
                      <p className="mt-3 text-center premium-text">
                        An expansive solution for businesses looking for
                        top-tier service.
                      </p>
                      <span>Everything in Standard, plus:</span>
                      <ul className="text-left">
                        <li>AI-powered sourcing</li>
                        <li>Gmail/Outlook/Zoom integrations</li>
                        <li>Automated actions and self-scheduling</li>
                        <li>E-signatures and offer letters</li>
                        <li>Automated GDPR, CCPA compliance</li>
                        <li>Self-guided onboarding</li>
                      </ul>
                      <Col className="text-center">
                        <Button outline className="mt-4 premium-btn">
                          Buy Plan
                        </Button>
                      </Col>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}
export default Pricing;
