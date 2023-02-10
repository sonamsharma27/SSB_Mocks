import '../App.css';
import { BrowserRouter ,Link,Routes,  Route,Navigate } from "react-router-dom"
import SignUp from './SignUp';
import S_login from './S_login'
import CarouselFadeExample from './Home';
import Dashboard from './Dashboard';
import AlumniForm from './AlumniForm';
import Login from './Login';
import Wat from './Wat';
import { Tab } from 'bootstrap';
import Tat from './Tat';
import Srt from './Srt';
import { Navbar } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
function App() {
  const user = localStorage.getItem("token");
  return (
    <>
    <Navbar bg="light" expand="lg" class="nv">
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
    <BrowserRouter>
      <Routes>
      <Route path="/dashboard" exact element={<Dashboard />} />
      <Route exact path="/" element={<CarouselFadeExample/>} />
      <Route exact path="/signup" element={<SignUp/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/s_login" element={<S_login/>} />
      <Route path="/alumniform" element={<AlumniForm/>} />      
      <Route path="/wat" element={<Wat/>} />      
      <Route path="/tat" element={<Tat/>} />      
      <Route path="/srt" element={<Srt/>} />      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
