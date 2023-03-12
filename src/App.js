import "./App.css";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import { Alert } from "./components/Alert";

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <div className="container">
          <Alert message="This is amazing React course" />
          <Routes>
            <Route exact path="/" key={Home} element={<Home />} />
            <Route exact path="/about" key={About} element={<About />} />
          </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
