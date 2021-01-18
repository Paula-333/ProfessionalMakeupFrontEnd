import React from 'react';
import {Container, Card, Form, Button} from 'react-bootstrap';
//import {useState} from 'react';
import './styles.scss'


const Appointment = () => {
    return(
        <>

        <Container className={"d-flex align-content-center mt-5 container"}>
           
            <Card style={{ width: '25rem' }}>
                <Card.Body className="cardBody">
                    <h2 className={"text-center"}>Pide Cita</h2>

                    <Form className="form">
                        <Form.Group id={"date"}>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type={"date"} required/>
                        </Form.Group>
                        <Form.Group id={"hour"}>
                            <Form.Label>Hora</Form.Label>
                            <Form.Control type={"hour"} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Seleciona el tipo de maquillaje:</Form.Label>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Maquillaje para Novia" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Maquillaje para Eventos" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Maquillaje para Graduación" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Maquillaje de Fotografía" />
                                </Form.Group>
                        </Form.Group>
                        <Button variant="outline-light" style={{ backgroundColor:'#883f4f'}} className={"w-100 botonPrimario"} type={"submit"}>Pide Cita</Button>
                    </Form>
                    
                </Card.Body>
            </Card>

        </Container>

        </>
    )
}

export default Appointment;