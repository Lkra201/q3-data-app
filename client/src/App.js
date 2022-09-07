
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Login from './Components/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
