import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom"
import {
    FaBars,
    
} from "react-icons/fa";
// import pic9 from '/ssb/ssb_mocks/src/images/pic9.jpg'
import './Response.css'
import SrtFeedback from './SrtFeedback';
import PpdtFeedback from './PpdtFeedback';
import WatFeedback from './WatFeedback';
import TatFeedback from './TatFeedback';
import GpeFeedback from './GpeFeedback';

export default function Response({children}) {

    const[isOpen ,setIsOpen] = useState(true);
    const [active, setActive] = useState("");
    // const toggle = () => setIsOpen (!isOpen);

   
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
            <Nav.Link href="/add_test_material">Add test material</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className="maincont">
           <div className="sidebardiv">
                    {/* <div className={`${active === "response" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive("response")}>
                        See Ypur Feedback
                    </div> */}

                    <p className='responselist' style={{display: isOpen ? "block" : "none", fontWeight: "600"}}>
                        <div className={`${active === "srtfeedback" ? "displaymain" : "sidelink"} text-center`} onClick={(e) => setActive("srtfeedback")}>Situation Reaction Test</div>
                        <div className={`${active === "ppdtfeedback" ? "displaymain" : "sidelink"} fs-sm`} onClick={(e) => setActive("ppdtfeedback")}>Picture Perception Description Test</div>
                        <div className={`${active === "watfeedback" ? "displaymain" : "sidelink"} `} onClick={(e) => setActive("watfeedback")}>Word Assocation Test</div>
                        <div className={`${active === "tatfeedback" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive("tatfeedback")}>Thematic Apperception Test</div>
                        <div className={`${active === "gpefeedback" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive("gpefeedback")}>Group Planning Exercise</div>
                    </p>
                    {/* <div className={`${active === "alumnitestmaterial" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive("alumnitestmaterial")}>
                    Add Test Material
                    </div> */}
           </div>
           {/* <div className={`${active === "response" ? "displaymaincontent"
              : "d-none"}`}>
                    Response
           </div> */}
           <div className={`${active === "response" ? "displaymaincontent"
              : "d-none"}`}>
                    Response
           </div>

           <div className={`${active === "srtfeedback" ? "displaymaincontent"
              : "d-none"}`}>
                    <SrtFeedback />
           </div>

           <div className={`${active === "ppdtfeedback" ? "displaymaincontent"
              : "d-none"}`}>
                    <PpdtFeedback />
           </div>

           <div className={`${active === "watfeedback" ? "displaymaincontent"
              : "d-none"}`}>
                    <WatFeedback />
           </div>

           <div className={`${active === "tatfeedback" ? "displaymaincontent"
              : "d-none"}`}>
                    <TatFeedback />
           </div>
           <div className={`${active === "gpefeedback" ? "displaymaincontent"
              : "d-none"}`}>
                    <GpeFeedback />
           </div>
           {/* <div className={`${active === "alumnitestmaterial" ? "displaymaincontent"
              : "d-none"}`}>
                    <AlumniTestMaterial />
           </div> */}


        </div>

    </>
  )
}
