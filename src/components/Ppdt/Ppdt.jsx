import './Ppdt.css';
import {React, useState, useEffect} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import PpdtQues from './PpdtQues';
import Timer from './Timer';

export default  function Ppdt() {
  const navigate = useNavigate();
  const [showImage, setShowImage]= useState(true);
  const [url, setUrl] = useState('');
  const setImage =  () =>{
     fetch('http://localhost:5000/ppdt').then(res=>res.json()).then(res=>setUrl(res.url));
    console.log('url ppdt ', url);
  }

  useEffect(()=>{
      setTimeout(()=>{
        setShowImage(false);
        // window.location.href='ppdt_ques';
        navigate('/ppdt_ques')
      },10000)
    },[])
  
    return (
      <div className="App">
        <div>
          <h1 className='ppdt' >Picture Perception Description Test(PPDT)</h1>
        </div>
        {showImage?
        <div>
          <Timer />
        {url?<img src={url} alt="PPDT" className="ppdt-img" /> : 
        <button onClick={setImage}>Get Image</button>}
        </div>
          :<div>
           <Routes>
           <Route path="/ppdt_ques" element={<PpdtQues props = {url}/>} />
           </Routes>
           </div>}
        <div>
          
        </div>
      </div>
    );
  }
  