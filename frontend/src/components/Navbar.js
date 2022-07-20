import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="main-nav">
        <div className="nav-items-main">
          <div className="navbar-name">
            <a href="https://www.codingkevin.com">KEVIN MCLAUGHLIN</a>
          </div>
          <div className="hamburger-icon">
            <img src="../hamburger.png"></img>
          </div>
        </div>
        <div className="nav-items">
          <a href="https://kevin-tickets-backend.herokuapp.com/users/login">
            Tickets
          </a>
          <a href="https://www.codingkevin.com/diagrams/index.html">Diagrams</a>
          <a href="https://www.codingkevin.com/reading_levels/reading-levels.html">
            Reading Levels
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
