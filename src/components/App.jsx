import '../App.css';
import { BrowserRouter ,Link,Routes,  Route,Navigate } from "react-router-dom"
// import Home from './Home';
import SignUp from './SignUp';
import S_login from './S_login'
import CarouselFadeExample from './Home';
import Dashboard from './Dashboard';
import AlumniForm from './AlumniForm';
import Login from './Login';
import Oir from './Oir'
import Wat from './Wat';
import { Tab } from 'bootstrap';
import Tat from './Tat';
import Srt from './Srt';
import Verbal from './Verbal';
import PpdtQues from './Ppdt/PpdtQues';
import Non_verbal from './Non_verbal';
import Result_ver from './Result_ver';
import { CheckUserExist } from '../helper/helper';
import Ppdt from './Ppdt/Ppdt';
import PpdtIntro from './Ppdt/PpdtIntro';


function App() {
  const user = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/dashboard" exact element={<Dashboard />} />
      <Route exact path="/" element={<CarouselFadeExample/>} />
      <Route exact path="/signup" element={<SignUp/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/s_login" element={<S_login/>} />
      <Route path="/alumniform" element={<AlumniForm/>} />  
      <Route path="/oir" element={<Oir/>} />    
      <Route path="/verbal" element={<CheckUserExist><Verbal/></CheckUserExist>} />
      <Route path="/ppdt_ques" element={<PpdtQues />} />
      <Route path="/non_verbal" element={<Non_verbal/>} />
      <Route path="/result" element={<CheckUserExist><Result_ver/></CheckUserExist>} />
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
