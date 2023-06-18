import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import tick from '../images/tick1.jpg'
import cross from '../images/cross.jpg'
import './admindash.css'

export default function AdminSrt() {
    const [srtresponse,getSrtResponse] = useState([])

    const getSrt = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/alumni_srt_resp');
          //   console.log(response);
            await getSrtResponse(response.data);
          } catch (error) {
            console.log(error);
          }
    }

    const submitsrt = async (situation) => {
      deletesrt(situation);
      axios.post('http://localhost:5000/api/srt', {
                situation: situation,
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
              alert('Admin Srt Repsonse Saved Successfully...!')
    }

    const deletesrt = async (situation) => {
      console.log(situation);
      axios.post('http://localhost:5000/api/alumni_srt_drop',{
        situation: situation,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      getSrt()
    
    }

    useEffect(()=>{
        getSrt()
    },[])
  return (
    <>
    {/* <table className='srttable'>
        <thead className='srtthead'>
        <tr>
            <th className='col-8'>Situation</th>
            <th>Add Situation</th>
            <th>Delete Situation</th>
        </tr>
        </thead>
        <tbody className='srttbody'>
          {
        srtresponse.map((d) => (
            <tr key={d._id} className='srtitems'>
            <td style={{color: "black"}} className='situationbody col-8 '>{d.situation}</td>
            <td style={{color: "black"}}><button className='add' onClick={(e) => {submitsrt(d.situation)}}>Add</button></td>
            <td style={{color: "black"}}><button className='del' onClick={(e) => {deletesrt(d.situation)}}>Delete</button></td>
            </tr>
        ))
      }
      </tbody>
    </table> */}

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

    <div className="srtbody" >
      {
        srtresponse.map((d) => (
            <div className="srtitems" key={d._id}>
                  <p style={{textAlign: "left",marginLeft: "2rem"}}>{d.situation}</p>
                  <img src={tick} className='tick' onClick={(e) => {submitsrt(d.content)}} alt="add" />
                  <img src={cross} className='cross' onClick={(e) => {deletesrt(d.content)}} alt="add" />
            </div>
        ))
}

      
      
    </div>
    </>
  )
}
