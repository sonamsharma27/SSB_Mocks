import React, { useState } from "react";
import TatInput from "./TatInput";
import TatImg from "./TatImg";
import {Link} from 'react-router-dom'
import axios from 'axios';
const getImgUrls = () => {
  // let urls=[];
  return [
    "https://defencedirecteducation.com/wp-content/uploads/2022/07/dde-tat.jpg",
    "https://1.bp.blogspot.com/-8IgPl_NfBqQ/XWzr2E2GScI/AAAAAAAAAUk/SSFBhCA6dr0ElLScrtkrzmFSo-K-R3BOwCLcBGAs/s1600/l.JPG",
    "https://1.bp.blogspot.com/-wTO5gA59QYg/XWzr3fH3nxI/AAAAAAAAAU4/gLxjYCzbHdQyjksUtHRTGTy-dE99uTQLQCLcBGAs/s1600/r.JPG",
  ];
  // fetch("http://localhost:5000/api/tat")
  // .then((res) => res.json())
  // .then((res) => {urls=res;});
  // return urls;


}
function Tat() {
  const [storyInput, setStoryInput] = useState({
    s1: "",
    s0: "",
    s2: "",
    s3: "",
    s4: "",
    s5: "",
    s6: "",
    s7: "",
    s8: "",
    s9: "",
  });
  const [timeup, setTimeUp]= useState(false);
  const imgUrls=getImgUrls();
  setTimeout(()=>{
    setTimeUp(true);
  },10000)
  // setTimeout(() => {
  //   axios.post('http://localhost:5000/api/tat_resp', {
  //     username: 'Fred',
  //     url: urls,
  //     solution: storyInput
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // },5000);
  return (
    <>
    {timeup?<div className='ques_submit'>
        <h1>Your response has been submitted.</h1>
        <div className='ques_link'>
        <Link className='ques_dash btn btn-warning border border-5 border-primary' to="/dashboard">Click here to go to dashboard</Link> <br /> <br />
        <Link className='ques_dash btn btn-info' to="/tatintro">Try another TAT test</Link>
        </div>
    </div>:
    <div className="d-flex flex-column justify-content-center">
      <h1 className="text-center p-2 align-self-center bg-success rounded-2">
        Thematic Apperception Test
      </h1>
      <TatImg imgUrls={imgUrls}  />
      <TatInput setStoryInput={setStoryInput} storyInput={storyInput} urls={imgUrls} />
    </div>
}
    </>
  );
}

export default Tat;