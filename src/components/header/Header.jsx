import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';

function Header() {
  return (
    <Navbar bg="danger" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">LEGENDS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Stack gap={3} className="d-flex flex-row">
              <Button variant="warning">Subir cómic</Button>{' '} 
              <Button variant="warning"  direction="horizontal" gap={3} >Regístrate</Button>{' '}  
            </Stack>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="warning">Búscalo por ISBN</Button>{' '}
            
          </Form>
        </Navbar.Collapse>
            
      
      </Container>
    </Navbar>
  );
}
export default Header;