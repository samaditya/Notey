import './App.css';
import ErrorBoundary from './components/ErrorBoundary'
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <ErrorBoundary>
    <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route exact path="/about" element={<About/>}/>
     </Routes>
     </BrowserRouter>

     </ErrorBoundary>
    </div>
  );
}

export default App;
