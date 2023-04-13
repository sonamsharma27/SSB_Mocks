import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import pic9 from '../images/pic9.jpg'
import pic10 from '../images/pic9.png'
import wat from'../images/wat.jpg'
import tat from'../images/tat.jpg'
import srt from'../images/srt.jpg'
import { NavLink } from "react-router-dom"
import '../css/dashboard.css'
import oir from '../images/oir.jpeg'

function NavScrollExample() {
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
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <img src={pic9} alt="Army" srcset="" />
    <div className="ssb-section">
        <h1 className='ssb_inter'>SSB Interview</h1>
        <h2 style={{marginTop: "2rem"}}>Stage 1</h2>
        <div className="ssb-stage1">
        <div className="ssb-stage-grid1">
              <Nav.Link href='/oir'>
              <img src={oir} alt="word test" srcset="" />
              </Nav.Link>
        </div>

        <div className="ssb-stage-grid1">
            <Nav.Link  href='/ppdt_intro'>
              <img src={pic10} alt="word test" srcset="" />
              </Nav.Link>
         </div>
        </div>
        
        <h2 style={{marginTop: "2rem"}}>Stage 2</h2>
        <div className="ssb-grid">
            <div className="ssb-grid1">
              <Nav.Link href='/wat'>
              <img src={wat} alt="word test" srcset="" />
              </Nav.Link>
                
            </div>
            <div className="ssb-grid1">
            <Nav.Link  href='/tat'>
              <img src={tat} alt="word test" srcset="" />
              </Nav.Link>
            </div>
            <div className="ssb-grid1">
            <Nav.Link  href='/srt'>
              <img src={srt} alt="word test" srcset="" />
              </Nav.Link>
            </div>
        </div>
    </div>
    </>
  );
}

export default NavScrollExample;