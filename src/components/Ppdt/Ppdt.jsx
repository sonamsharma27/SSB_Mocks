import './Ppdt.css';
import {React, useState, useEffect} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import Ppdt_ques from './PpdtQues';
import Timer from './Timer';


export default function Ppdt() {
    const navigate = useNavigate();
    const [showImage, setShowImage]= useState(true);
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
          <h1 className='ppdt'>Picture Perception Description Test(PPDT)</h1>
        </div>
        {showImage?
        <div>
          <Timer />
          <img className='ppdt-img' src="https://gs-post-images.grdp.co/2022/3/ppdt-img1610123219285-98-img1648557559888-24.webp-rs-high-webp.webp" alt="PPDT" />
        </div>
          :<div>
            
           <Routes>
           <Route path="/ppdt_ques" element={<Ppdt_ques />} />
           </Routes>
           </div>}
        <div>
          
        </div>
      </div>
    );
  }