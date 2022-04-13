import React, { Fragment } from "react";
import styles from "./PersonalInfo.module.css"
import ProfilePic from "./ProfilePic";
const PersonalInfo = () => {
  return (
    <Fragment>
      <div className={styles.mainContainer}>
        <ProfilePic />
      </div>
    </Fragment>
  );
};
export default PersonalInfo;
