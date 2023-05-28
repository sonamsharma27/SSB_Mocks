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
import Watintro from './Wat/WatIntro';
import { Tab } from 'bootstrap';
import Tat from './Tat/Tat';
import SrtIntro from './Srt/SrtIntro';
import Srt from './Srt/Srt';
import TatIntro from './Tat/TatIntro';
import Verbal from './Verbal';
import PpdtQues from './Ppdt/PpdtQues';
// import Non_verbal from './Non_verbal';
import Alu_login from './Alu_login';
import Alu_signup from './Alu_signup';
import Result_ver from './Result_ver';
import { CheckUserExist } from '../helper/helper';
import Ppdt from './Ppdt/Ppdt';
import PpdtIntro from './Ppdt/PpdtIntro';
import { useState } from 'react';
import Wat from './Wat/Wat';
import Gpe from './Gpe/Gpe';
import GpeIntro from './Gpe/GpeIntro';
import Response from './Response/Response'
import AlumniDash from './AlumniDashboard/AlumniDash';
import Test_material_aspirant from './TestMaterialByAspirants/Test_material_aspirant';
import AlumniTestMaterial from './AlumniDashboard/AlumniTestMaterial';
import AlumniHome from './AlumniDashboard/AlumniHome';
import SrtResponse from './AlumniDashboard/SrtResponse';
import PpdtResponse from './AlumniDashboard/PpdtResponse';
import TatResponse from './AlumniDashboard/TatResponse';
import WatResponse from './AlumniDashboard/WatResponse';
import GpeResponse from './AlumniDashboard/GpeResponse';
import AdminDashboard from './Admin/AdminDashboard';
import AdminSrt from './Admin/AdminSrt';
import AdminWat from './Admin/AdminWat';
import AdminTat from './Admin/AdminTat';
import AdminPpdt from './Admin/AdminPpdt';
import AdminGpe from './Admin/AdminGpe';
import Non_verbal from './Non_verbal';
import Non_ques_ver from './Non_ques_ver';
import PpdtFeedback from './Response/PpdtFeedback';
import SrtFeedback from './Response/SrtFeedback';
import WatFeedback from './Response/WatFeedback';
import TatFeedback from './Response/TatFeedback';
import GpeFeedback from './Response/GpeFeedback';

function App() {
  // const user = localStorage.getItem("token");
  const [ user, setLoginUser] = useState({})
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/dashboard" exact element={user?<Dashboard setLoginUser={setLoginUser} /> : <S_login setLoginUser={setLoginUser}/> && <Alu_login setLoginUser={setLoginUser}/>} />
      <Route exact path="/" element={<CarouselFadeExample/>} />
      <Route exact path="/signup" element={<SignUp/>} />
      <Route exact path="/alu_signup" element={<Alu_signup/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/s_login" element={<S_login setLoginUser={setLoginUser}/>} />
      <Route exact path="/alu_login" element={<Alu_login setLoginUser={setLoginUser}/>} />
      {/* <Route path="/alumniform" element={<AlumniForm/>} />   */}
      <Route path="/add_test_material" element={<Test_material_aspirant/>} />
      <Route path="/oir" element={<Oir/>} />    
      <Route path="/verbal" element={<CheckUserExist><Verbal/></CheckUserExist>} />
      <Route path="/ppdt_ques" element={<PpdtQues />} />
      {/* <Route path="/non_verbal" element={<Non_verbal/>} /> */}
      <Route path="/result" element={<CheckUserExist><Result_ver/></CheckUserExist>} />
      <Route path="/watintro" element={<Watintro/>} />      
      <Route path="/wat" element={<Wat/>} />      
      <Route path="/tatintro" element={<TatIntro/>} />      
      <Route path="/tat" element={<Tat/>} />
      <Route path="/ppdt" element={<Ppdt/>} />      
      <Route path="/srtintro" element={<SrtIntro/>} />
      <Route path="/srt" element={<Srt/>} />
      <Route path='/ppdt_intro' element={<PpdtIntro/>}/>
      <Route path='/gpe_intro' element={<GpeIntro/>}/>
      <Route path='/gpe' element={<Gpe/>}/>
      <Route path='/response' element={<Response/>}/>
      <Route path='/alumnidash' element={<AlumniDash/>}/>
      <Route path='/alumnitestmaterial' element={<AlumniTestMaterial/>}/>
      <Route path='/alumnihome' element={<AlumniHome/>}/>
      <Route path='/srtresponse' element={<SrtResponse/>}/>
      <Route path='/ppdtresponse' element={<PpdtResponse/>}/>
      <Route path='/tatresponse' element={<TatResponse/>}/>
      <Route path='/watresponse' element={<WatResponse/>}/>
      <Route path='/gperesponse' element={<GpeResponse/>}/>
      <Route path='/admindash' element={<AdminDashboard/>}/>
      <Route path='/adminsrt' element={<AdminSrt/>}/>
      <Route path='/adminwat' element={<AdminWat/>}/>
      <Route path='/admintat' element={<AdminTat/>}/>
      <Route path='/adminppdt' element={<AdminPpdt/>}/>
      <Route path='/admingpe' element={<AdminGpe/>}/>
      <Route path='/nonverbal' element={<Non_verbal/>}/>
      <Route path='/nonquesver' element={<Non_ques_ver/>}/>
      <Route path='/ppdtfeedback' element={<PpdtFeedback/>}/>
      <Route path='/srtfeedback' element={<SrtFeedback/>}/>
      <Route path='/watfeedback' element={<WatFeedback/>}/>
      <Route path='/tatfeedback' element={<TatFeedback/>}/>
      <Route path='/gpefeedback' element={<GpeFeedback/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;