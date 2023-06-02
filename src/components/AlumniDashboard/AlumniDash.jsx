import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom"
import {
    FaBars,
    
} from "react-icons/fa";
// import pic9 from '/ssb/ssb_mocks/src/images/pic9.jpg'
import AlumniTestMaterial from './AlumniTestMaterial';
import Response from '../Response/Response';
import './AlumniDash.css'
import SrtResponse from './SrtResponse';
import PpdtResponse from './PpdtResponse';
import WatResponse from './WatResponse';
import TatResponse from './TatResponse';
import GpeResponse from './GpeResponse';

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
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className="maincont">
           <div className="sidebardiv">
                 

                    <div className={`${active === "response" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive(toggle)}>
                    Feedback

                    
                    </div>
                    <div className='responselist' style={{display: isOpen ? "block" : "none"}}>
                        <div className={`${active === "srtresponse" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive("srtresponse")}>Situation Reaction Test</div>
                        <div className={`${active === "ppdtresponse" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive("ppdtresponse")}>Picture Perception Description Test</div>
                        <div className={`${active === "watresponse" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive("watresponse")}>Word Assocation Test</div>
                        <div className={`${active === "tatresponse" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive("tatresponse")}>Thematic Apperception Test</div>

                        <div className={`${active === "gperesponse" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive("gperesponse")}>Group Planning Exercise</div>
                    </div>
                    <div className={`${active === "alumnitestmaterial" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive("alumnitestmaterial")}>
                    Add Test Material
                    </div>
           </div>
           <div className={`${active === "alumnidash" ? "displaymaincontent"
              : "d-none"}`}>
                    AlumniHome
           </div>
           <div className={`${active === "response" ? "displaymaincontent"
              : "d-none"}`}>
                    Response
           </div>

           <div className={`${active === "srtresponse" ? "displaymaincontent"
              : "d-none"}`}>
                    <SrtResponse />
           </div>

           <div className={`${active === "ppdtresponse" ? "displaymaincontent"
              : "d-none"}`}>
                    <PpdtResponse />
           </div>

           <div className={`${active === "watresponse" ? "displaymaincontent"
              : "d-none"}`}>
                    <WatResponse />
           </div>

           <div className={`${active === "tatresponse" ? "displaymaincontent"
              : "d-none"}`}>
                    <TatResponse />
           </div>
           <div className={`${active === "gperesponse" ? "displaymaincontent"
              : "d-none"}`}>
                    <GpeResponse />
           </div>
           <div className={`${active === "alumnitestmaterial" ? "displaymaincontent"
              : "d-none"}`}>
                    <AlumniTestMaterial />
           </div>


        </div>

    </>
  )
}
