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
<<<<<<< HEAD
            <Nav.Link href="/response">Response Section</Nav.Link>
            {/* <Nav.Link href="/dashboard">About Us</Nav.Link> */}
=======
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="/add_test_material">Add test material</Nav.Link>
>>>>>>> d7f08efe91c8da7429c845e76f2e0148a70f0115
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
              <Nav.Link href='/watintro'>
              <img src={wat} alt="word test" srcset="" />
              </Nav.Link>
                
            </div>
            <div className="ssb-grid1">
            <Nav.Link  href='/tatintro'>
              <img src={tat} alt="word test" srcset="" />
              </Nav.Link>
            </div>
            <div className="ssb-grid1">
            <Nav.Link  href='/srtintro'>
              <img src={srt} alt="word test" srcset="" />
              </Nav.Link>
            </div>
            <div className="ssb-grid1">
            <Nav.Link  href='/gpe_intro'>
              <img src='https://ssbcrackexams.com/wp-content/uploads/2020/09/Group-Planning-Exercise-At-SSB.jpg' alt="Group Planning Exercise" srcset="" />
              </Nav.Link>
            </div>
        </div>
    </div>
    </>
  );
}

export default NavScrollExample;