import React from "react"
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Test from './components/Test';
import Home from './pages/Home'
import Colombia from "./pages/Colombia";
import RuPaul from "./pages/RuPaul";
import Spotify from "./pages/Spotify";
import Magazine from "./pages/Magazine";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Colombia-Digital-History-Lab' element={<Colombia/>} />
          <Route path='/RuPauls-Machine-Learning-Race' element={<RuPaul/>} />
          <Route path='/Spotify-Mapped' element={<Spotify/>} />
          <Route path='/Magazine-Cover-Viewer' element={<Magazine/>} />
          <Route path='/test' element={<Test/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
