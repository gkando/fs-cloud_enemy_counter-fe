import React from "react";
import logo from "../img/codehammer-brand-logo-sm.png";

interface PropsInterface {
  clickHandler: () => void;
}
const NavBar: React.FC<PropsInterface> = (props) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="brand">
          <a href="#home">
            <img alt="CodeHammer Nav Bar Logo" src={logo} />
          </a>
        </div>
        <nav className="menu" id="navbar">
          <a className="menu-item navbar-item active" id="nav-home" href="#home">
            Home
          </a>
          <div className="menu-item navbar-item" id="nav-home" onClick={props.clickHandler}>
            Show Game Server
          </div>
          <a className="menu-item navbar-item" href="#about">
            About
          </a>
          <a className="menu-item navbar-item" href="#tech">
            Tech Stack
          </a>
        </nav>
      </div>
    </header>
  );
};
export default NavBar;
