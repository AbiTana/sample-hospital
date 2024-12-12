import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Appointment from "./components/Pages/Appointment";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Appointment" element={<Appointment/>}/>
        </Routes>{" "}
      </BrowserRouter>
    </div>
  );
}

export default App;
