import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import user from '../images/user.png';
import pic1 from '../images/pic1.jpg'
import pic2 from '../images/pic2.jpg'
import pic3 from '../images/pic3.jpg'
import { NavLink } from "react-router-dom"

function CarouselFadeExample() {
  return (
    <>
  
    <Carousel fade indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"https://m.economictimes.com/thumb/msid-95129371,width-1599,height-886,resizemode-4,imgsize-142484/srinagar-enactment-of-air-landed-operations-of-the-indian-army-which-ensured-vi-.jpg"}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"https://images.thequint.com/thequint%2F2020-07%2Fc8b5b0b2-5ab9-4aea-8ae7-1e9f431c5afe%2F2020_7_img28_Jul_2020_PTI28_07_2020_000074B.jpg?rect=0%2C0%2C3776%2C2124&auto=format%2Ccompress&fmt=webp&width=720"}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"https://static.theprint.in/wp-content/uploads/2020/02/Indian-Army-4.jpg?compress=true&quality=80&w=800&dpr=1.3"}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    <div className='mainGrid'>
        <div className='grid1'>
        <NavLink to="/signup">
                <img src={user} alt="student"/>
                <h4>Login as Student</h4>
        </NavLink>
        </div>

        <div className='grid1'>
        <NavLink to="/alu_signup">
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