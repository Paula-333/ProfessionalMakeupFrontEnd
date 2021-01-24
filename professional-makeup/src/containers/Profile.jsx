import axios from 'axios';
import React from 'react';
import {Container, Table} from "react-bootstrap";

import './styles.scss'

const Profile = (props) => {
    
    props.setUser()
    let email = localStorage.getItem('email');

    const getProfile = async () => {

      try{
        let idUser = localStorage.getItem('user_id');
        const res = await axios.get(`http://127.0.0.1:8000/api/auth/user/${idUser}`);
        console.log(res);
      } catch{
        console.log({message: 'ERROR'})
      }
    }
 
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
            
            <Container style={{width: '50vw'}} className={"mt-5"}>
           
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
               <tr>
                   <td>1</td>
                   <td>{getProfile}</td>
                   <td>Otto</td>
                   <td>@mdo</td>
               </tr>
           </tbody>
       </Table>
       </Container>
        </Container>
        
        
        
    
    )
}

export default Profile;