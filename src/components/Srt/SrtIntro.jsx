import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Srtintro.css"

export default function SrtIntro() {
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

    <div className="srt_cont">
      <h1 className="srt_head">Situation Reaction Test (SRT)</h1>
      <p className="srt_para">
      Situation Reaction Test or SRT is a specially designed psychological test designated to test your responses to these day-to-day situations. Your responses show your personality and give the actual picture of your conscious and subconscious mind. Whether you can handle Odd situations with an alert mind.
      </p>
      <hr />
      <p className="srt_para">
      {/* <h2 style={{marginLeft: '1rem'}}>About the Test:</h2> */}
      The candidate is given a booklet containing 60 real-life situations which you have to answer in 30 minutes. This time limit has been intentionally shortened to ensure that the candidate doesn’t have much time to think over the situation and gives the first reaction which comes to his mind.

      A candidate is asked to give his reactions to all 60 situations in 30 minutes. However, if the candidate does not understand any particular situation, they may leave that particular situation and proceed to the next situation without wasting any time..

      A candidate is required to write only 2 or 3 lines in response to each situation. So, a speedy response within the specified time limit is very important. The candidates should avoid detailing the actions keeping the response brief and up to the point.
      </p>

      <h2 className="srt_list">Instructions</h2>
      <li className="srt_para">You will be given an illustration set followed by practice set.</li>

      <li className="srt_para">Fill up tour particulars in the answer sheet provided to you.</li>

      <li className="srt_para">This is again a test of imagination most commonly known as SRT.</li>

      <li className="srt_para">In this test a number of situations are presented to you. We would like to know how you would feel, think and act in this situations.</li>

      <li className="srt_para">There are no right or wrong answers with respect of these situations. Every one is likely to read these situations in his own way. We would like to know your reactions to these situations.</li>

      <li className="srt_para">Do not spend too much time in thinking out the answer to the situation. Write quickly the answer that comes to your mind first.</li>

      <li className="srt_para">You are to write your answer in textarea provided to you.</li>

      <li className="srt_para">You will be given 30 minutes to do the test, which contain 60 situations. Try to answer all questions in given time. </li>
      <button className="srt_btn" type='button'><Nav.Link className="srt_link" href='/srt'>Start Test</Nav.Link></button>
    </div>
    </>
    
  )
}
