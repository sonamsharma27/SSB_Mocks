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

const submitwat = async (word) => {
  deletewat(word);
  axios.post('http://localhost:5000/api/wat', {
            word: word,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          alert('Admin Wat Repsonse Saved Successfully...!')
}

const deletewat = async (word) => {
  console.log(word);
  axios.post('http://localhost:5000/api/alumni_wat_drop',{
    word: word,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  getWat()

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
            <td style={{color: "black"}}><button className='add' onClick={(e) => {submitwat(d.content)}}>Add</button></td>
            <td style={{color: "black"}}><button className='del' onClick={(e) => {deletewat(d.content)}}>Delete</button></td>
            </tr>
        ))
      }
      </tbody>
    </table>
    </>
  )
}
