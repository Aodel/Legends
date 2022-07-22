import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import logoBuho from '../../assets/img/logoBuho.png'
import { useState, useEffect } from 'react';
import axios from 'axios';


function Header() {


  const apiUrl =
    "https://gateway.marvel.com:443/v1/public/comics?ts=3000&apikey=c8ddc405fae663f25d5aae45bac426cc&hash=648ac7a873f5e371d1e7929a23ade05d";

  const [comics, setComics] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then(res => {
        setComics(res.data.data.results);
      })
      .catch(error => console.log(error));
  }, []);



  const [search, setSearch]= useState("");
  //SearchBar

  const saveSearch= e=>{
    setSearch(e.target.value);
    filter(e.target.value);
  }

  const filter=(searchTerm)=>{
    let searchResult= comics.filter((element)=>{
      if(element.result.title.toString().toLowerCase().includes(searchTerm.toLowerCase())){
        return element;
      }

    });
    setComics(searchResult);
  }

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
              onChange={saveSearch}
              
            />
            <Button variant="warning"><i class="fa-solid fa-magnifying-glass"></i></Button>{' '}
            
          </Form>
        </Navbar.Collapse>
      
      </Container>
    </Navbar>
  );
}
export default Header;