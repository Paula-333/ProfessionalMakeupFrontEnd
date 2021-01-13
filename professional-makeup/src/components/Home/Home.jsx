import React from 'react';
import {Carousel, Container, Card, Button} from 'react-bootstrap';
import {useState} from 'react';
import './Home.css';




function ControlledCarousel() {


    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
     <>
        <Container className={"container"}>
            <Carousel style={{width: '30vw'}} className={"mt-5"} activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/564x/fa/b6/df/fab6dfc42108055c29481643f67065e3.jpg"
                    alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/564x/2f/e3/80/2fe38050ece704e9f9890f7f19716656.jpg"
                    alt="Second slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/564x/6b/66/26/6b662664366a9b832bc46f94d986f179.jpg"
                    alt="Third slide"
                />
                </Carousel.Item>
            </Carousel>
            <Card className={"text-center mt-5"} style={{ width: '30rem' }}>
                    <Card.Body>
                        <Card.Title><h3>¿Quienes somos?</h3></Card.Title>
                            <Card.Text>
                            <br/>
                            Professional Makeup Artist es una empresa de profesionales del mundo de la imagen que ofrece servicios de Maquillaje profesional para particulares.
                            <br/>
                            <br/>
                            Contamos con varios profesionales que cubren todas las especialidades del mundo de la moda, la belleza, para que te sientas la persona mas especial.
                            </Card.Text>
                        
                        <Button variant="outline-light" style={{ backgroundColor:'#883f4f'}}>Servicios</Button>
                        
                    </Card.Body>
                </Card>
        </Container>
     </>
    );
  }
  
  //render(<ControlledCarousel />);
  export default ControlledCarousel