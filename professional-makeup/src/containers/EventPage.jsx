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
                            <Card.Text>
                            <br/>
                            El maquillaje de novia siempre es personalizado, buscando un maquillaje favorecedor acorde con el estilo y gusto de la novia.
                            <br/>
                            <br/>
                            Antes del día de la boda se recomienda hacer una prueba de maquillaje, un mes antes aproximadamente, donde se escogen las tonalidades, intensidades y productos a utilizar, donde junto con nuestro asesoramiento la novia es la que decide el resultado final del maquillaje.
                            <br/>
                            <br/>
                            El maquillaje de novia es un maquillaje muy trabajado y perfeccionista donde a pesar de que en muchas ocasiones es natural, se aplican productos específicos que favorecen la fijación y el resultado final del maquillaje, siendo muy resistente, a prueba de sudor y por supuesto ¡lágrimas!
                            </Card.Text>
                        
                    <Button variant="outline-light" style={{ backgroundColor:'#883f4f'}} href="/services">Pide Cita</Button>
                    </Card.Body>
                </Card>
        </Container>
     </>
    );
  }
  
  //render(<ControlledCarousel />);
  export default EventPage;