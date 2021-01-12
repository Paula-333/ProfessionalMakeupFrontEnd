import React from 'react';
import {Carousel, Container} from 'react-bootstrap';
import {useState} from 'react';
import './Home.css';
//import '../../images/';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
     <>
     <Container fluid className={"d-flex align-content-center mt-5 container"}>
     <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/564x/c7/25/19/c72519b4b7753670c86d7219b3fe09d6.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>MAQUILLAJE DE NOVIA</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/564x/18/5a/e3/185ae331b2a80fdd581b6456b4bedd42.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>MAQUILLAJE PARA GRADUACIÓN</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/564x/e5/d8/72/e5d872dce2724f314fb93b6d0406f2a3.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>MAQUILLAJE EVENTO DE DIA</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/564x/21/70/cb/2170cbd3d3f0442713acc2cd5a435c9a.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>MAQUILLAJE EVENTO DE NOCHE</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     </Container>
     </>
    );
  }
  
  //render(<ControlledCarousel />);
  export default ControlledCarousel