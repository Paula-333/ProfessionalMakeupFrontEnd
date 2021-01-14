import React from 'react';
import {Navbar} from 'react-bootstrap';
//import {Link} from 'react-router-dom';

import './Header.css';

const Header = () => {
      
    return (
       
        <>
            <Navbar style={{backgroundColor: '#883f4f'}}>
              
                <Navbar.Brand href="/home" className="logo"><img  alt="" src="/images/logo.jpg"></img></Navbar.Brand>

                <Navbar.Collapse  className="justify-content-center">
                <Navbar.Brand style={{ color: '#e9c5c7'}} href="/services">Servicios</Navbar.Brand>
                <Navbar.Brand style={{ color: '#e9c5c7'}} href="/gallery">Nuestro Trabajo</Navbar.Brand>
                </Navbar.Collapse>

                <Navbar.Collapse  className="justify-content-end">
                <Navbar.Brand style={{ color: '#faebe5'}} href="/login" >Login</Navbar.Brand>
                <Navbar.Brand style={{ color: '#faebe5'}}href="/signup" >Sign Up</Navbar.Brand>
                </Navbar.Collapse>

            </Navbar>

        </>
       
    )
}
export default Header;