import React from "react";
import styles from "./Sidebar.module.css";
import { useLocation } from "react-router-dom";
import SidebarIcon from "./SidebarIcon";
const IconsList = [
  {
    id:1,
    title: "HOME",
    to: "/",
    icon: "fa-solid fa-house-chimney",
  },
  {
    id:2,
    title: "ABOUT",
    to: "/about",
    icon: "fa-solid fa-user",
  },
  {
    id:3,
    title: "PORTFOLIO",
    to: "/portfolio",
    icon: "fa-solid fa-briefcase",
  },
  {
    id:4,
    title: "CONTACT",
    to: "/contact",
    icon: "fa-solid fa-envelope",
  },
];
const Sidebar = (props) => {
  let location = useLocation();
  let pathName = location.pathname;
  const iconListComponent = IconsList.map((element) => {
    let activeLink = pathName === element.to;
    return (
      <SidebarIcon
        key={element.id}
        title={element.title}
        active={activeLink}
        to={element.to}
        icon={element.icon}
      />
    );
  });
  return <div className={styles.sidebar}>{iconListComponent}</div>;
};
export default Sidebar;
