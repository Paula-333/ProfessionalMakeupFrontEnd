
import React from 'react';
import axios from 'axios';
import {Container, Card, Form, Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import './styles.scss'


const Appointment = () => {
    const history = useHistory();

    const getEmail = async ()=>{
        try{
            let email = localStorage.getItem('email');
            const res = await axios.get(`http://127.0.0.1:8000/api/auth/user/${email}`);
            console.log(res);
            localStorage.setItem('user_id', res.data[0].id);
        }catch (error) {
            console.log({message: 'ERROR'})
        }
    }

    getEmail();

    const handleSubmit = async (event) => {
        let check = "";
        if(document.getElementById("1").checked){
            check = document.getElementById("1").value;
        }else if(document.getElementById("2").checked){
            check = document.getElementById("2").value;
        }else if(document.getElementById("3").checked){
            check = document.getElementById("3").value;
        }else{
            check = document.getElementById("4").value;

        }

           
        try {
            event.preventDefault();
            let user_id = localStorage.getItem('user_id');
            const appointment = {
                date: event.target.date.value,
                hour: event.target.hour.value,
                makeup_id: check,
                user_id: user_id,
            }
            console.log(appointment);
            
            const url = "http://127.0.0.1:8000/api/auth/appointment"
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
                        <Form.Group>
                            <Form.Label>Seleciona el tipo de maquillaje:</Form.Label>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Maquillaje para Novia" value="1" id="1"
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Maquillaje para Eventos" value="2" id="2"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Maquillaje para Graduación" value="3" id="3"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Maquillaje de Fotografía" value="4" id="4"/>
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