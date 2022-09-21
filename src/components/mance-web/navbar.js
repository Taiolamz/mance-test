import { useState } from "react";
import {
  Button,
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import ManceLogo from "../../assets/ManceLogo.svg";
import DropdownImg from "../../assets/DropdownImg.svg";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Container fluid>
        <Navbar
          className="nav-bar p-0"
          fixed="top"
          container
          color="light"
          light
          expand="md"
        >
          <NavbarBrand href="/" className="me-auto mance-logo">
            <img src={ManceLogo} alt="mance_logo" />
          </NavbarBrand>
          <NavbarToggler className="harmburger" onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink
                  // active
                  // className={`home-link active ${
                  //   window.location.href === "#why-mance" ? "" : "active"
                  // }`}
                  className="home-link"
                  tag={Link}
                  to="/#why-mance"
                >
                  <p>
                    Why Mance <img src={DropdownImg} alt="dropdown_img" />
                  </p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className='resource-link'
                  tag={Link}
                  to="/#resources"
                >
                  <p>
                    Resources <img src={DropdownImg} alt="dropdown_img" />
                  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={`pricing-link active${
                    window.location.pathname === "/pricing" ? "" : "active"
                  } `}
                  href="/pricing"
                >
                  <p>Pricing</p>
                </NavLink>
              </NavItem>
              {/* <NavItem>
                  <NavLink href="/" className="nav-login">
                <Button outline className="trans-btn">
                  Login
                </Button>
                </NavLink>
                </NavItem> */}
              <NavItem>
                <NavLink href="/waitlist" className="nav-try-btn p-1">
                  <Button className="solid-btn px-3">Join Waitlist</Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
};
export default NavBar
