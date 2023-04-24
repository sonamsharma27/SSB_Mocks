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

    <div className="ppdt_cont">
      <h1 className="ppdt_head">Welcome to Word Association Test (WAT)</h1>
      <p className="ppdt_para">
      Word Association Testing is one of the psychological techniques in which the subconscious behaviour of an individual is tested.
      </p>
      <hr />
      <p className="ppdt_para">
      {/* <h2 style={{marginLeft: '1rem'}}>About the Test:</h2> */}
      In this test, a word will be displayed in front of the candidate for 15 seconds and he/she is required to use that word to form a meaningful sentence.

      Based on each word, there may be different ideas related to that word in the candidate's mind, but he/she must write the first spontaneous response.

      The test consists of 60 words that are displayed on the projector for a period of 15 seconds per word in which you have to think as well as write. The total time allotted in 15 minutes. The words in the WAT are chosen in such a way that every word can be taken as noun, verb, adverb or adjective depending on the candidates thought process.

      The time for each response is less so that students write the first response that he thinks.
      </p>
      <button className="ppdt_btn" type='button'><Nav.Link className="ppdt_link" href='/wat_test'>Start Test</Nav.Link></button>
    </div>
    </>
    
  )
}