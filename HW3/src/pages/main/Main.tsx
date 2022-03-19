import React from "react";
import { Route, Routes } from "react-router-dom";
import Content from "../../components/Content/Content";
import Navbar from "../../components/NavBar/Navbar";
import "./Main.scss"
const Main = () => {
  return (
    <div className="main">
      <Navbar  />
      <Content />
    </div>
  );
};

export default Main;
