import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Table, Button} from "react-bootstrap";

import './styles.scss'

const Profile = () => {
    
    let email = localStorage.getItem('email');

    const[dataProfile, setDataProfile]= useState([]);
    

    //··BORRAR CITA PASANDO PARAMETRO ID··//
    const deleteAppointment = async(id) =>{

        const res = await axios.get(`http://127.0.0.1:8000/api/auth/deleteAppointment/${id}`);
        console.log(res);
        //··FILTER PARA QUE DESAPAREZCA LA CITA NADA MAS PULSAR EL BOTÓN··//
        setDataProfile(dataProfile.filter(appo=> appo.id !== id)); 
    }

    //··TRAER DATOS DE PERFIL··//
   const getProfile = async () => {
        
        let userId = localStorage.getItem('user_id');
        const res = await axios.get(`http://127.0.0.1:8000/api/auth/profile/${userId}`);
        console.log(res);
        setDataProfile(res.data);
    }

    useEffect (()=>{
        getProfile();
    },[]);
   
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
                    <th hidden>id</th>
                    <th>Nombre</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Maquillaje</th>
                </tr>
            </thead>
            <tbody>
                {dataProfile.map((d, i) => { //PINTANDO LOS DATOS TRAIDOS DE PERFIL EN LA TABLA
                return (
                    <tr key={i}>
                        <td hidden>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.date}</td>
                        <td>{d.hour}</td>
                        <td>{d.makeup_name}</td>
                        <td><Button variant="outline-light" style={{ backgroundColor:'#883f4f'}} onClick={() => deleteAppointment(d.id)}>Eliminar</Button></td>
                        
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