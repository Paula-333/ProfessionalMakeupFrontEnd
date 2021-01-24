import React from 'react';
import {Container, Table} from "react-bootstrap";

import './styles.scss'

const Profile = (props) => {
    //const [user, setUser] = useState(null);

    props.setUser()

    let email = localStorage.getItem('email');
 
    return (    
        
        <Container className="profile">
            <Container>
                {email?
                    <>
                        <span className="email">{email}</span>
                    </>:
                    <>
                        <span>hola</span>
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
                   <td>Mark</td>
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