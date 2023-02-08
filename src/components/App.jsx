import '../App.css';
import { BrowserRouter ,Link,Routes,  Route } from "react-router-dom"
// import Home from './Home';
import SignUp from './SignUp';
import Login from './Admin_login';
import S_login from './S_login'
import CarouselFadeExample from './Home';
import Dashboard from './Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<CarouselFadeExample/>} />
      <Route exact path="/signup" element={<SignUp/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/s_login" element={<S_login/>} />
      <Route exact path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
