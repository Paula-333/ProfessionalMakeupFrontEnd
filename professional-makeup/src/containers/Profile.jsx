import React from 'react';
import {Container, Table} from "react-bootstrap";

import './styles.css';

const Profile = () => {
    return (
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
    )
}

export default Profile;