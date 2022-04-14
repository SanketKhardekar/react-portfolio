import React from "react";
import styles from "./SidebarIcon.module.css"
import { Link } from "react-router-dom";
const SidebarIcon=(props)=>{
    const activeClass= props.active ? styles.active : '';
    return(
    <Link className={`${styles.button} ${activeClass}`} to={props.to}>
        <div className={styles.icon}>
          <i className={props.icon}></i>
        </div>
        <span>{props.title}</span>
      </Link>
    );
}
export default SidebarIcon;