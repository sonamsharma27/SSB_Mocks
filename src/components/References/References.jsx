import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './reference.css'

export default function References() {
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
            <Nav.Link href="/response">Response Section</Nav.Link>
            {/* <Nav.Link href="/dashboard">About Us</Nav.Link> */}
            <Nav.Link href="/add_test_material">Add test material</Nav.Link>
            <Nav.Link href="/references">References</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className='refdiv'>
    <h1 style={{marginLeft: "2rem",marginTop: "2rem"}}>Hi Aspirant,</h1>
    <h3 style={{marginLeft: "2rem"}}>Here are some references and resources that can help you in your preparation:</h3>
    <div style={{marginLeft: "2rem",marginTop: "2rem"}}>
        <div className='ref'>
            <h3 style={{paddingLeft: "2rem",paddingTop: "2rem"}}>1. Books:</h3>
            <ul className='reful'>
                <li className='reflist'>"Let's Crack SSB Interview" by SSBCrack: This book covers all aspects of the SSB interview process, including screening tests, psychological tests, group testing, and personal interviews. It provides insights, tips, and strategies for each stage of the interview.</li>
                <li className='reflist'>"SSB Interview: The Complete Guide" by Dr. N.K. Natarajan: This book offers a comprehensive guide to the SSB interview process, covering various aspects such as screening tests, psychology tests, group testing, and interviews. It provides tips, examples, and practical advice for candidates.</li>
                <li className='reflist'>"The SSB Interview: 14 Hours Series" by Maj. Gen. Dr. G.D. Bakshi: This book provides an in-depth understanding of the SSB interview process, focusing on personality development, psychology tests, and group tasks. It offers valuable insights and recommendations for aspirants.</li>
            </ul>
        </div>
        <div className='ref'>
            <h3 style={{paddingLeft: "2rem",paddingTop: "2rem"}}>2. Online Resources and Websites:</h3>
            <ul className='reful'>
                <li className='reflist'>
                SSBCrack: The website SSBCrack <a href="https://www.ssbcrack.com/">(https://www.ssbcrack.com/)</a> is a valuable resource for SSB aspirants. It provides articles, study materials, practice questions, and tips related to all aspects of the SSB interview process.
                </li>
                <li className='reflist'>Oliveboard: Oliveboard <a href="https://www.oliveboard.in/ssb/">(https://www.oliveboard.in/ssb/)</a> is an online platform that offers SSB interview preparation materials, including study materials, mock tests, and video lessons. It covers all stages of the SSB interview process.</li>
                <li>SSBToSuccess: SSBToSuccess <a href="https://www.ssbtosuccess.com/">(https://www.ssbtosuccess.com/)</a> (https://www.ssbtosuccess.com/) is a website dedicated to SSB interview preparation. It provides study materials, practice tests, interview experiences, and tips for candidates.</li>
            </ul>
        </div>
        <div className='ref'>
            <h3 style={{paddingLeft: "2rem",paddingTop: "2rem"}}>3. YouTube Channels:</h3>
            <ul className='reful'>
                <li className='reflist'>SSBCrack: The SSBCrack YouTube channel <a href="https://www.youtube.com/c/SSBCrack">(https://www.youtube.com/c/SSBCrack)</a> offers video lectures, interviews, and tips for SSB preparation. It covers various aspects of the SSB interview process and provides guidance to aspirants.</li>
                <li className='reflist'>Defence Direct Education: The Defence Direct Education YouTube channel <a href="https://www.youtube.com/c/defencedirecteducation">(https://www.youtube.com/c/defencedirecteducation)</a> provides videos related to SSB interview preparation, including tips, mock tests, and interviews with successful candidates.</li>
            </ul>
        </div>
    </div>
    </div>

    
    </>
  )
}