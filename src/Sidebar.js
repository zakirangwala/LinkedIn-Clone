import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1524046960467-39d55b270f83?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBwYXJrfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
          alt="background-banner"
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar"></Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">400</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software development")}
        {recentItem("graphic design")}
      </div>
    </div>
  );
}

export default Sidebar;
