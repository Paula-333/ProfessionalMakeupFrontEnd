import React from 'react';
import {Navbar, Dropdown, DropdownButton} from 'react-bootstrap';
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
                    <DropdownButton variant="outline-light"  id="dropdown-basic-button" title="MENU">
                        <Dropdown.Item style={{ color: '#883f4f'}} href="/home">Home</Dropdown.Item>
                        <Dropdown.Item style={{ color: '#883f4f'}} href="/login">Login</Dropdown.Item>
                        <Dropdown.Item style={{ color: '#883f4f'}} href="/signup">Sign Up</Dropdown.Item>
                        <Dropdown.Item style={{ color: '#883f4f'}} href="/profile">Perfil</Dropdown.Item>
                        <Dropdown.Item style={{ color: '#883f4f'}} href="/appointment">Cita</Dropdown.Item>
                    </DropdownButton>
                </Navbar.Collapse>

            </Navbar>

        </>
       
    )
}
export default Header;