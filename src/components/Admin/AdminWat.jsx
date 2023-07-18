import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import tick from '../images/tick1.jpg'
import cross from '../images/cross.jpg'
import './admindash.css'

export default function AdminWat() {
  const [watresponse,getWatResponse] = useState([])


  const getWat = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/alumni_wat_resp');
      //   console.log(response);
        await getWatResponse(response.data);
      } catch (error) {
        console.log(error);
      }
}

const submitwat = async (word) => {
  deletewat(word);
  axios.post('http://localhost:5000/api/wat', {
            word: word,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          alert('Admin Wat Repsonse Saved Successfully...!')
}

const deletewat = async (word) => {
  console.log(word);
  axios.post('http://localhost:5000/api/alumni_wat_drop',{
    word: word,
  })
  .then(function (response) {
    console.log(response);
    getWat();
  })
  .catch(function (error) {
    getWat();
    console.log(error);
  });
  

}



useEffect(()=>{
    getWat()
},[])
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
            <Nav.Link href="/admindash">Admin Dashboard</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <div className='wattbody'>
          {
            watresponse.map((d) => (
              <div className="watitems" key={d._id}>
                  <p style={{fontSize: "28px"}}>{d.content}</p>
                  
                  <img src={tick} className='tick' onClick={(e) => {submitwat(d.content)}} alt="add" />
                  <img src={cross} className='cross' onClick={(e) => {deletewat(d.content)}} alt="add" />
              </div>
            ))
          }
    </div>
    </>
  )
}
