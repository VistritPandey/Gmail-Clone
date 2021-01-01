import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo.png"
          alt=""
        />
      </div>

      <div className="header__middle"></div>

      <div className="header__right"></div>
    </div>
  );
}

export default Header;
