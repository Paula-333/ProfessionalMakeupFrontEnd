import React from 'react';
import { Container} from "react-bootstrap";
//···IMPORTANDO COMPONENTE···//
import ServicesCard from '../components/ServicesCard';


const Services = () => {

    return(
        <Container className={"mt-5 services"} >

            <ServicesCard img='/images/IMG_7641.jpg' name='Maquillaje para Novias' path='/wedding-page'/>
            <ServicesCard img='/images/IMG_7619.jpg' name='Maquillaje para Eventos' path='/event-page'/>
            <ServicesCard img='/images/IMG_7620.jpg' name='Maquillaje de Graduación' path='/prom-page'/>
            <ServicesCard img='/images/IMG_7628.jpg' name='Maquillaje de Fotografía' path='/photoshoot-page'/>

        </Container>
    )
}

export default Services;