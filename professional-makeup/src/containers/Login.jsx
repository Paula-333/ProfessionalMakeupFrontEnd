
import React, {useState } from 'react';
import axios from 'axios';
import { Container, Card, Form, Button} from "react-bootstrap";
<<<<<<< HEAD
import { Link, useHistory } from "react-router-dom";
import './styles.scss';


const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
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

    const handleSubmit = async (event) => {
=======
import { Link } from "react-router-dom";
import './styles.scss';
>>>>>>> 646694ad9f03ed48372f882e31ff8d94c84e73d9

        try {
            event.preventDefault();
            const url = "http://127.0.0.1:8000/api/auth/login"
            const res = await axios.post(url, {email,password})
            localStorage.setItem('token',res.data.access_token)
            localStorage.setItem('email', email);   
            getEmail();   
            history.push('/')
        } catch (error) {
            console.log('ERROR')
           
        }
    }
    return (
       
        <>

        <Container className={"d-flex align-content-center mt-5 container"} style={{height: '61vh'}}>
            <div className="w100" style={{maxWidth: '100vw'}}>
            <Card style={{ width: '16rem' }}>
                <Card.Body className="cardBody">
                    <h2 className={"text-center"}>Login</h2>

                    <Form className="form" onSubmit={handleSubmit}>
                        <Form.Group id={"email"}>
                            <Form.Label>Email</Form.Label>
                            <br/>
                            <input onChange={event=>setEmail(event.target.value)} value={email} className="input" type="email" name="email" required/>
                        </Form.Group>
                        <Form.Group id={"password"}>
                            <Form.Label>Password</Form.Label>
                            <br/>
                            <input onChange={event=>setPassword(event.target.value)}  value={password}   className="input" type="password" name="password" required />
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