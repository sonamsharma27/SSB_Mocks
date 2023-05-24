import React,{useState,useEffect} from 'react'
import axios from 'axios';
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

    useEffect(()=>{
        getSrt()
    },[])
  return (
    <>
    <table className='srttable'>
        <thead className='srtthead'>
        <tr>
            <th>Situation</th>
            <th>Add Situation</th>
            <th>Delete Situation</th>
        </tr>
        </thead>
        <tbody className='srttbody'>
          {
        srtresponse.map((d) => (
            <tr key={d._id} className='srtitems'>
            <td style={{color: "black"}} className='situationbody'>{d.situation}</td>
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
