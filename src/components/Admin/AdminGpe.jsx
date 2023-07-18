import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import tick from '../images/tick1.jpg'
import cross from '../images/cross.jpg'
import Navbar from 'react-bootstrap/Navbar';
import './admindash.css'

export default function AdminGpe() {
  const [gperesponse,getGpeResponse] = useState([])

    const getGpe = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/alumni_gpe_resp');
          //   console.log(response);
            await getGpeResponse(response.data);
          } catch (error) {
            console.log(error);
          }
    }

    const submitgpe = async (url,problem) => {
      deletegpe(url);
      axios.post('http://localhost:5000/api/gpe', {
        url: url,
        problem: problem
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
              alert('Admin Gpe Repsonse Saved Successfully...!')
    }
    
    const deletegpe = async (url,problem) => {
      console.log(url);
      axios.post('http://localhost:5000/api/alumni_gpe_drop',{
        url: url,
        problem: problem
      })
      .then(function (response) {
        getGpe()
        console.log(response);
      })
      .catch(function (error) {
        getGpe()
        console.log(error);
      });
    
    }

    useEffect(()=>{
      getGpe()
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

<div className='srtmain'>
          {
        gperesponse.map((d) => (
          <div key={d._id} className='gpecontent'>
            <div className='gpecon1'>
              <div>
                <p className='text-muted' style={{fontWeight: "bolder"}}>Gpe Picture: </p>
                <p style={{color: "black"}} className='picurl'><img src={d.url} alt="" className='picurl'/></p>
              </div>
            <img src={tick} className='tick' onClick={(e) => {submitgpe(d.url)}} alt="add" />
                  <img src={cross} className='cross' onClick={(e) => {deletegpe(d.url)}} alt="add" />
            </div>

            <div className='gpecon2'>
              <p className='text-muted' style={{fontWeight: "bolder"}}>Your Problem: </p>
              <p className='response'>Problem: {d.problem}</p>
            </div>
            
            
          </div>
        ))
      }
      </div>
    </>
  )
}
