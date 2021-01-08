import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar, IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Header() {
  const user = useSelector(selectUser);
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>

      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar src={user?.photoUrl} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
}

export default Header;
