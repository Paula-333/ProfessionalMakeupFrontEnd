import axios from 'axios';
import React, { useState, useEffect} from 'react';
import {Container, Table} from "react-bootstrap";

import './styles.scss'

const Profile = (props) => {
    
    props.setUser()
    let email = localStorage.getItem('email');

    const[dataProfile, setDataProfile]= useState([]);

    useEffect (()=>{
        getProfile();
    })
   
   const getProfile = async () => {
        let userId = localStorage.getItem('user_id');
        axios.get(`http://127.0.0.1:8000/api/auth/profile/${userId}`)
        .then(res=>{setDataProfile(res.data)});
    }
   /* 
   
   const datosPerfil =  localStorage.getItem('datosPerfil');
   console.log(datosPerfil);

   const profileData = datosPerfil.map((m, i) => {
                return (
                    <tr key={i}>
                        <td>{m.date}</td>
                        <td>{m.hour}</td>
                        <td>{m.makeup_name}</td>
                        <td>{m.name}</td>
                    </tr>
                )
            })*/
   
 
    return (    
        

        <Container className="profile">

            <Container>
                {email?
                    <>
                        <span className="email" >{email}</span>
                    </>:
                    <>
                        <span>No estas logueado</span>
                    </>
                }       

            </Container>
            <Container>
            <Table style={{ backgroundColor:'#faebe5', color:'#883f4f'}} striped bordered hover variant="light">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Cita</th>
                    <th>Maquillaje</th>
                </tr>
            </thead>
            <tbody>
                {dataProfile.map((m, i) => {
                return (
                    <tr key={i}>
                        <td>{m.date}</td>
                        <td>{m.hour}</td>
                        <td>{m.makeup_name}</td>
                        <td>{m.name}</td>
                    </tr>
                )
            })}
            </tbody>
        </Table>
            </Container>
                
        </Container>
        
        
        
    
    )
}

export default Profile;