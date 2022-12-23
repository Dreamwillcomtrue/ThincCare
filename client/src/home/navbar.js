import * as React from "react";
import './home.css';
import ThincCareImg from "./logo3.png";
import { Link } from "react-router-dom";
import {
  Typography,
  Grid,
} from "@mui/material";

const Navbar = (props) => {
  const { sections } = props;

  return (
    <React.Fragment id="">
      {/* TITLE */}
      <header class="header" >
        {/* <img src={ThincCareImg} width="80" height="80" />
        <a href="#" class="logo"><i class="fas fa-heartbeat"></i> ThincCare </a> */}
        <Grid item xs={3}>
          <Link
            to=" "
            style={{ maxWidth: "300px", maxHeight: "90px", alignItems: "left", display: "flex" }}
          >
            <Grid container>
              <Grid item>
                <img
                  id="main-logo"
                  src={ThincCareImg} width="80" height="80"
                  alt="ThincHealth Dashboard"
                />
              </Grid>
              <Grid item>

                <Typography
                  className="logo" marginTop={2}
                >
                  ThincCare
                </Typography>
              </Grid>
            </Grid>
          </Link>
        </Grid>
        <Grid item xs={9}>
          <nav class="navbar" style={{ marginTop: "18px" }}>
            <a href="#home">home</a>
            <a href="#services">services</a>
            <a href="#about">about</a>
            <a href="#doctors">doctors</a>
            <a href="#book">book</a>
            <a href="#review">review</a>
            <a href="#blogs">blogs</a>
          </nav>
        </Grid>






        <div id="menu-btn" class="fas fa-bars"></div>

      </header>
    </React.Fragment>
  );
};

export default Navbar;
