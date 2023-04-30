import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Srt() {
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
            <Nav.Link href="/dashboard">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <h1>Situation Reaction Test (SRT)</h1>
    <p style={{marginLeft: '2rem'}}>Situation Reaction Test or SRT is a specially designed psychological test designated to test your responses to these day-to-day situations. Your responses show your personality and give the actual picture of your conscious and subconscious mind. Whether you can handle Odd situations with an alert mind.</p>

    <h2 style={{marginLeft: '2rem'}}>About the Test:</h2>
    <p style={{marginLeft: '2rem'}}>The candidate is given a booklet containing 60 real-life situations which you have to answer in 30 minutes. This time limit has been intentionally shortened to ensure that the candidate doesn’t have much time to think over the situation and gives the first reaction which comes to his mind.

    A candidate is asked to give his reactions to all 60 situations in 30 minutes. However, if the candidate does not understand any particular situation, they may leave that particular situation and proceed to the next situation without wasting any time..
    
    A candidate is required to write only 2 or 3 lines in response to each situation. So, a speedy response within the specified time limit is very important. The candidates should avoid detailing the actions keeping the response brief and up to the point.
    </p>
    </>
    
  )
}
