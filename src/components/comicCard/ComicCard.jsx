import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import Link from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Stack from 'react-bootstrap/Stack';
import "../cardList/cardList.css"

function ComicCard() {
  const apiUrl =
    "https://gateway.marvel.com:443/v1/public/comics/?ts=3000&apikey=c8ddc405fae663f25d5aae45bac426cc&hash=648ac7a873f5e371d1e7929a23ade05d";

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
                <button className="btn btn-lg buttonExp text-white ms-4">Comprar</button>
              </Stack>
            </Card.Body>
          </Card>
    </Col>
      ))} 
    </Row>
    )}

export default ComicCard;

//export default ComicCard;