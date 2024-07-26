import React, { useContext } from "react";
import avatar from "../images/man.png";
import "./Header.css";
import { AppContext } from "../App";

export const Header = ({ toggleBar }) => {
  const { library, bag } = useContext(AppContext);
  return (
    <header>
      <a href="http://" className="menu show" onClick={toggleBar}>
        <i className="bi bi-sliders"></i>
      </a>
      <div className="userItems">
        <a href="http://" className="icon">
          <i className="bi bi-heart-fill">
            <span className="like">{library.length}</span>
          </i>
        </a>
        <a href="http://" className="icon">
          <div className="bi bi-bag-fill">
            <span className="bag">{bag.length}</span>
          </div>
        </a>
        <div className="avatar">
          <a href="http://">
            <img src={avatar} alt="User-Image" />
          </a>
          <div className="user">
            <span>User Name</span>
            <a href="http://">View Profile</a>
          </div>
        </div>
      </div>
    </header>
  );
};
