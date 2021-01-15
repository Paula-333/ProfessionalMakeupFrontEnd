import React from 'react';
import {Carousel, Container, Card, Button} from 'react-bootstrap';
import {useState} from 'react';


const EventPage = () => {

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
                    src="/images/IMG_7617.jpg"
                    alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/IMG_7619.jpg"
                    alt="Second slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/IMG_7622.jpg"
                    alt="Third slide"
                />
                </Carousel.Item>
            </Carousel>
            <Card className={"text-center mt-5"} style={{ width: '40rem' }}>
                    <Card.Body style={{ backgroundColor:'#faebe5'}}>
                        <Card.Title style={{ color:'#883f4f'}} ><h2>MAQUILLAJE PARA EVENTOS</h2></Card.Title>
                            <Card.Text className="text">
                            <br/>
                          
                            ¿Tienes un evento especial, un cumpleaños o una cena corporativa y quieres estar impecable?  
                            <br/>
                            Nos amoldamos a todo tipo de eventos con todas nuestras técnicas de maquillaje
                            <br/>
                            Adaptaremos el maquillaje y peinado respetando tu personalidad y teniendo en cuenta hasta el más mínimo detalle del look para que luzcas impresionante.
                            <br/>
                            Utilizaremos productos de alta calidad para garantizar resultados perfectos y larga duración del maquillaje para que no tengas que preocuparte de nada más que de disfrutar el momento.
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
  
  //render(<ControlledCarousel />);
  export default EventPage;