import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
        <h2>Welcome back, SSb</h2>
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
