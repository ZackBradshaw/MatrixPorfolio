import React from "react";
import DeskImg from "./images/Desk.png";
import "./desk.css";

const Desk = () => {
  return (
    <div className="container">
      <img className="deskImg" id="desk" src={DeskImg} alt="desk"></img>
    </div>
  );
};

export default Desk;
