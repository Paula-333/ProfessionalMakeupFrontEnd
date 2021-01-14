import React from 'react';
import { Container, Card, Button} from "react-bootstrap";
//import { Link } from "react-router-dom";
import './Services.css'

const Services = () => {

    return(
        <Container className={"text-center mt-5"} >
            <Card className="border-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/images/IMG_7641.jpg" />
                    <Card.Body style={{ backgroundColor:'#faebe5'}}>
                        <Card.Title style={{ color:'#883f4f'}}>Maquillaje para Novias</Card.Title>
                            <Card.Text>
                            El maquillaje de novia siempre es personalizado, buscando un maquillaje favorecedor acorde con el estilo y gusto de la novia.
                            </Card.Text>
                            <Button variant="outline-light" style={{ backgroundColor:'#883f4f'}}>Cita</Button>
                    </Card.Body>
            </Card>
            <Card className="border-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/images/IMG_7619.jpg" />
                    <Card.Body style={{ backgroundColor:'#faebe5'}}>
                        <Card.Title style={{ color:'#883f4f'}}>Maquillaje para Eventos</Card.Title>
                            <Card.Text>
                                Holi
                            </Card.Text>
                            <Button variant="outline-light" style={{ backgroundColor:'#883f4f'}}>Cita</Button>
                    </Card.Body>
            </Card>
            <Card className="border-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/images/IMG_7620.jpg" />
                    <Card.Body style={{ backgroundColor:'#faebe5'}}>
                        <Card.Title style={{ color:'#883f4f'}}>Maquillaje de Graduación</Card.Title>
                            <Card.Text>
                                Holi
                            </Card.Text>
                            <Button variant="outline-light" style={{ backgroundColor:'#883f4f'}}>Cita</Button>
                    </Card.Body>
            </Card>
            <Card className="border-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/images/IMG_7628.jpg" />
                    <Card.Body style={{ backgroundColor:'#faebe5'}}>
                        <Card.Title style={{ color:'#883f4f'}}>Maquillaje de Fotografía</Card.Title>
                            <Card.Text>
                            Abarcamos muchos campos como fotografía de moda, publicidad, catálogos o books de modelo, incluyendo también el maquillaje de hombre.
                            </Card.Text>
                            <Button variant="outline-light" style={{ backgroundColor:'#883f4f'}}>Cita</Button>
                    </Card.Body>
            </Card>
        </Container>
    )
}

export default Services;