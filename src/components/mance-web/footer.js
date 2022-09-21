import React from "react";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Col,
  Nav,
  Row,
} from "reactstrap";
import ManceLogo from '../../assets/ManceLogo.svg'
const Footer = () => {
  return (
    <>
      <div  className="footer">
        <Container>
          <Navbar >
            <NavbarBrand href="/" >
              <img src={ManceLogo} alt="mance_icon"  />
              {/* <span className="mance-icon">{" "}Mance</span> */}
            </NavbarBrand>
            <Col>
            <Row>
              <Nav className="nav">
                <NavItem>
                  <NavLink className="product-link" href="#">
                    Products
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="about-link" href="#">
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="terms-link" href="#">
                    Terms of Use
                  </NavLink>
                </NavItem>{" "}
                <NavItem>
                  <NavLink className="help-link" href="#">
                    Help Center
                  </NavLink>
                </NavItem>{" "}
                <NavItem>
                  <NavLink className="copyright" disabled>
                    © 2022Mance All rights reserved
                  </NavLink>
                </NavItem>
              </Nav>
              </Row>
            </Col>
          </Navbar>
        </Container>
      </div>
    </>
  );
};
export default Footer;
