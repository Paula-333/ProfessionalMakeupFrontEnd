import  React from 'react';
import { Container, Card, Button} from "react-bootstrap";

import './style.scss'

const ServicesCard = (props) => {
    
    return(
        
        <Container>
        <Card className={"text-center border-card"}  style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                    <Card.Body style={{ backgroundColor:'#faebe5'}}>
                        <Card.Title style={{ color:'#883f4f'}}>{props.name}</Card.Title>
                        <Button variant="outline-light" href={props.path} style={{ backgroundColor:'#883f4f'}}>Detalles</Button>   
                    </Card.Body>
            </Card>
        </Container>
        
    )
};

export default ServicesCard;
