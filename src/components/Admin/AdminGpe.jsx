import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './admindash.css'

export default function AdminGpe() {
  const [srtresponse,getSrtResponse] = useState([])

    const getGpe = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/alumni_gpe_resp');
          //   console.log(response);
            await getSrtResponse(response.data);
          } catch (error) {
            console.log(error);
          }
    }

    useEffect(()=>{
      getGpe()
    },[])
  return (
    <>
    <table className='gpetable'>
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
        srtresponse.map((d) => (
            <tr key={d._id} className='srtitems'>
            <td style={{color: "black"}} className='tatpic'>
              <img src={d.url} alt="" srcset="" /></td>
              <td style={{color: "black"}} className='gpeproblem'>{d.problem}</td>
            <td style={{color: "black"}}><button className='add'>Add</button></td>
            <td style={{color: "black"}}><button className='del'>Delete</button></td>
            </tr>
        ))
      }
      </tbody>
    </table>
    </>
  )
}
