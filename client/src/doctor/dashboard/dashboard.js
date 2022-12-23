import React, { useState, useEffect } from "react";
import { Grid, Paper, Container, Typography } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";
import Navbar from "../navbar";
import Form from "./form";
import Upload from "./upload";
import { container, paper, upload } from "../styles";
import patient from "./upload";
import {Divider} from "@mui/material";
import { db, storage } from "../../firebase";

import Box from '@mui/material/Box';

const Doctor_Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <Navbar selectedItem={0}>
        <Container maxWidth="lg" sx={container}>
          <Box sx={{ width: "100%" }}>
            <Typography variant="h3" gutterBottom sx={{color:"rgba(84, 95, 99, 1)",marginTop:"20px"}}>
            Dashboard
            </Typography>
          </Box>
          {/* <Divider marginBottom ="20px"></Divider> */}

          <Grid container spacing={3}>
            {/* UPLOAD PROFILE PICTURE */}
            <Grid item xs={12} md={4} lg={4}>
              <Paper sx={upload} style={{marginTop:"20px",height:"100%"}} elevation={6} >
                <Upload uid={currentUser.uid} />
              </Paper>
            </Grid>

            {/* UPDATE DETAILS */}
            <Grid item xs={12} md={8} lg={8}>
              <Paper sx={paper} elevation={6} style={{marginTop:"20px",height:"100%"}}>
                <Form uid={currentUser.uid} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Navbar>
    </>
  );
};


export default Doctor_Dashboard;
