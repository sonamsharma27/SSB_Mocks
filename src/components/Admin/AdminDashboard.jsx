import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './admindash.css'

export default function AdminDashboard() {
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

    <div className="welcome">
        <h2>Welcome back, SSb</h2>
    </div>

    <div className="addlayout">
        <a href='/adminsrt' className="respond srtrespond">Srt</a>
        <a href='/adminwat' className="respond watrespond">Wat</a>
        <a href='/admintat' className="respond tatrespond">Tat</a>
        <a href='/adminppdt' className="respond ppdtrespond">Ppdt</a>
        <a href='/admingpe' className="respond gperespond">Gpe</a>
    </div>
    </>
  )
}
