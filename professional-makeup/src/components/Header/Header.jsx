import React from 'react';
import {Navbar} from 'react-bootstrap';
//import {Link} from 'react-router-dom';

import './Header.css';

const Header = () => {
      
    return (
       
        <>
            <Navbar style={{backgroundColor: '#e9c5c7'}}>
              
                <Navbar.Brand href="/home" className="logo"><img  alt="" src="/images/profesional.jpg"></img></Navbar.Brand>

                <Navbar.Collapse  className="justify-content-center">
                <Navbar.Brand style={{ color: '#883f4f'}} href="/services">Servicios</Navbar.Brand>
                <Navbar.Brand style={{ color: '#883f4f'}} href="/gallery">Nuestros Trabajos</Navbar.Brand>
                </Navbar.Collapse>

                <Navbar.Collapse  className="justify-content-end">
                <Navbar.Brand style={{ color: '#883f4f'}} href="/login" >Login</Navbar.Brand>
                <Navbar.Brand style={{ color: '#883f4f'}}href="/signup" >Sign Up</Navbar.Brand>
                </Navbar.Collapse>

            </Navbar>

        </>
       
    )
}
export default Header;