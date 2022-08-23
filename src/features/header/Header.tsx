import React, {useEffect} from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import {Burger, Link as LinkIcon} from "../../assets/icons";
import {useIsMobile} from "../../utils";
import {useDispatch} from "react-redux";
import {toggleDrawer} from "../../store/drawer";
import {useGetUserCompanyUserGetQuery, useLogOutCompanyLogOutDeleteMutation} from "../../store/api";
import {useCookies} from "react-cookie";
import {Link, generatePath} from "react-router-dom";

const Header = () => {
  const [logOut, { isSuccess }] = useLogOutCompanyLogOutDeleteMutation();
  const { data } = useGetUserCompanyUserGetQuery();
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const [{ current_user }] = useCookies(['current_user']);

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
              {current_user && !isMobile && <Nav.Link className="text-primary" href={generatePath('/dashboard')}>Dashboard</Nav.Link>}
              {isMobile && (
                <div onClick={() => dispatch(toggleDrawer())}>
                  <Burger />
                </div>
              )}
            </Nav>
            <Nav className="flex-row ml-md-auto d-md-flex">
              {current_user ? (<NavDropdown disabled={isMobile} title={data?.username} id="basic-nav-dropdown">
                  <NavDropdown.Item href={generatePath('../dashboard/settings')}>
                    Company settings
                  </NavDropdown.Item>
                <NavDropdown.Item onClick={() => logOut()}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
                ) : (
                  <Link to={'/sign-in'}>
                    <div className="d-flex flex-row align-items-center">
                      <LinkIcon />
                      <div style={{ marginLeft: 8 }} className="text-primary sign-in-button">Sign in</div>
                    </div>
                  </Link>
                )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="navbar--margin" />
    </>
  );
}

export default Header;
