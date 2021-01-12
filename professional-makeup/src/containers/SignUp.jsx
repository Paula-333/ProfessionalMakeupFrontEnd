import React from 'react';
import { Container, Card, Form, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import './styles.css';

const SignUp = () => {
      
    return (
        <>

        <Container className={"d-flex align-content-center mt-5 container"}>
            <div className="w100" style={{maxWidth: '100vw'}}>
            <Card>
                <Card.Body className="cardBody">
                    <h2 className={"text-center"}>Sign Up</h2>

                    <Form className="form">
                        <Form.Group id={"name"}>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type={"name"} required/>
                        </Form.Group>
                        <Form.Group id={"email"}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type={"email"} required/>
                        </Form.Group>
                        <Form.Group id={"password"}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type={"password"} required/>
                        </Form.Group>
                        <Button style={{ backgroundColor:'#883f4f'}} className={"w-100 botonPrimario"} type={"submit"}>Sign Up</Button>
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