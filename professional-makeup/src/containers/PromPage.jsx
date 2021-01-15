import React from 'react';
import {Carousel, Container, Card, Button} from 'react-bootstrap';
import {useState} from 'react';


const PromPage = () => {

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
                    src="/images/IMG_7620.jpg"
                    alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/IMG_7618.jpg"
                    alt="Second slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/IMG_7634.jpg"
                    alt="Third slide"
                />
                </Carousel.Item>
            </Carousel>
            <Card className={"text-center mt-5"} style={{ width: '40rem' }}>
                    <Card.Body style={{ backgroundColor:'#faebe5'}}>
                        <Card.Title style={{ color:'#883f4f'}} ><h2>MAQUILLAJE PARA GRADUACIÓN</h2></Card.Title>
                            <Card.Text className="text">
                            <br/>
                            ¡Qué ilusión, después de tantos años de esfuerzo y dedicación, por fin ha llegado tu Gala de Graduación!
                            <br/>
                            ¡Pues has dado con el sitio adecuado! En Professional Makeup Artist, tenemos en cuenta tus gustos, así como el «outfit» y los complementos que hayas elegido llevar, a la hora de elaborar tu maquillaje.
                            <br/>
                            Utilizamos los mejores productos y las mejores técnicas de aplicación, para que el maquillaje se conserve impecable todo el día.
                            <br/>
                            </Card.Text>

                    <Button variant="outline-light" style={{ backgroundColor:'#883f4f'}} href="/services">Atrás</Button>
                    <Button variant="outline-light" style={{ backgroundColor:'#883f4f'}} href="/appointment">Pide Cita</Button>
                    </Card.Body>
                </Card>
        </Container>
     </>
    );
  }

  export default PromPage;