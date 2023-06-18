<<<<<<< HEAD
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import tick from '../images/tick1.jpg'
import cross from '../images/cross.jpg'
import './admindash.css'

export default function AdminPpdt() {
  const [ppdtresponse,getSPpdtResponse] = useState([])

    const getPpdt = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/alumni_ppdt_resp');
          //   console.log(response);
            await getSPpdtResponse(response.data);
          } catch (error) {
            console.log(error);
          }
    }
    const submitppdt = async (url) => {
      deleteppdt(url);
      axios.post('http://localhost:5000/api/ppdt', {
        url: url,
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
              alert('Admin Ppdt Repsonse Saved Successfully...!')
    }
    
    const deleteppdt = async (url) => {
      console.log(url);
      axios.post('http://localhost:5000/api/alumni_ppdt_drop',{
        url: url,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      getPpdt()
    
    }
    useEffect(()=>{
      getPpdt()
    },[])
  return (
    <>
    {/* <table className='srttable'>
        <thead className='srtthead'>
        <tr>
            <th>Picture</th>
            <th>Add Picture</th>
            <th>Delete Picture</th>
        </tr>
        </thead>
        <tbody className='srttbody'>
          {
        ppdtresponse.map((d) => (
            <tr key={d._id} className='srtitems'>
            <td style={{color: "black"}} className='tatpic'>
              <img src={d.url} alt="" srcset="" /></td>
            <td style={{color: "black"}}><button className='add' onClick={(e) => {submitppdt(d.url)}}>Add</button></td>
            <td style={{color: "black"}}><button className='del' onClick={(e) => {deleteppdt(d.url)}}>Delete</button></td>
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

    <div className="ppdtbody">
      {
        ppdtresponse.map((d) => (
          <div className="ppdtitems" key={d._id}>
            <div className='ppdtpic'>
                <img src={d.url} alt="tat" className='ppdtimg'/>
            </div>
                <img src={tick} className='tattick' onClick={(e) => {submitppdt(d.content)}} alt="add" />
                <img src={cross} className='tatcross' onClick={(e) => {deleteppdt(d.content)}} alt="add" />
          </div>
        ))
      }
    </div>

    </>
  )
}
=======
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import tick from '../images/tick1.jpg'
import cross from '../images/cross.jpg'
import './admindash.css'

export default function AdminPpdt() {
  const [ppdtresponse,getSPpdtResponse] = useState([])

    const getPpdt = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/alumni_ppdt_resp');
          //   console.log(response);
            await getSPpdtResponse(response.data);
          } catch (error) {
            console.log(error);
          }
    }
    const submitppdt = async (url) => {
      deleteppdt(url);
      axios.post('http://localhost:5000/api/ppdt', {
        url: url,
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
              alert('Admin Ppdt Repsonse Saved Successfully...!')
    }
    
    const deleteppdt = async (url) => {
      console.log(url);
      axios.post('http://localhost:5000/api/alumni_ppdt_drop',{
        url: url,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      getPpdt()
    
    }
    useEffect(()=>{
      getPpdt()
    },[])
  return (
    <>
    {/* <table className='srttable'>
        <thead className='srtthead'>
        <tr>
            <th>Picture</th>
            <th>Add Picture</th>
            <th>Delete Picture</th>
        </tr>
        </thead>
        <tbody className='srttbody'>
          {
        ppdtresponse.map((d) => (
            <tr key={d._id} className='srtitems'>
            <td style={{color: "black"}} className='tatpic'>
              <img src={d.url} alt="" srcset="" /></td>
            <td style={{color: "black"}}><button className='add' onClick={(e) => {submitppdt(d.url)}}>Add</button></td>
            <td style={{color: "black"}}><button className='del' onClick={(e) => {deleteppdt(d.url)}}>Delete</button></td>
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

    <div className="ppdtbody">
      {
        ppdtresponse.map((d) => (
          <div className="ppdtitems" key={d._id}>
            <div className='ppdtpic'>
                <img src={d.url} alt="tat" className='ppdtimg'/>
            </div>
                <img src={tick} className='tattick' onClick={(e) => {submitppdt(d.content)}} alt="add" />
                <img src={cross} className='tatcross' onClick={(e) => {deleteppdt(d.content)}} alt="add" />
          </div>
        ))
      }
    </div>

    </>
  )
}
>>>>>>> 15ce9880dda5b0197b18653a98ab0045fc99e94d
