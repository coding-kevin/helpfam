import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="main-nav">
        <div className="nav-items-main">
          <div className="navbar-name">
            <a href="../../../../index.html">KEVIN MCLAUGHLIN</a>
          </div>
          <div className="hamburger-icon">
            <img src="../hamburger.png"></img>
          </div>
        </div>
        <div className="nav-items">
          <a href="./index.html">Tickets</a>
          <a href="../../../../diagrams/index.html">Diagrams</a>
          <a href="../../../../reading_levels/index.html">Reading Levels</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
