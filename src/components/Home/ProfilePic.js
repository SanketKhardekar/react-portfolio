import { Card, CardMedia, Box } from "@mui/material";
import React from "react";
import styles from "./ProfilePic.module.css";
import Image from "../../assets/ProfilePic.png";
const ProfilePic = () => {
  return (
    <Box borderRadius={30}className={styles.imageConatiner}>
      <CardMedia component="img" alt="profile-pic" image={Image} /> 
    </Box>
    // <Card className={styles.imageConatiner}>
    //   <CardMedia component="img" alt="profile-pic" image={Image} />
    // </Card>
  );
};
export default ProfilePic;
