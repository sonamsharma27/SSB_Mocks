import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom"
import SrtAnswers from './SrtAnswers';
import PpdtAnswers from './PpdtAnswers';
import WatAnswers from './WatAnswers';
import TatAnswers from './TatAnswers';
import GpeAnswers from './GpeAnswers';

export default function AspirantResponse() {
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
            <Nav.Link href="/response">Feedback Section</Nav.Link>
            {/* <Nav.Link href="/dashboard">About Us</Nav.Link> */}
            <Nav.Link href="/add_test_material">Add test material</Nav.Link>
            <Nav.Link href="/references">References</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className="maincont">
           <div className="sidebardiv">
                 

                    <div className={`${active === "response" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive(toggle)}>
                    Responses

                    
                    </div>
                    <div className='responselist' style={{display: isOpen ? "block" : "none"}}>
                        <div className={`${active === "srtanswer" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive("srtanswer")}>Situation Reaction Test</div>
                        <div className={`${active === "ppdtanswer" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive("ppdtanswer")}>Picture Perception Description Test</div>
                        <div className={`${active === "watanswer" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive("watanswer")}>Word Assocation Test</div>
                        <div className={`${active === "tatanswer" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive("tatanswer")}>Thematic Apperception Test</div>

                        <div className={`${active === "gpeanswer" ? "displaymain" : "sidelink"}`} onClick={(e) => setActive("gpeanswer")}>Group Planning Exercise</div>
                    </div>
           </div>
           <div className={`${active === "alumniresponse" ? "displaymaincontent"
              : "d-none"}`}>
                    AspirantResponse
           </div>
           <div className={`${active === "response" ? "displaymaincontent"
              : "d-none"}`}>
                    Response
           </div>

           <div className={`${active === "srtanswer" ? "displaymaincontent"
              : "d-none"}`}>
                    <SrtAnswers />
           </div>

           <div className={`${active === "ppdtanswer" ? "displaymaincontent"
              : "d-none"}`}>
                    <PpdtAnswers />
           </div>

           <div className={`${active === "watanswer" ? "displaymaincontent"
              : "d-none"}`}>
                    <WatAnswers />
           </div>

           <div className={`${active === "tatanswer" ? "displaymaincontent"
              : "d-none"}`}>
                    <TatAnswers />
           </div>
           <div className={`${active === "gpeanswer" ? "displaymaincontent"
              : "d-none"}`}>
                    <GpeAnswers />
           </div>
        </div>

    </>
  )
}


