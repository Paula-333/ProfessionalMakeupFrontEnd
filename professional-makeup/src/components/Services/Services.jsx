import React from 'react';
import { Container, Card, Button} from "react-bootstrap";

import './Services.css'


const Services = () => {

    return(
        <Container className={"text-center mt-5"} >
            <Card className="border-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/images/IMG_7641.jpg" />
                    <Card.Body style={{ backgroundColor:'#faebe5'}}>
                        <Card.Title style={{ color:'#883f4f'}}><h4>Maquillaje para Novias</h4></Card.Title>
                        <Button variant="outline-light" href="/wedding-page" style={{ backgroundColor:'#883f4f'}}>Detalles</Button>   
                    </Card.Body>
            </Card>
            <Card className="border-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/images/IMG_7619.jpg" />
                    <Card.Body style={{ backgroundColor:'#faebe5'}}>
                        <Card.Title style={{ color:'#883f4f'}}><h4>Maquillaje para Eventos</h4></Card.Title>
                            <Button variant="outline-light" href="/event-page" style={{ backgroundColor:'#883f4f'}}>Detalles</Button>
                    </Card.Body>
            </Card>
            <Card className="border-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/images/IMG_7620.jpg" />
                    <Card.Body style={{ backgroundColor:'#faebe5'}}>
                        <Card.Title style={{ color:'#883f4f'}}><h4>Maquillaje de Graduación</h4></Card.Title> 
                            <Button variant="outline-light" href="/prom-page" style={{ backgroundColor:'#883f4f'}}>Detalles</Button>
                    </Card.Body>
            </Card>
            <Card className="border-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/images/IMG_7628.jpg" />
                    <Card.Body style={{ backgroundColor:'#faebe5'}}>
                        <Card.Title style={{ color:'#883f4f'}}><h4>Maquillaje de Fotografía</h4></Card.Title>
                            <Button variant="outline-light" href="/photoshoot-page" style={{ backgroundColor:'#883f4f'}}>Detalles</Button>
                    </Card.Body>
            </Card>
        </Container>
    )
}

export default Services;