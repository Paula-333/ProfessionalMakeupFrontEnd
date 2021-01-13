import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
//import {useState} from 'react';



const Gallery = () => {
    let photos = ['./images/IMG_7613', ];

    return(
        <Container className={"mt-5"}>

        <Row md={4}>
          <Col xs={6}><img  className="d-block w-100" src="/images/IMG_7606.jpg" alt=""/></Col>      
          <Col xs={6}><img  className="d-block w-100" src="/images/IMG_7611.jpg" alt=""/></Col>      
          <Col xs={6}><img  className="d-block w-100" src="/images/IMG_7612.jpg" alt=""/></Col>      
          <Col xs={6}><img  className="d-block w-100" src="/images/IMG_7613.jpg" alt=""/></Col>

          <Col xs={6}><img  className="d-block w-100" src="/images/IMG_7617.jpg" alt=""/></Col>
          <Col xs={6}><img  className="d-block w-100" src="/images/IMG_7618.jpg" alt=""/></Col>      
          <Col xs={6}><img  className="d-block w-100" src="/images/IMG_7619.jpg" alt=""/></Col>      
          <Col xs={6}><img  className="d-block w-100" src="/images/IMG_7620.jpg" alt=""/></Col>

          <Col xs={6}><img  className="d-block w-100" src="/images/IMG_7621.jpg" alt=""/></Col> 
          <Col xs={6}><img  className="d-block w-100" src="/images/IMG_7622.jpg" alt=""/></Col>
          <Col xs={6}><img  className="d-block w-100" src="/images/IMG_7624.jpg" alt=""/></Col>       
    
           

          <Col xs={6}><img  className="d-block w-100" src="/images/IMG_7627.jpg" alt=""/></Col>      
          <Col xs={6}><img  className="d-block w-100" src="/images/IMG_7628.jpg" alt=""/></Col>      
          <Col xs={6}><img  className="d-block w-100" src="/images/IMG_7629.jpg" alt=""/></Col> 
              
        </Row>
        
      </Container>
    )
}

export default Gallery;