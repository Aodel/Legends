import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import Link from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Stack from 'react-bootstrap/Stack';
import "../cardList/cardList.css"

function CardList() {
  const apiUrl =
    "https://gateway.marvel.com:443/v1/public/comics?ts=3000&apikey=c8ddc405fae663f25d5aae45bac426cc&hash=648ac7a873f5e371d1e7929a23ade05d";

  const [comics, setComics] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then(res => {
        setComics(res.data.data.results);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
      
  <Row sm={1} md={2} lg={"auto"} fluid>
    {comics.map(item =>(
      <Col xs={12} md={2} lg={3} key={item.id} className="d-grid justify-content-center">     
          <Card style={{cursor : 'pointer', width: '25rem', }} className="align-items-end my-2">
            <Card.Img variant="top" style={{ height:'80%'}} src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
            <Card.Body className="d-flex flex-column mx-auto">
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>ISBN: {item.isbn}
              </Card.Text>
              <Card.Text>issueNumber: {item.issueNumber}
              </Card.Text>
              <Stack direction="horizontal" gap={5}>
                <button className="btn btn-lg btnState text-white " >Precintado</button> 
                <button className="btn btn-lg buttonExp text-white ms-4" onClick={`https://gateway.marvel.com:443/v1/public/comics${item.id}`}>Comprar</button>
              </Stack>
            </Card.Body>
          </Card>
    </Col>
      ))} 
    </Row>
    )}

export default CardList;


// <Container>
//     //   <Row xs={1} md={2} lg={3} className="g-4">
//     //     {comics.map((comic, key) => (
    //       <Col key={key} comic={comic}>
    //         {/* <Link to={`/comics/${comic.id}`}> */}
    //         <Card style={{ cursor: "pointer" }}>
    //           <Card.Img
    //             className="cardImage"
    //             variant="top"
    //             src={comic.resourceURI}
    //           />
    //           <Card.Body>
    //             <Card.ImgOverlay>
    //               <Card.Title>{comic.name}</Card.Title>
    //             </Card.ImgOverlay>
    //             <Row>
    //               <Col>
    //                 <div className="tagCard">
    //                   <Card.Text>{comic.price}</Card.Text>
    //                 </div>
    //               </Col>
    //               {/* <Col><div className='tagCard'><Card.Text>{comic.transporte}</Card.Text></div></Col>
    //           <Col><div className='tagCard'><Card.Text>{comic.duracionHoras}</Card.Text></div></Col> */}
    //             </Row>
    //             {/* <Card.Text>{comic.duracion}</Card.Text> */}
    //             <Row>
    //               <Col>
    //                 <Card.Text>{comic.precio}</Card.Text>
    //               </Col>
    //               <Col>
    //                 <button className="button">Comprar</button>
    //               </Col>
    //             </Row>
    //           </Card.Body>
    //         </Card>
    //         {/* </Link> */}
    //       </Col>
    //     ))}
    //   </Row>
    // </Container>