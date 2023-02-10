import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import pic9 from '../images/pic9.jpg'
import wat from'../images/wat.jpg'
import tat from'../images/tat.jpg'
import srt from'../images/srt.jpg'
import { NavLink } from "react-router-dom"
import '../dashboard.css'

function NavScrollExample() {
  return (
    <>
    {/* <Navbar bg="light" expand="lg">
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
    </Navbar> */}

    <img src={pic9} alt="Army" srcset="" />
    <div className="ssb-section">
        <h1>SSB Tests</h1>
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