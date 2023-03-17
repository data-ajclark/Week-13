import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";

export default function TravelBar () {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Travel</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Destinations</Nav.Link>
            <Nav.Link href="#pricing">Activities</Nav.Link>
            <NavDropdown title="Specifics" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Packages</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Day Trips</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Discounts</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

//export default TravelBar;
    