import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="#">
        <img
          className="header_logo"
          src="https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png"
          width="40"
          height="38"
          alt="logo"
        />
      </a>
      <a href="#">
        <h2 className="header_name">React-Social</h2>
      </a>
    </header>
  );
};

export default Header;
