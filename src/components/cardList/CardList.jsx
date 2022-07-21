import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import Link from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function CardList() {
  const apiUrl =
    "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=3189be3503287e3df629857ce15d59e6&hash=cf6a9776c1b8521c81ca954cd05f310e";

  const [comics, setComics] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setComics(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (


<Row xs={1} md={2} className="g-4">
        
          <Col /*key={key} comic={comic}*/>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
    </Row>
  );

  
  
}

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