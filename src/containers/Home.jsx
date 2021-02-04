import React from 'react';
import {Carousel, Container, Card, Button} from 'react-bootstrap';

import './styles.scss'


const Home = () => {
   
  
    return (
     <>
       <Container>
       <Container className={"containerr"}>
            <Carousel style={{width:'30vw'}}  className={"mt-5"} >
                <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="/images/IMG_7641.jpg"
                    alt="First slide"  
                />
                    <Carousel.Caption>
                        <h3>Maquillaje para Novia</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/IMG_7619.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                        <h3>Maquillaje para Eventos</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/IMG_7620.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                        <h3>Maquillaje para Graduación</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/IMG_7628.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                        <h3>Maquillaje de Fotografía</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
        <Container>
        <Card className={"text-center mt-5"} style={{ width: '40rem' }}>
                    <Card.Body style={{ backgroundColor:'#faebe5'}}>
                        <Card.Title style={{ color:'#883f4f'}} ><h2>¿QUIÉNES SOMOS?</h2></Card.Title>
                            <Card.Text className="text">
                                <br/>
                                    Professional Makeup Artist es una empresa de profesionales del mundo de la imagen que ofrece servicios de Maquillaje profesional para particulares.
                                <br/>
                                    Contamos con varios profesionales con diferentes especialidades para cubrir todas las modalidades de maquillaje según el trabajo a realizar.
                                <br/>
                                    Con sede en Madrid y Barcelona, aunque trabajamos en todas las zonas de España. Tenemos disponibilidad para viajar.
                                <br/>
                                <br/>
                                Trabajamos con: 
                                <br/>
                                    Productos de maquillaje: 
                                    <Card.Link href="https://www.nyxcosmetics.es/" style={{ color:'#883f4f'}}>NYX PROFESSIONAL ARTIST</Card.Link> 
                                    <br/>
                                    Fotografa profesional: 
                                    <Card.Link href="https://www.instagram.com/patriciawangbi/" style={{ color:'#883f4f'}}>@patriciawangbi</Card.Link> 
                                    <br/>
                                    <br/>
                            </Card.Text>
          
                    <Button variant="outline-light" style={{ backgroundColor:'#883f4f'}} href="/services">Servicios</Button>
                    <Button variant="outline-light" style={{ backgroundColor:'#883f4f'}} href="/gallery">Trabajos</Button>

                    </Card.Body>
                </Card>
        </Container>
       </Container>
     </>
    );
  }
  
export default Home;