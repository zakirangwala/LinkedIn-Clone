import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption.js";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header__left">
        <img
          src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
          alt="Linkedin Logo"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text"></input>
        </div>
      </div>
      <div className="header__right">
        <HeaderOption />
      </div>
    </div>
  );
}

export default Header;
