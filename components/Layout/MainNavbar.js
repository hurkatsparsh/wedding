import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./MainNavigation.module.css";

function MainNavbar() {
  return (
    <Navbar
      className={classes.navbar}
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src="../../images/logo2.png"
            alt="Logo"
            className={classes.logo}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link className={classes.links} href="/">
              Home
            </Nav.Link>
            <Nav.Link className={classes.links} href="/wedding">
              Wedding
            </Nav.Link>
            <Nav.Link className={classes.links} href="/couple">
              Couple
            </Nav.Link>
            <Nav.Link className={classes.links} href="/hosts">
              Hosts
            </Nav.Link>
            <Nav.Link className={classes.links} href="/gallery">
              Gallery
            </Nav.Link>
            <Nav.Link eventKey={2} className={classes.links} href="/faq">
              Q & A
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
