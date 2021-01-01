import { Button } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button className="compose" startIcon={<AddIcon fontSize="large" />}>
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={23}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" />
    </div>
  );
}

export default Sidebar;
