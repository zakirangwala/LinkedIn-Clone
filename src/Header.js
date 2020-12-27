import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import HeaderOption from "./HeaderOption.js";
import "./Header.css";

function Header() {
  return (
    <div className="header">
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
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
      </div>
      {/* <div className="avatar">
        <img
          onClick={() => window.open("https://zakirangwala.com")}
          className="nav__avatar"
          src="https://zakirangwala.com/assets/img/avatar.png"
          alt="Netflix Avatar"
        />
      </div> */}
    </div>
  );
}

export default Header;
