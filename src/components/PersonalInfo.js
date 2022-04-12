import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
const PersonalInfo = () => {
  return (
    <Fragment>
      <Paper elevation={24} rounded>
        <Card style={{ backgroundColor: "black", color: "white" }}>
          <CardHeader title="Personal Information" />

          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={2}>
                <h4>Name:</h4>
              </Grid>
              <Grid item xs={10}>
                <h4>Sanket Govind Khardekar</h4>
              </Grid>

            </Grid>

          </CardContent>
        </Card>
      </Paper>
    </Fragment>
  );
};
export default PersonalInfo;
