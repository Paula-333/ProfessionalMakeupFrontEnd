import React from 'react';
import {Navbar} from 'react-bootstrap';
//import {Link} from 'react-router-dom';

import './Footer.css';

const Footer = () => {
      
    return (
       
        <>
            <Navbar className={"mt-5"} style={{backgroundColor: '#e9c5c7'}}>

                <Navbar.Collapse  className="justify-content-end">
                <Navbar.Brand style={{ color: '#883f4f'}}>Contacto: professsionalmakeupartist@gmail.com</Navbar.Brand>
                </Navbar.Collapse>

            </Navbar>

        </>
       

    )
}
export default Footer;