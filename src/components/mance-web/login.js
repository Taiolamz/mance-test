import React from "react";
import cpoImage from "../../assets/cpoImage.png";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  NavbarBrand,
} from "reactstrap";
import ManceLogo from "../../assets/ManceLogo.svg";
import messageImg from "../../assets/messageImg.png";

function Login() {
  return (
    <>
      <div className="waitlist">
        <Container>
          <Navbar fixed="top" container color="light" expand>
            <NavbarBrand href="/">
              <img src={ManceLogo} alt="mance_logo" />
            </NavbarBrand>
          </Navbar>

          <Row>
            <Col
              className="m-5 text-center right-page p-5 my-5 waitlist-bg"
              lg="6"
            >
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p className="message-span">Message from the CPO</p>
              <h3>
                "Transforming and maintaining the
                <br /> employee's performance ratio has been
                <br /> our top priority"
              </h3>
              <br />
              <img src={cpoImage} alt="cpo_image" />
              <span className="p-3">Larry Odunuga</span>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p className="copyright m-2">
                © 2022 Monetize. All rights reserved
              </p>
            </Col>
            <Col className="register-page success-page m-6 mx-5" xs="4">
              <br />
              <br />

              <img
                src={messageImg}
                className="p-5 m-5 message-icon"
                alt="message_icon"
              />
              <h1 className="text-center">
                You're now officially on the waitlist
              </h1>
              <p className="text-center">
                Our sales team will reacth out to you once the
                <br /> product is available for launch and ready to use
              </p>
              <br />
              <Button href="/" className="text-center p-2 success-btn" hre="/">
                {" "}
                Go to homepage
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Login;
