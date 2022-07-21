import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import logoBuho from '../header/logoBuho.png'


function Header() {
  return (
    <Navbar bg="danger" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img
        src={logoBuho}
        width="70"
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Stack gap={3} className="d-flex flex-row">
              <Button variant="warning">Registrate/Login</Button>{' '} 
              <Button variant="warning"  direction="horizontal" gap={3} >Subir Cómic</Button>{' '}  
            </Stack>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Encuentra tu cómic"
              className="me-3"
              
            />
            <Button variant="warning"><i class="fa-solid fa-magnifying-glass"></i></Button>{' '}
            
          </Form>
        </Navbar.Collapse>
      
      </Container>
    </Navbar>
  );
}
export default Header;