import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom"
import {
    FaBars,
    
} from "react-icons/fa";
import pic9 from '/ssb/ssb_mocks/src/images/pic9.jpg'
import AlumniTestMaterial from './AlumniTestMaterial';
import Response from '../Response/Response';
import './AlumniDash.css'

export default function AlumniDash({children}) {

    const[isOpen ,setIsOpen] = useState(false);
    const [active, setActive] = useState("");
    const toggle = () => setIsOpen (!isOpen);
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">SSB Mocks</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className="maincont">
           <div className="sidebardiv">
                    <div className={`${active === "alumnidash" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive("alumnidash")}>
                        AlumniHome
                    </div>

                    <div className={`${active === "response" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive("response")}>
                    Response
                    </div>

                    <div className={`${active === "alumnitestmaterial" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive("alumnitestmaterial")}>
                    Add Test Material
                    </div>
           </div>
           <div className={`${active === "alumnidash" ? "displaymaincont"
              : "d-none"}`}>
                    AlumniHome
           </div>
           <div className={`${active === "response" ? "displaymaincont"
              : "d-none"}`}>
                    Response
           </div>
           <div className={`${active === "alumnitestmaterial" ? "displaymaincont"
              : "d-none"}`}>
                    <AlumniTestMaterial />
           </div>
        </div>

    {/* <img src={pic9} alt="Army" srcset="" /> */}
    </>
  )
}
