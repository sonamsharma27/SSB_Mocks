import React,{useState,useEffect} from 'react'
import axios from 'axios';
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



useEffect(()=>{
    getWat()
},[])
  return (
    <>
    <table className='srttable'>
        <thead className='srtthead'>
        <tr>
            <th>Words</th>
            <th>Add Word</th>
            <th>Delete Word</th>
        </tr>
        </thead>
        <tbody className='srttbody'>
          {
        watresponse.map((d) => (
            <tr key={d._id} className='srtitems'>
            <td style={{color: "black"}} className='wordbody'>{d.content}</td>
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
