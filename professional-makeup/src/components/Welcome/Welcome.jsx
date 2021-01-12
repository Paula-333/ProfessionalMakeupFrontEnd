import React from 'react';
import { Card } from "react-bootstrap";
import SignUp from '../../containers/SignUp';


const Welcome = () => {
      
    return (
        
        <>

        <Card className="text-center" style={{ color: '#883f4f', backgroundColor: '#faebe5' }}>
             <Card.Body>
             <Card.Title><h4>¡Regístrate y echa un ojo a tus looks favoritos y reserva tu cita!</h4></Card.Title>
             </Card.Body>
        </Card>
        
        <SignUp></SignUp>

        </>
    )
}
export default Welcome;