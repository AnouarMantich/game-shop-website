import React, { useState } from "react";
import "./SideMenu.css";
import navListData from "../data/navListData";
import NavListItem from "./NavListItem";
import socialListData from "../data/socialListData";
import { SocialMediaListItem } from "./SocialMediaListItem";

const SideMenu = ({ activeBar, sectionActive }) => {
  const [navData, setNavData] = useState(navListData);

  const handleNavOnClick = (id, target) => {
    const newNavData = navData.map((nav) => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });
    setNavData(newNavData);
    sectionActive(target);
  };

  return (
    <div className={`sideMenu ${activeBar ? "active" : ""}`}>
      <a href="#sd" className="logo">
        <i className="bi bi-controller"></i>
        <span className="brand">Play</span>
      </a>
      <ul className="nav">
        {navData.map((item) => (
          <NavListItem
            key={item._id}
            item={item}
            navOnClick={handleNavOnClick}
          />
        ))}
      </ul>
      <ul className="social">
        {socialListData.map((item) => (
          <SocialMediaListItem key={item.icon} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
