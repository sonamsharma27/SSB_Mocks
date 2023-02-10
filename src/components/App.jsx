import '../App.css';
import { BrowserRouter ,Link,Routes,  Route,Navigate } from "react-router-dom"
// import Home from './Home';
import SignUp from './SignUp';
import S_login from './S_login'
import CarouselFadeExample from './Home';
import Dashboard from './Dashboard';
import AlumniForm from './AlumniForm';
import Login from './Login';
import Wat from './Wat';
import { Tab } from 'bootstrap';
import Tat from './Tat';
import Srt from './Srt';


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
      <Route path="/wat" element={<Wat/>} />      
      <Route path="/tat" element={<Tat/>} />      
      <Route path="/srt" element={<Srt/>} />      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
