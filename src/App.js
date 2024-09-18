
import './App.css';
import About from './About';
import Home from './Home';
import Vans from './Vans';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
// import {faLinkedin, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    <Router basename='/vans'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/vans' element={<Vans/>} />
      </Routes>
    </Router>
  );
}

export default App;
