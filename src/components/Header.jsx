import React from 'react';
import {Navbar, Dropdown, DropdownButton } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import { useLocation } from 'react-router-dom';


import './style.scss';

const Header = (props) => {

    const history = useHistory();
    const location = useLocation();
    console.log(location)
    let email = localStorage.getItem('email');
    console.log(email)

    const logout = ()=>{
        localStorage.clear();
        props.setUser(null)
        history.push("/"); 
    }

    return (
       
        <>
        {console.log('renderizando')}
            <Navbar id="header" style={{backgroundColor: '#883f4f'}}>
              
                <Navbar.Brand href="/" className="logo"><img  alt="" src="/images/logo.jpg"></img></Navbar.Brand>

                {email?
                    <>

                <Navbar.Collapse  className="justify-content-center">
                <Navbar.Brand style={{ color: '#e9c5c7'}} href="/services">Servicios</Navbar.Brand>
                <Navbar.Brand style={{ color: '#e9c5c7'}} href="/gallery">Nuestro Trabajo</Navbar.Brand>
                </Navbar.Collapse>
                
                <Navbar.Collapse>
                <Navbar.Brand style={{ color: '#e9c5c7'}} href="/profile" >Perfil</Navbar.Brand>
                <Navbar.Brand style={{ color: '#e9c5c7'}} href="/appointment" >Pedir Cita</Navbar.Brand>
                <Navbar.Brand style={{ color: '#e9c5c7'}} onClick={logout}>Logout</Navbar.Brand>
                </Navbar.Collapse>
                <Navbar.Collapse  className="justify-content-end">
                    <DropdownButton variant="outline-light"  id="dropdown-basic-button" title="MENU">
                        <Dropdown.Item style={{ color: '#883f4f'}} href="/">Home</Dropdown.Item>
                        <Dropdown.Item style={{ color: '#883f4f'}} href="/login">Login</Dropdown.Item>
                        <Dropdown.Item style={{ color: '#883f4f'}} href="/signup">Sign Up</Dropdown.Item>
                    </DropdownButton>
                </Navbar.Collapse>
                    </>:
                    <>
                    <Navbar.Collapse  className="justify-content-center">
                <Navbar.Brand style={{ color: '#e9c5c7'}} href="/services">Servicios</Navbar.Brand>
                <Navbar.Brand style={{ color: '#e9c5c7'}} href="/gallery">Nuestro Trabajo</Navbar.Brand>
                </Navbar.Collapse>
                    <Navbar.Collapse  className="justify-content-end">
                    <DropdownButton variant="outline-light"  id="dropdown-basic-button" title="MENU">
                        <Dropdown.Item style={{ color: '#883f4f'}} href="/">Home</Dropdown.Item>
                        <Dropdown.Item style={{ color: '#883f4f'}} href="/login">Login</Dropdown.Item>
                        <Dropdown.Item style={{ color: '#883f4f'}} href="/signup">Sign Up</Dropdown.Item>
                    </DropdownButton>
                </Navbar.Collapse>
                    </>
                }       
                
                
            </Navbar>

        </>
       
    )
}
export default Header;