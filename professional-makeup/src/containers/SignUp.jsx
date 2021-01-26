import React from 'react';
import axios from 'axios';
import { Container, Card, Form, Button} from "react-bootstrap";
<<<<<<< HEAD
import { Link, useHistory } from "react-router-dom";
=======
import { Link } from "react-router-dom";
>>>>>>> 646694ad9f03ed48372f882e31ff8d94c84e73d9
import './styles.scss';

const SignUp = () => {
    const history = useHistory();

    const handleSubmit = async (event) => {
        console.log('registrado')
        try {
            event.preventDefault();
            //const form = event.target;
            const user = {
                name: event.target.name.value,
                email: event.target.email.value,
                password: event.target.password.value,
            };
            console.log(user);
            //const url = "http://127.0.0.1:8001/api/auth/signup"
            
            await axios.post('http://127.0.0.1:8000/api/auth/signup',user)
            console.log({message: 'Registrado'})
            history.push('/login')
        } catch (error) {
            console.log({message: 'ERROR'})
        }

    }

    return (
        <>
        <h4>!CREA TU CUENTA PARA PODER PEDIR TU CITA CON NOSOTROS!</h4>
        <Container className={"d-flex align-content-center mt-5 container"}>
            
            <div className="w100" style={{maxWidth: '100vw'}}>
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
            <div className={"text-center"}>
                Si ya tienes cuenta haz clcik aquí: <Link style={{ color:'#883f4f'}} className={"text-center"} to={'/login'}>Login</Link>
            </div>
            </div>
        </Container>

        </>
       
    )
}
export default SignUp;