import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <BrowserRouter>
      <Routes>
        <Route exact path = '/' element={<Home/>}/>
        <Route exact path = '/about' element={<About/>}/>

      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
