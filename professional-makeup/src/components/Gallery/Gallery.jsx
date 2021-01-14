import React from 'react';
import {Container, Col, Row, Image} from 'react-bootstrap';
//import {useState} from 'react';



const Gallery = () => {


    return(
        <Container className={"mt-5"}>

        <Row md={4}>
        <Col xs={6} md={4}>
        <Image src="/images/IMG_7606.jpg" style={{ backgroundColor:'#883f4f'}} thumbnail />
        </Col>
        <Col xs={6} md={4}>
        <Image src="/images/IMG_7620.jpg" style={{ backgroundColor:'#883f4f'}} thumbnail />
        </Col>
        <Col xs={6} md={4}>
        <Image src="/images/IMG_7621.jpg" style={{ backgroundColor:'#883f4f'}} thumbnail />
        </Col>
        <Col xs={6} md={4}>
        <Image src="/images/IMG_7622.jpg" style={{ backgroundColor:'#883f4f'}} thumbnail />
        </Col>
        <Col xs={6} md={4}>
        <Image src="/images/IMG_7617.jpg" style={{ backgroundColor:'#883f4f'}} thumbnail />
        </Col>
        <Col xs={6} md={4}>
        <Image src="/images/IMG_7624.jpg" style={{ backgroundColor:'#883f4f'}} thumbnail />
        </Col>
        <Col xs={6} md={4}>
        <Image src="/images/IMG_7611.jpg" style={{ backgroundColor:'#883f4f'}} thumbnail />
        </Col>
        <Col xs={6} md={4}>
        <Image src="/images/IMG_7612.jpg" style={{ backgroundColor:'#883f4f'}}  thumbnail />
        </Col>
        <Col xs={6} md={4}>
        <Image src="/images/IMG_7613.jpg" style={{ backgroundColor:'#883f4f'}} thumbnail />
        </Col>
        <Col xs={6} md={4}>
        <Image src="/images/IMG_7618.jpg" style={{ backgroundColor:'#883f4f'}} thumbnail />
        </Col>
        <Col xs={6} md={4}>
        <Image src="/images/IMG_7619.jpg" style={{ backgroundColor:'#883f4f'}} thumbnail />
        </Col>
        <Col xs={6} md={4}>
        <Image src="/images/IMG_7628.jpg" style={{ backgroundColor:'#883f4f'}} thumbnail />
        </Col>
        <Col xs={6} md={4}>
        <Image src="/images/IMG_7627.jpg" style={{ backgroundColor:'#883f4f'}} thumbnail />
        </Col>
        <Col xs={6} md={4}>
        <Image src="/images/IMG_7629.jpg" style={{ backgroundColor:'#883f4f'}} thumbnail />
        </Col>
        <Col xs={6} md={4}>
        <Image src="/images/prom.jpg" style={{ backgroundColor:'#883f4f'}} thumbnail />
        </Col>
          
        </Row>
        
      </Container>
    )
}

export default Gallery;