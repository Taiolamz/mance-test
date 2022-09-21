import React from "react";
import cpoImage from "../../assets/cpoImage.png";
import {
  Container,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  Navbar,
  NavbarBrand,
} from "reactstrap";
import ManceLogo from "../../assets/ManceLogo.svg";
import { BsArrowRight } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
// import {IoChevronBack} from 'react-icons/io'

function WaitList() {

const handleHistory = ()=> {
  window.history.back()
}

  return (
    <>
      <div className="waitlist">
        <Container>
          <Navbar fixed="top" color="light" container className="p-0 nav-bar" expand>
            <NavbarBrand href="/">
              <img src={ManceLogo} alt="mance_logo" />
            </NavbarBrand>
          </Navbar>
          <Row>
            <Col
              className="m-5 text-center right-page p-5 my-5 waitlist-bg"
              lg="6"
              // md={12}
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

            <Col className="register-page m-6 mx-5 join-bg">
              <br />
              <br />
              <br />
              <br />
              <p onClick={handleHistory} style={{cursor:'pointer'}}>
                <span>
                  <IoIosArrowBack />
                </span>
                <span style={{position: "relative", right: '7px'}}>
                  <MdArrowBackIosNew />
                </span>
                Back
              </p>
              <br />
              {/* <IoIosArrowBack/> */}
              <h1>Join the waitlist</h1>
              <p>
                Be among the first profile to enjoy the free holistic features
                and support
              </p>
              <br />
              <Form>
                <Row>
                  <Col>
                    <Label for="first_name">First Name</Label>
                    <span className="required-txt"> *</span>
                    <Input
                      type="text"
                      id="first_name"
                      name="first_name"
                      placeholder="Input First Name"
                      required
                    />
                  </Col>
                  <Col>
                    <Label for="last_name">Last Name</Label>
                    <span className="required-txt"> *</span>
                    <Input
                      type="text"
                      id="last_name"
                      name="last_name"
                      placeholder="Input Last Name"
                      required
                    />
                  </Col>
                </Row>
                <br />
                <Label for="email">Email</Label>
                <span className="required-txt"> *</span>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Input email"
                  required
                />
                <br />

                <Label for="organization_name">Organization Name</Label>
                <span className="required-txt"> *</span>
                <Input
                  type="text"
                  name="organzation_name"
                  id="organization_name"
                  placeholder="Input organization name"
                  required
                />
                <br />
                <Label for="organization_type">Organization Type</Label>
                <span className="required-txt"> *</span>
                <Input
                  type="select"
                  name="organization_type"
                  id="organization_type"
                  placeholder="Input organization type"
                  required
                >
                  <option>Oil and Gas</option>
                  <option>Information and Technology</option>
                </Input>
                <br />
                <Label for="organzation_size">Organization Size</Label>
                <span className="required-txt"> *</span>
                <Input
                  type="select"
                  name="organization_size"
                  id="organization_size"
                  placeholder="Input organization size"
                >
                  <option>1 - 10</option>
                  <option>10 - 20</option>
                  <option>20 - 50</option>
                  <option>50 - 100</option>
                </Input>
                <br />
                <br />
                <br />
                <Button
                  type="submit"
                  className="login-btn"
                  href="/login-successful"
                >
                  Join WaitList <BsArrowRight />{" "}
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default WaitList;
