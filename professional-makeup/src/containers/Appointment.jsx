import React from 'react';
import axios from 'axios';
import {Container, Card, Form, Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import './styles.scss'


const Appointment = () => {
    const history = useHistory();

    const handleSubmit = async (event) => {

        try {
            event.preventDefault();
            
            const appointment = {
                date: event.target.date.value,
                hour: event.target.hour.value,
            }
            console.log(appointment);
            
            const url = "http://127.0.0.1:8002/api/auth/appointment"
            
            await axios.post(url, appointment, {headers:{'Access-Control-Allow-Origin':'*'}})
            console.log({message: 'Cita creada'})
            history.push('/profile')
        } catch (error) {
            console.log({message: 'ERROR'})
        }

    }

    return(
        <>

        <Container className={"d-flex align-content-center mt-5 container"}>
           
            <Card style={{ width: '25rem' }}>
                <Card.Body className="cardBody">
                    <h2 className={"text-center"}>Pide Cita</h2>

                    <Form className="form" onSubmit={handleSubmit}>
                        <Form.Group id={"date"}>
                            <Form.Label>Fecha</Form.Label>
                            <br/>
                            <input className="input" type="date" name="date" required />
                        </Form.Group>
                        <Form.Group id={"hour"}>
                            <Form.Label>Hora</Form.Label>
                            <br/>
                            <input className="input" type="time" name="hour" required />
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