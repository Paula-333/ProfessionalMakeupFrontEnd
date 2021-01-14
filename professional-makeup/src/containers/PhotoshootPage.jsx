import React from 'react';
import {Carousel, Container, Card, Button} from 'react-bootstrap';
import {useState} from 'react';



const PhotoshootPage = () => {

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
                    src="/images/IMG_7606.jpg"
                    alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/IMG_7621.jpg"
                    alt="Second slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/IMG_7624.jpg"
                    alt="Third slide"
                />
                </Carousel.Item>
            </Carousel>
            <Card className={"text-center mt-5"} style={{ width: '35rem' }}>
                    <Card.Body style={{ backgroundColor:'#faebe5'}}>
                        <Card.Title style={{ color:'#883f4f'}} ><h2>MAQUILLAJE DE FOTOGRAFÍA</h2></Card.Title>
                            <Card.Text>
                            <br/>
                            El maquillaje de fotografía abarca muchos campos como fotografía de moda, publicidad, catálogos o books de modelo, incluyendo también el maquillaje de hombre.
                            
                            Se puede representar con diferentes maquillajes desde el más natural al más sofisticado. En el maquillaje para fotografía podemos permitirnos una imagen mas recargada y sofisticada, ya que el resultado final no es el que vemos al natural, sino que a través de la fotografía se pierde mucho la intensidad del maquillaje.
                           
                            Es un buen medio para representar un maquillaje de belleza fantasía, que será un maquillaje de belleza llevado a la exageración, a menudo adornado con estilismos y complementos al maquillaje.


                            </Card.Text>
                        
                    <Button variant="outline-light" style={{ backgroundColor:'#883f4f'}} href="/services">Pide Cita</Button>
                    </Card.Body>
                </Card>
        </Container>
     </>
    );
  }
  
  //render(<ControlledCarousel />);
  export default PhotoshootPage;