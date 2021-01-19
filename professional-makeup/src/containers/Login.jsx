import React, {useState } from 'react';
import axios from 'axios';
import { Container, Card, Form, Button} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import './styles.scss';

const Login = (props) => {
    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleSubmit = async (event) => {

        try {
            event.preventDefault();
            const url = "http://127.0.0.1:8001/api/auth/login"
            const res = await axios.post(url, {email,password})
            localStorage.setItem('token',res.data.token)
            
            props.setUser(res.data.user)
            history.push('/')
        } catch (error) {
            console.log('ERROR')
           
        }
    }
    return (
       
        <>

        <Container className={"d-flex align-content-center mt-5 container"}>
            <div className="w100" style={{maxWidth: '100vw'}}>
            <Card style={{ width: '16rem' }}>
                <Card.Body className="cardBody">
                    <h2 className={"text-center"}>Login</h2>

                    <Form className="form" onSubmit={handleSubmit}>
                        <Form.Group id={"email"}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type={"email"} onChange={event=>setEmail(event.target.value)} value={email} required/>
                        </Form.Group>
                        <Form.Group id={"password"}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type={"password"} onChange={event=>setPassword(event.target.value)}  value={password}  required/>
                        </Form.Group>
                        <Button variant="outline-light" style={{ backgroundColor:'#883f4f'}} className={"w-100 botonPrimario"} type={"submit"}>Login</Button>
                    </Form>
                    
                </Card.Body>
            </Card>
            <div className={"text-center"}>
                Crea tu cuenta aquí: <Link style={{ color:'#883f4f'}} className={"text-center"} to={'/signup'}>Sign Up</Link>
            </div>
            </div>
        </Container>

        </>
       
    )
}
export default Login;