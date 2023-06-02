import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import adpic from '/ssb/ssb_mocks/src/images/admin.avif'
import wat from'/ssb/ssb_mocks/src/images/wat.jpg'
import tat from'/ssb/ssb_mocks/src/images/tat.jpg'
import srt from'/ssb/ssb_mocks/src/images/srt.jpg'
import oir from '/ssb/ssb_mocks/src/images/oir.jpeg'
import pic9 from '/ssb/ssb_mocks/src/images/pic9.jpg'
import pic10 from '/ssb/ssb_mocks/src/images/pic9.png'
import './admindash.css'

export default function AdminDashboard() {
  return (
    <div className='Fragment'>
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

    <div className="welcome">
        <img src="https://4.bp.blogspot.com/-zDcGYI679nA/VVWOPU8yn4I/AAAAAAAAIkk/NoMst4UYYFI/s1600/New%2BPay%2BScales%2Bfor%2Bnavy%2Bair%2Bforce%2Band%2Barmy.png" alt="images" className='adipic'/>
    </div>

    <div className="addlayout">
        <a href='/adminsrt'  className=" p-5  respond srtrespond ">Verify Situation Reaction Test (SRT) content</a>
        <a href='/adminwat'  className=" p-5  respond watrespond ">Verify Word Association Test (WAT) content</a>
        <a href='/admintat'  className=" p-5  respond tatrespond ">Verify Thematic Apperception Test (TAT) content</a>
        <a href='/adminppdt' className=" p-5  respond ppdtrespond ">Verify Picture Perception Description Test (PPDT) content</a>
        <a href='/admingpe'  className=" p-5  respond gperespond ">Verify Group Planning Exercise(GPE) content</a>
    </div>
    </div>
  )
}
