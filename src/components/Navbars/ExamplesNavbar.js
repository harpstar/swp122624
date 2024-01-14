import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

function ExamplesNavbar({coloredNav}) {
  const [navbarColor, setNavbarColor] = React.useState(coloredNav || "navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [loggedInUserId] = React.useState(() => window.localStorage.getItem('logged-in-user') || '');
  const navigate = useNavigate();
  const isLoggingOut = React.useRef(false);

  const logout = () => {
    window.localStorage.removeItem('logged-in-user');
    navigate('/');
  }

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              tag="a"
              onClick={(e) => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby="navbarDropdown">
              {/*<DropdownItem header tag="a">*/}
              {/*  Dropdown header*/}
              {/*</DropdownItem>*/}
              <DropdownItem to="/" tag={Link}>
                Home
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem to="/pathways" tag={Link}>
                Career Pathways
              </DropdownItem>
              <DropdownItem to="/profile" tag={Link}>
                Profile
              </DropdownItem>
              {/*<DropdownItem divider></DropdownItem>*/}
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <NavbarBrand
              href='/'
              id="navbar-brand"
            >
              <strong>SustainWDN™</strong>
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                {
                  loggedInUserId ? (
                    <>
                      <NavLink
                        onClick={() => logout()}
                        id="twitter-tooltip"
                        style={{cursor: 'pointer'}}
                      >
                        <i className="fas fa-sign-out-alt" style={{fontSize: '18px'}}></i>
                        <p className="d-lg-none d-xl-none">Logout</p>
                      </NavLink>
                      <UncontrolledTooltip target="#twitter-tooltip">
                        Logout
                      </UncontrolledTooltip>
                    </>
                  ) : (
                    <>
                      <NavLink
                        to="/profile"
                        tag={Link}
                        id="twitter-tooltip"
                      >
                        <i className="fas fa-user" style={{fontSize: '18px'}}></i>
                        <p className="d-lg-none d-xl-none">Profile</p>
                      </NavLink>
                      <UncontrolledTooltip target="#twitter-tooltip">
                        Student Profile
                      </UncontrolledTooltip>
                    </>
                  )
                }
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
