import React,{useState,useEffect} from 'react'
import axios from 'axios';
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
    </table>
    </>
  )
}
