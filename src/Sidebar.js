import { Button } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" />
      <SidebarOption Icon={LabelImportantIcon} title="Important" />
      <SidebarOption Icon={NearMeIcon} title="Sent" />
      <SidebarOption Icon={NoteIcon} title="Drafts" />
      <SidebarOption Icon={ExpandMoreIcon} title="More" />
    </div>
  );
}

export default Sidebar;
