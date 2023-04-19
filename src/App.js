import "./App.css";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import { Alert } from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <div className="container">
          <Alert message="" />
          <Routes>
            <Route exact path="/" key={Home} element={<Home />} />
            <Route exact path="/about" key={About} element={<About />} />
            <Route exact path="/login" key={Login} element={<Login />} />
            <Route exact path="/signup" key={Signup} element={<Signup />} />

          </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </> 
  );
}

export default App;
