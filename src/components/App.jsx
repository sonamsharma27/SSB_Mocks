import '../App.css';
import { BrowserRouter ,Link,Routes,  Route,Navigate } from "react-router-dom"
// import Home from './Home';
import SignUp from './SignUp';
import S_login from './S_login'
import CarouselFadeExample from './Home';
import Dashboard from './Dashboard';
// import AlumniForm from './AlumniForm';
import Login from './Login';
import Oir from './Oir'
import Wat_test from './Wat/Wat_test';
import Wat from './Wat/Wat';
import { Tab } from 'bootstrap';
import Tat from './Tat/Tat';
import Srt from './Srt';
import Verbal from './Verbal';
import PpdtQues from './Ppdt/PpdtQues';
import Non_verbal from './Non_verbal';
import Alu_login from './Alu_login';
import Alu_signup from './Alu_signup';
import Result_ver from './Result_ver';
import { CheckUserExist } from '../helper/helper';
import Ppdt from './Ppdt/Ppdt';
import PpdtIntro from './Ppdt/PpdtIntro';
import { useState } from 'react';


function App() {
  // const user = localStorage.getItem("token");
  const [ user, setLoginUser] = useState({})
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/dashboard" exact element={user && user._id ? <Dashboard setLoginUser={setLoginUser} /> : <S_login setLoginUser={setLoginUser}/> && <Alu_login setLoginUser={setLoginUser}/>} />
      console.log(user);
      console.log(user._id);
      <Route exact path="/" element={<CarouselFadeExample/>} />
      <Route exact path="/signup" element={<SignUp/>} />
      <Route exact path="/alu_signup" element={<Alu_signup/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/s_login" element={<S_login setLoginUser={setLoginUser}/>} />
      <Route exact path="/alu_login" element={<Alu_login setLoginUser={setLoginUser}/>} />
      {/* <Route path="/alumniform" element={<AlumniForm/>} />   */}
      <Route path="/oir" element={<Oir/>} />    
      <Route path="/verbal" element={<CheckUserExist><Verbal/></CheckUserExist>} />
      <Route path="/ppdt_ques" element={<PpdtQues />} />
      <Route path="/non_verbal" element={<Non_verbal/>} />
      <Route path="/result" element={<CheckUserExist><Result_ver/></CheckUserExist>} />
      <Route path="/wat_test" element={<Wat_test/>} />
      <Route path="/wat" element={<Wat/>} />      
      <Route path="/tat" element={<Tat/>} />
      <Route path="/ppdt" element={<Ppdt/>} />      
      <Route path="/srt" element={<Srt/>} />
      <Route path='/ppdt_intro' element={<PpdtIntro/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;