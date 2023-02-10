import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Wat() {
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
    
    <h1>Word Association Test (WAT)</h1>
    <p style={{marginLeft: '2rem'}}>Word Association Testing is one of the psychological techniques in which the subconscious behaviour of an individual is tested.</p>

    <h2 style={{marginLeft: '2rem'}}>About the Test:</h2>
    <p style={{marginLeft: '2rem'}}>In this test, a word will be displayed in front of the candidate for 15 seconds and he/she is required to use that word to form a meaningful sentence.

    Based on each word, there may be different ideas related to that word in the candidate's mind, but he/she must write the first spontaneous response.
    
    The test consists of 60 words that are displayed on the projector for a period of 15 seconds per word in which you have to think as well as write. The total time allotted in 15 minutes.
    </p>
    </>
    
  )
}
