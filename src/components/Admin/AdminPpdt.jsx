import React,{useState,useEffect} from 'react'
import axios from 'axios';
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

    useEffect(()=>{
      getPpdt()
    },[])
  return (
    <>
    <table className='srttable'>
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
