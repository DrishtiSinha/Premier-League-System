import "./App.css";
import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home.js";
import Management from "./components/Management.js";
import Players from "./components/Players.js";
import Venue from "./components/Venue.js";
import Teams from "./components/Teams.js";
import Matches from "./components/Matches.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
          <Route exact path ="/" element={<Home/>}/>
          <Route exact path="Home" element={<Home/>}/>
          <Route exact path="Teams" element={<Teams/>} />
          <Route exact path="Players" element={<Players/>}/>
          <Route exact path="Management" element={<Management/>} />
          <Route exact path="Venue" element={<Venue/>} />
          <Route exact path="Matches" element={<Matches/>} />
          </Routes>
        </BrowserRouter>
      </div>
      
    );
  }
export default App;
