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
      deletegpe(url,problem);
      axios.post('http://localhost:5000/api/gpe', {
        gpeurl: url,
        gpeproblem: problem
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
              alert(' GPE problem saved successfully...!')
    }
    
    const deletegpe = async (url,problem) => {
      console.log(url);
      axios.post('http://localhost:5000/api/alumni_gpe_drop',{
        url: url,
        problem: problem
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      getGpe()
    
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
    {/* <table className='gpetable'>
        <thead className='srtthead'>
        <tr>
            <th>Picture</th>
            <th>Problem</th>
            <th>Add Problem</th>
            <th>Delete Problem</th>
        </tr>
        </thead>
        <tbody className='srttbody'>
          {
        gperesponse.map((d) => (
            <tr key={d._id} className='srtitems'>
            <td style={{color: "black"}} className='tatpic'>
              <img src={d.url} alt="" srcset="" /></td>
              <td style={{color: "black"}} className='gpeproblem'>{d.problem}</td>
            <td style={{color: "black"}}><button className='add' onClick={(e) => {submitgpe(d.url,d.problem)}}>Add</button></td>
            <td style={{color: "black"}}><button className='del' onClick={(e) => {deletegpe(d.url,d.problem)}}>Delete</button></td>
            </tr>
        ))
      }
      </tbody>
    </table> */}

{/* <div className='wattbody'>
          {
            gperesponse.map((d) => (
              <div className="gpeitems" key={d._id}>
                <img src={d.url} alt="" srcset="" className='tatpic'/>
                <div className='gpeproblem'>
                <p>{d.problem}</p>
                </div>
                  
                  
                  <img src={tick} className='tick' onClick={(e) => {submitgpe(d.content)}} alt="add" />
                  <img src={cross} className='cross' onClick={(e) => {deletegpe(d.content)}} alt="add" />
              </div>
            ))
          }
    </div> */}
    <div className='srtmain'>
          {
        gperesponse.map((d) => (
          <div key={d._id} className='gpecontent'>
            <div className='gpecon1'>
              <div>
                <p className='text-muted' style={{fontWeight: "bolder"}}>Gpe Picture: </p>
                <p style={{color: "black"}} className='picurl'><img src={d.url} alt="" className='picurl'/></p>
              </div>
            <img src={tick} className='tick' onClick={(e) => {submitgpe(d.url,d.problem)}} alt="add" />
                  <img src={cross} className='cross' onClick={(e) => {deletegpe(d.url,d.problem); alert('GPE problem deleted')}} alt="add" />
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
