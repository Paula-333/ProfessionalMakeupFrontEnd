import React from 'react';
import { Container, Card, Button} from "react-bootstrap";

import './style.scss'


const Services = () => {

    return(
        <Container className={"mt-5 services"} >
        <Container>
        <Card className={"text-center border-card"}  style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/images/IMG_7641.jpg" />
                    <Card.Body style={{ backgroundColor:'#faebe5'}}>
                        <Card.Title style={{ color:'#883f4f'}}>Maquillaje para Novias</Card.Title>
                        <Button variant="outline-light" href="/wedding-page" style={{ backgroundColor:'#883f4f'}}>Detalles</Button>   
                    </Card.Body>
            </Card>
        </Container>
        <Container>
        <Card className={"text-center border-card"}  style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/images/IMG_7619.jpg" />
                    <Card.Body style={{ backgroundColor:'#faebe5'}}>
                        <Card.Title style={{ color:'#883f4f'}}>Maquillaje para Eventos</Card.Title>
                            <Button variant="outline-light" href="/event-page" style={{ backgroundColor:'#883f4f'}}>Detalles</Button>
                    </Card.Body>
            </Card>
        </Container>
        <Container>
        <Card className={"text-center border-card"}  style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/images/IMG_7620.jpg" />
                    <Card.Body style={{ backgroundColor:'#faebe5'}}>
                        <Card.Title style={{ color:'#883f4f'}}>Maquillaje de Graduación</Card.Title> 
                            <Button variant="outline-light" href="/prom-page" style={{ backgroundColor:'#883f4f'}}>Detalles</Button>
                    </Card.Body>
            </Card>
        </Container>
        <Container>
        <Card className={"text-center border-card"}  style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/images/IMG_7628.jpg" />
                    <Card.Body style={{ backgroundColor:'#faebe5'}}>
                        <Card.Title style={{ color:'#883f4f'}}>Maquillaje de Fotografía</Card.Title>
                            <Button variant="outline-light" href="/photoshoot-page" style={{ backgroundColor:'#883f4f'}}>Detalles</Button>
                    </Card.Body>
            </Card>
        </Container>
          
        </Container>
    )
}

export default Services;