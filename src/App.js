import logo from "./logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Home from "./Home";
import StudentView from "./componenet/Student/StudentView";

import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import NavBar from "./common/NavBar.js";

function App() {
  return (

  
    <BrowserRouter>
    <NavBar />
    <div className="container mt-4">
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/StudentView" element={<StudentView />} />
      </Routes>
    </div>
  </BrowserRouter>
);
    
  
}

export default App;
