import React from "react";

export const SocialMediaListItem = ({ item }) => {
  return (
    <li>
      <a href="#sa" className={item.class}>
        <i className={`bi ${item.icon}`}></i>
      </a>
    </li>
  );
};
