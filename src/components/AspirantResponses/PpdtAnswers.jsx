import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './Ppdtanswers.css'

export default function PpdtAnswers() {
    const [answers,getAnswers] = useState([])
    const [feedback,setFeedback] = useState('')
    const getPpdtData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/ppdt_resp');
      //   console.log(response);
        await getAnswers(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(()=>{
      getPpdtData()
    },[])
    return (
      <>
        <div className='srtmain'>
            {
          answers.map((d) => { 
            let onestar=0;
            let twostar=0;
            let threestar=0;
            let fourstar=0;
            let fivestar=0;
            d.users.forEach(user=>{
              if(user.rating===1){
                onestar++;
              }
              else if(user.rating===2){
                twostar++;
              }
              else if(user.rating===3){
                threestar++;
              }
              else if(user.rating===4){
                fourstar++;
              }
              else {
                fivestar++;
              }

            })
            let avgRating = 0.0;
            console.log(d.users);
            if(d.users.length>0){
              avgRating = (onestar + 2*twostar + 3*threestar + 4*fourstar + 5*fivestar)/d.users.length;
            }
            return(
              <div>
                <div className="d- ">
              <button className={`cursor-pointer badge ${avgRating>=4?'btn-success':avgRating>=3?'btn-warning':'btn-danger'} me-0`}>Rated {avgRating}</button>
              </div>
              <div key={d._id} className='ppdtfeedcontents'>
              <div className='ppdtcon1'>
                <div>
                <p className='text-muted mt-4' style={{fontWeight: "bolder"}}>Your Email: {d.username}</p>
                </div>
  
                <div>
                  <p className='text-muted' style={{fontWeight: "bolder"}}>Ppdt Picture: </p>
                  <p style={{color: "black"}} className='picurl'><img src={d.url} alt="" className='picurl'/></p>
                </div>
              </div>
              <div className='ppdtcon2'>
                <p className="text-muted" style={{fontWeight: "bolder"}}>Your Story: {" "}</p>
              <p className='response'>Story: {d.story}</p>
              </div>
           {d.users.length>0 && <div className="rating-div">
              <div className="fw-bolder">RATINGS</div>
             

            </div>}
            </div>
              </div>
          )})
        }
        </div>
      </>
    )
}
