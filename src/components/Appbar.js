import React from "react";
import { AppBar, Container, Typography } from "@mui/material";

const AppBarContainer=(props)=>{
    return(<AppBar position="static">
        <Container maxWidth='l'>
            <Typography variant="h5">Portfolio</Typography>
        </Container>
    </AppBar>)
}
export default AppBarContainer;