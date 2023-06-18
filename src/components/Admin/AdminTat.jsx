<<<<<<< HEAD
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import tick from '../images/tick1.jpg'
import cross from '../images/cross.jpg'
import './admindash.css'

export default function AdminTat() {
  const [tatresponse,getTatResponse] = useState([])

  const getTat = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/alumni_tat_resp');
      //   console.log(response);
        await getTatResponse(response.data);
      } catch (error) {
        console.log(error);
      }
}

const submittat = async (url) => {
  deletetat(url);
  axios.post('http://localhost:5000/api/tat', {
    url: url,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          alert('Admin Tat Repsonse Saved Successfully...!')
}

const deletetat = async (url) => {
  console.log(url);
  axios.post('http://localhost:5000/api/alumni_tat_drop',{
    url: url,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  getTat()

}


useEffect(()=>{
  getTat()
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
        tatresponse.map((d) => (
            <tr key={d._id} className='srtitems'>
            <td style={{color: "black"}} className='tatpic'>
              <img src={d.url} alt=""/></td>
            <td style={{color: "black"}}><button className='add' onClick={(e)=>{submittat(d.url)}}>Add</button></td>
            <td style={{color: "black"}}><button className='del' onClick={(e)=>{deletetat(d.url)}}>Delete</button></td>
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

    <div className="tatbody">
      {
        tatresponse.map((d) => (
          <div className="tatitems" key={d._id}>
            <div className='tatpic'>
            <img src={d.url} alt="tat" className='tatimg'/>
            </div>
              
              <img src={tick} className='tattick' onClick={(e) => {submittat(d.content)}} alt="add" />
              <img src={cross} className='tatcross' onClick={(e) => {deletetat(d.content)}} alt="add" />
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

export default function AdminTat() {
  const [tatresponse,getTatResponse] = useState([])

  const getTat = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/alumni_tat_resp');
      //   console.log(response);
        await getTatResponse(response.data);
      } catch (error) {
        console.log(error);
      }
}

const submittat = async (url) => {
  deletetat(url);
  axios.post('http://localhost:5000/api/tat', {
    url: url,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          alert('Admin Tat Repsonse Saved Successfully...!')
}

const deletetat = async (url) => {
  console.log(url);
  axios.post('http://localhost:5000/api/alumni_tat_drop',{
    url: url,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  getTat()

}


useEffect(()=>{
  getTat()
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
        tatresponse.map((d) => (
            <tr key={d._id} className='srtitems'>
            <td style={{color: "black"}} className='tatpic'>
              <img src={d.url} alt=""/></td>
            <td style={{color: "black"}}><button className='add' onClick={(e)=>{submittat(d.url)}}>Add</button></td>
            <td style={{color: "black"}}><button className='del' onClick={(e)=>{deletetat(d.url)}}>Delete</button></td>
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

    <div className="tatbody">
      {
        tatresponse.map((d) => (
          <div className="tatitems" key={d._id}>
            <div className='tatpic'>
            <img src={d.url} alt="tat" className='tatimg'/>
            </div>
              
              <img src={tick} className='tattick' onClick={(e) => {submittat(d.content)}} alt="add" />
              <img src={cross} className='tatcross' onClick={(e) => {deletetat(d.content)}} alt="add" />
          </div>
        ))
      }
    </div>
    </>
  )
}
>>>>>>> 15ce9880dda5b0197b18653a98ab0045fc99e94d
