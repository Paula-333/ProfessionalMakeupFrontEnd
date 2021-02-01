import React from 'react';
import {Carousel, Container, Card, Button, OverlayTrigger, Tooltip} from 'react-bootstrap';


const PhotoshootPage = (props) => {

    let email = localStorage.getItem('email');
  
    return (
     <>
        <Container className={"container"}>
            <Carousel style={{width: '30vw'}} className={"mt-5"} >
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
                    src="/images/IMG_7629.jpg"
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
                            <Card.Text className="text">
                            <br/>
                            El maquillaje de fotografía abarca muchos campos como fotografía de moda, publicidad, catálogos o books de modelo, incluyendo también el maquillaje de hombre.
                            <br/>
                            Se puede representar con diferentes maquillajes desde el más natural al más sofisticado. En el maquillaje para fotografía podemos permitirnos una imagen mas recargada y sofisticada, ya que el resultado final no es el que vemos al natural, sino que a través de la fotografía se pierde mucho la intensidad del maquillaje.
                            <br/>
                            Es un buen medio para representar un maquillaje de belleza fantasía, que será un maquillaje de belleza llevado a la exageración, a menudo adornado con estilismos y complementos al maquillaje.
                            <br/>
                            Si es lo que necesitas no dudes en pedir tu cita.

                            </Card.Text>

                            {email?
                                <>
                                <Button variant="outline-light" style={{ backgroundColor:'#883f4f'}} href="/services">Atrás</Button>    
                                <Button variant="outline-light" style={{ backgroundColor:'#883f4f'}} href="/appointment">Pide Cita</Button>
                                </>:
                                <>
                                <Button variant="outline-light" style={{ backgroundColor:'#883f4f'}} href="/services">Atrás</Button>    
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tienes que tener una cuenta</Tooltip>}>
                                    <span className="d-inline-block">
                                        <Button variant="outline-light" disabled style={{ pointerEvents: 'none', backgroundColor:'#883f4f' }}>
                                            Pedir Cita
                                        </Button>
                                    </span>
                                </OverlayTrigger>
                                
                                </>
                            }       
                    </Card.Body>
                </Card>
        </Container>
     </>
    );
  }
  
  
  export default PhotoshootPage;