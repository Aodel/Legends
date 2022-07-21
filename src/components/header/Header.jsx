import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Header from "../header"

function Header() {
  return (
    <Navbar bg="navbarcolor" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">LEGENDS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Regístrate</Nav.Link>
            <Nav.Link href="#action2">Subir cómic</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Búscalo por ISBN</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;