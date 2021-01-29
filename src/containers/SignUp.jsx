import React from 'react';
import axios from 'axios';
import { Container, Card, Form, Button} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import './styles.scss';

const SignUp = () => {
    const history = useHistory();

    //··SIGN UP··//
    const handleSubmit = async (event) => {
        console.log('registrado');
        try {
            event.preventDefault();
            const form = event.target;
            const user = {
                name: form.name.value,
                email: form.email.value,
                password: form.password.value,
            };
            console.log(user);
            const url = "http://127.0.0.1:8000/api/auth/signup"
            await axios.post(url,user);
            console.log({message: 'Registrado'});
            history.push('/login');
        } catch (error) {
            console.log({message: 'ERROR'});
        }

    }

    return (
        <>
        <div className="container" style={{color:'#faebe5'}} ><h4>!CREA TU CUENTA PARA PODER PEDIR TU CITA CON NOSOTROS!</h4></div>
        <Container className={"d-flex align-content-center mt-5 container"}>
        
           
            <Card>
                <Card.Body className="cardBody">
                    <h2 className={"text-center"}>Sign Up</h2>

                    <Form className="form" onSubmit={handleSubmit}>
                        <Form.Group  id={"name"}>
                            <Form.Label> Nombre</Form.Label>
                            <br/>
                            <input className="input" type="text" name="name" required />
                        </Form.Group>
                        <Form.Group id={"email"}>
                            <Form.Label>Email</Form.Label>
                            <br/>
                            <input className="input" type="email" name="email" required />
                            
                        </Form.Group>
                        <Form.Group id={"password"}>
                            <Form.Label>Password</Form.Label>
                            <br/>
                            <input className="input" type="password" name="password" required />
                            
                        </Form.Group>
                        <Button variant="outline-light" style={{ backgroundColor:'#883f4f'}} className={"w-100 botonPrimario"} type="submit">Sign Up</Button>
                    </Form>

                </Card.Body>
            </Card>
           
           
        </Container>

        </>
       
    )
}
export default SignUp;