import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Burger } from "../../assets/icons";
import {useIsMobile} from "../../utils";
import {useDispatch} from "react-redux";
import {toggleDrawer} from "../../store/drawer";

const Header = () => {
  const isMobile = useIsMobile();
  const dispatch = useDispatch();

  return (
    <Navbar className="navbar-expand" bg="white" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isMobile && (
              <div onClick={() => dispatch(toggleDrawer())}>
                <Burger />
              </div>
            )}
          </Nav>
          <Nav className="flex-row ml-md-auto d-md-flex">
            <NavDropdown title="First Name Last Name" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
