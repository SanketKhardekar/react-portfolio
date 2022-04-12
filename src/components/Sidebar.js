import { Avatar } from "@mui/material";
import React from "react";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import DraftsIcon from "@mui/icons-material/Drafts";
import { useLocation } from 'react-router-dom';
const Sidebar = (props) => {

  let location = useLocation();
  let pathName=location.pathname;
  return (
    <div
      style={{
        margin:'20px',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent:"center"
      }}
    >
      <div>
        <Avatar className={styles.icons} sx={pathName==="/" ? { bgcolor: "#cfa144" } :{ bgcolor: "#2B2A2A" }}>
          <Link className={styles.link} to="/">
            <HomeIcon color="white" />
          </Link>
        </Avatar>
      </div>
      <div>
        <Avatar className={styles.icons} sx={pathName==="/about" ? { bgcolor: "#cfa144" } :{ bgcolor: "#2B2A2A" }}>
          <Link className={styles.link} to="/about">
            <PersonIcon color="white" />
          </Link>
        </Avatar>
      </div>
      <div>
        <Avatar className={styles.icons} sx={pathName==="/portfolio" ? { bgcolor: "#cfa144" } :{ bgcolor: "#2B2A2A" }}>
          <Link className={styles.link} to="/portfolio">
            <WorkIcon color="white" />
          </Link>
        </Avatar>
      </div>
      <div>
        <Avatar className={styles.icons} sx={pathName==="/contact" ? { bgcolor: "#cfa144" } :{ bgcolor: "#2B2A2A" }}>
          <Link className={styles.link} to="/contact">
            <DraftsIcon color="white" />
          </Link>
        </Avatar>
      </div>
    </div>
  );
};
export default Sidebar;
