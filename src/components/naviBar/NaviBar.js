import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./NaviBar.scss";

const NaviBar = () => {
  return (
    <div className="navi-bar-wrapper shadow-lg mb-4 bg-white">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className=" me-auto fs-3 fw-bold ">
            <Nav.Link as={Link} to="/">
              Погода сейчас
            </Nav.Link>
            <Nav.Link as={Link} to="forecast">
              Прогноз
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NaviBar;
