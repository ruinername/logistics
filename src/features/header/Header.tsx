import React, {useEffect} from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Burger } from "../../assets/icons";
import {useIsMobile} from "../../utils";
import {useDispatch} from "react-redux";
import {toggleDrawer} from "../../store/drawer";
import {useGetUserCompanyUserGetQuery, useLogOutCompanyLogOutDeleteMutation} from "../../store/api";

const Header = () => {
  const [logOut, { isSuccess }] = useLogOutCompanyLogOutDeleteMutation();
  const { data } = useGetUserCompanyUserGetQuery();
  const isMobile = useIsMobile();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      window.location.href = '/sign-in';
    }
  }, [isSuccess]);

  return (
    <>
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
              <NavDropdown disabled={isMobile} title={data?.username} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => logOut()}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="navbar--margin" />
    </>
  );
}

export default Header;
