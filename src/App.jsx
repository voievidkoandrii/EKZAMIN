import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import StatsBar from "./components/StatsBar";

const App = () => {
  return (
    <>
      <Header />
      <StatsBar />
      <Outlet />
    </>
  );
};

export default App;
