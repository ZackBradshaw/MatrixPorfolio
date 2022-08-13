import "./App.css";
import "./Canvas";
import Canvas from "./Canvas";
import React from "react";
import Desk from "./Desk";
import {ParticlesComp} from "./Particles";

function App() {
  return (
    <div className="App">
      <Canvas className="Canvas" />
      <Desk />
      <ParticlesComp />
    </div>
  );
}

export default App;
