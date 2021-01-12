import React from 'react';
import {Navbar} from 'react-bootstrap';
//import {Link} from 'react-router-dom';

import './Header.css';

const Header = () => {
      
    return (
       
        <>
            <Navbar style={{backgroundColor: '#e9c5c7'}}>

                <Navbar.Brand href="/welcome" className="logo"></Navbar.Brand>

                <Navbar.Collapse  className="justify-content-end">

                <Navbar.Brand style={{ color: '#883f4f'}} href="/login" >Login</Navbar.Brand>
                <Navbar.Brand style={{ color: '#883f4f'}}href="/signup" >Sign Up</Navbar.Brand>

                </Navbar.Collapse>

            </Navbar>

        </>
       

    )
}
export default Header;