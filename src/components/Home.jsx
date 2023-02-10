import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import user from '../images/user.png';
import pic1 from '../images/pic1.jpg'
import pic2 from '../images/pic2.jpg'
import pic3 from '../images/pic3.jpg'
import { NavLink } from "react-router-dom"
import Carl from './Carl.jsx'
function CarouselFadeExample() {
  return (
    <>
    {/* <Carousel fade>
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
    </Carousel> */}
    <Carl></Carl>

    <div className='mainGrid'>
        <div className='grid1'>
        <NavLink to="/signup">
                <img src={user} alt="student"/>
                <h4>Login as Student</h4>
        </NavLink>
        </div>

        <div className='grid1'>
        <NavLink to="/signup">
                <img src={user} alt="student"/>
                <h4>Login as Alumni</h4>
        </NavLink>
        </div>

        <div className='grid1'>
            <NavLink to="/login">
                <img src={user} alt="student"/>
                <h4>Login as Admin</h4>
            </NavLink>
        
        
        </div>
    </div>
    </>
  );
}

export default CarouselFadeExample;