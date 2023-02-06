import '../App.css';
import { BrowserRouter ,Link,Routes,  Route } from "react-router-dom"
// import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import CarouselFadeExample from './Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<CarouselFadeExample/>} />
      <Route exact path="/signup" element={<SignUp/>} />
      <Route exact path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
