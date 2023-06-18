<<<<<<< HEAD
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Watintro.css'

export default function WatIntro() {
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

    <div className="wat_cont">
      <h1 className="wat_head">Welcome to Word Association Test (WAT)</h1>
      <p className="wat_para">
      Word Association Testing is one of the psychological techniques in which the subconscious behaviour of an individual is tested.
      </p>
      <hr />
      <p className="wat_para">
      {/* <h2 style={{marginLeft: '1rem'}}>About the Test:</h2> */}
      In this test, a word will be displayed in front of the candidate for 15 seconds and he/she is required to use that word to form a meaningful sentence.

      Based on each word, there may be different ideas related to that word in the candidate's mind, but he/she must write the first spontaneous response.

      The test consists of 60 words that are displayed on the projector for a period of 15 seconds per word in which you have to think as well as write. The total time allotted in 15 minutes. The words in the WAT are chosen in such a way that every word can be taken as noun, verb, adverb or adjective depending on the candidates thought process.

      The time for each response is less so that students write the first response that he thinks.
      </p>

      <h2 className="wat_list">Instructions</h2>
      <li className="wat_para">A list of 60 words are shown one by one on a screen to the candidates in SSB.</li>

      <li className="wat_para">These words will be those types of words which are used in our day to day life.</li>

      <li className="wat_para">A total of 15 seconds will be given to the candidates to read a single word and write their response in the form of a complete sentence in the textarea provided.</li>

      <li className="wat_para">After 15 seconds, a new word will appear with a beep on the screen and the candidate has to repeat the same procedure.</li>

      <button className="wat_btn" type='button'><Nav.Link className="wat_link" href='/wat'>Start Test</Nav.Link></button>
    </div>
    </>
    
  )
=======
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Watintro.css'

export default function WatIntro() {
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

    <div className="wat_cont">
      <h1 className="wat_head">Welcome to Word Association Test (WAT)</h1>
      <p className="wat_para">
      Word Association Testing is one of the psychological techniques in which the subconscious behaviour of an individual is tested.
      </p>
      <hr />
      <p className="wat_para">
      {/* <h2 style={{marginLeft: '1rem'}}>About the Test:</h2> */}
      In this test, a word will be displayed in front of the candidate for 15 seconds and he/she is required to use that word to form a meaningful sentence.

      Based on each word, there may be different ideas related to that word in the candidate's mind, but he/she must write the first spontaneous response.

      The test consists of 60 words that are displayed on the projector for a period of 15 seconds per word in which you have to think as well as write. The total time allotted in 15 minutes. The words in the WAT are chosen in such a way that every word can be taken as noun, verb, adverb or adjective depending on the candidates thought process.

      The time for each response is less so that students write the first response that he thinks.
      </p>

      <h2 className="wat_list">Instructions</h2>
      <li className="wat_para">A list of 60 words are shown one by one on a screen to the candidates in SSB.</li>

      <li className="wat_para">These words will be those types of words which are used in our day to day life.</li>

      <li className="wat_para">A total of 15 seconds will be given to the candidates to read a single word and write their response in the form of a complete sentence in the textarea provided.</li>

      <li className="wat_para">After 15 seconds, a new word will appear with a beep on the screen and the candidate has to repeat the same procedure.</li>

      <button className="wat_btn" type='button'><Nav.Link className="wat_link" href='/wat'>Start Test</Nav.Link></button>
    </div>
    </>
    
  )
>>>>>>> 15ce9880dda5b0197b18653a98ab0045fc99e94d
}