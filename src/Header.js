import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header__left">
        <img src="https://image.flaticon.com/icons/png/512/61/61109.png" alt="Linkedin Logo" />
        <div className="header__search">
            <SearchIcon />
            <input type="text"></input>
        </div>
      </div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
