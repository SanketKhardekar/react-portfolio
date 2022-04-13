import { Card, CardMedia, Paper } from "@mui/material";
import React from "react";
import styles from "./ProfilePic.module.css"
const ProfilePic = () => {
  return (
    <Paper elevation={20} className={styles.imageConatiner}>
      <Card >
        <CardMedia
          component="img"
          alt="profile-pic"
          image="https://tunis.ibthemespro.com/img/hero/img-mobile.jpg"
        />
      </Card>
    </Paper>
  );
};
export default ProfilePic;
