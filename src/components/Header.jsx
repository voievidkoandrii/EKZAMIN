import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ display: "flex", justifyContent: "space-around", padding: "20px", background: "#282c34", color: "white" }}>
      <nav>
      <Link to="/" style={{ margin: "0 10px", textDecoration: "none", color: "white" }}>🏠 Home</Link>
        <Link to="/horisontal" style={{ margin: "0 10px", textDecoration: "none", color: "white" }}>
          Горизонтальний
        </Link>
        <Link to="/vertikal" style={{ margin: "0 10px", textDecoration: "none", color: "white" }}>
          Вертикальний
        </Link>
      </nav>
    </header>
  );
};

export default Header;
