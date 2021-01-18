import React from 'react';
import {Navbar} from 'react-bootstrap';
//import {Link} from 'react-router-dom';


const Footer = () => {
      
    return (
       
        <>
            <Navbar className={"mt-5"} style={{backgroundColor: '#883f4f'}}>

                <Navbar.Collapse  className="justify-content-center">
                <Navbar.Brand style={{ color: '#e9c5c7'}}>Contacto: professsionalmakeupartist@gmail.com</Navbar.Brand>
                </Navbar.Collapse>

            </Navbar>

        </>
       

    )
}
export default Footer;