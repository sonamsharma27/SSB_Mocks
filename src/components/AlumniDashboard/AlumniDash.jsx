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
import SrtResponse from './SrtResponse';
import PpdtResponse from './PpdtResponse';
import WatResponse from './WatResponse';
import TatResponse from './TatResponse';

export default function AlumniDash({children}) {

    const[isOpen ,setIsOpen] = useState(false);
    const [active, setActive] = useState("");
    // const toggle = () => setIsOpen (!isOpen);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
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

                    <div className={`${active === "response" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive(toggle)}>
                    Response

                    
                    </div>
                    <div className='responselist' style={{display: isOpen ? "block" : "none"}}>
                        <div className={`${active === "srtresponse" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive("srtresponse")}>Srt</div>
                        <div className={`${active === "ppdtresponse" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive("ppdtresponse")}>Ppdt</div>
                        <div className={`${active === "watresponse" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive("watresponse")}>Wat</div>
                        <div className={`${active === "tatresponse" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive("tatresponse")}>Tat</div>
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

           <div className={`${active === "srtresponse" ? "displaymaincont"
              : "d-none"}`}>
                    <SrtResponse />
           </div>

           <div className={`${active === "ppdtresponse" ? "displaymaincont"
              : "d-none"}`}>
                    <PpdtResponse />
           </div>

           <div className={`${active === "watresponse" ? "displaymaincont"
              : "d-none"}`}>
                    <WatResponse />
           </div>

           <div className={`${active === "tatresponse" ? "displaymaincont"
              : "d-none"}`}>
                    <TatResponse />
           </div>
           <div className={`${active === "alumnitestmaterial" ? "displaymaincont"
              : "d-none"}`}>
                    <AlumniTestMaterial />
           </div>


        </div>

    </>
  )
}
