import React from "react";
import Carousel from 'react-bootstrap/Carousel';
// import user from '../images/user.png';
import pic1 from '/ssb/ssb_mocks/src/images/pic1.jpg'
import pic2 from '/ssb/ssb_mocks/src/images/pic2.jpg'
import pic3 from '/ssb/ssb_mocks/src/images/pic3.jpg'
import { NavLink } from "react-router-dom"

export default function Wat_test() {
    return(

        <>
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic1}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic2}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic3}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
        
    )
}