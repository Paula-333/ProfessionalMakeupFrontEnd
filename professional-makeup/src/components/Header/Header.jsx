import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './Header.css';

const Header = () => {
      
    return (
       
        <>
            <Navbar style={{backgroundColor: '#e9c5c7'}} >
                <Navbar.Brand href="/welcome" className="logo"></Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Nav.Link><a href="#login">Login</a></Nav.Link>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Nav.Link><a href="#login">Sign Up</a></Nav.Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>

        </>
       

    )
}
export default Header;