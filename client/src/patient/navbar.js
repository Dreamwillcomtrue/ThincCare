import * as React from "react";
import { useHistory } from "react-router-dom";
import firebase from "../firebase";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Tooltip,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Divider,
  IconButton,
  Typography,
  List,
  Toolbar,
  Grid
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import CreateIcon from "@mui/icons-material/Create";
import Notifications from "./notifications";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonIcon from "@mui/icons-material/Person";
import DateRangeIcon from "@mui/icons-material/DateRange";
import VideocamIcon from "@mui/icons-material/Videocam";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LogoutIcon from "@mui/icons-material/Logout";


import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import CardMedia from "@mui/material/CardMedia";

// import List from "./navbar/navBarComponent"

// rewrite the open and close drawer to the permanent one, and changing the style of it

// export default Navbar;

const drawerWidth = 240;

export default function ClippedDrawer(props) {
  const { children, selectedItem } = props;
  const history = useHistory();
  // const { hideLogoText } = this.props;
  // SIGN OUT FUNCTION
  const handleSignout = () => {
    firebase.auth().signOut();
    history.push("/#");
  };
  return (
    <Box sx={{ display: "flex", backgroundColor: "grey" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        style={{ backgroundColor: "white" }}
      >
        <Toolbar disableGutters>
          {/* search bar sourced from src\components\layout\MainNavbar\NavbarSearch.js */}
          <Box sx={{ alignItems: "center", paddingTop: 2 }}>
            <IconButton aria-label="delete">
              <SearchIcon />
            </IconButton>
            <TextField
              size="small"
              label="Search For Something..."
              variant="standard"
              sx={{
                transform: "scale(0.85, 0.85)",
                marginTop: -1,
                marginLeft: -2,
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundImage: `linear-gradient(to bottom, rgba(70, 90, 120, 1), rgba(70, 45, 55, 1))`,
            color: "white",
            height: "100%",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* add logo link to dashboard page*/}

        <Toolbar style={{ backgroundColor: "white" }}>
          <Link
            to="dashboard"
            style={{ maxWidth: "240px", maxHeight: "50px" ,margin:"auto"}}
          >
            <Grid container>
              <Grid item>
                <img
                  id="main-logo"
                  style={{ maxWidth: "200px", maxHeight: "50px" }}
                  src={require("./images/logo.png")}
                  alt="ThincHealth Dashboard"
                />
              </Grid>
              <Grid item>

                <Typography
                  fontSize={14}
                  style={{
                    color: "#2196F3",
                    marginTop: "10px",
                  }}
                >
                  <b>ThincHealth Patient</b>
                </Typography>
              </Grid>
            </Grid>
          </Link>
        </Toolbar>

        <Divider />

        <List>
          {/* DASHBOARD */}
          {selectedItem === 0 ? (
            <ListItem
              button
              component="a"
              href="/patient/dashboard"
              sx={{
                backgroundColor: "black",
                borderRadius: "25px 0px 0px 25px ",
              }}
            >
              <Tooltip title="Dashboard" placement="right">
                <ListItemIcon sx={{ color: "white" }}>
                  <DashboardIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Dashboard</ListItemText>
            </ListItem>
          ) : (
            <ListItem button component="a" href="/patient/dashboard">
              <Tooltip title="Dashboard" placement="right">
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Dashboard</ListItemText>
            </ListItem>
          )}

          {/* {selectedItem === 0? <ListItemText sx={{backgroundColor: "white"}}>Dashboard</ListItemText>: <ListItemText>Dashboard</ListItemText>} */}

          {/* PROFILE */}
          {selectedItem === 1 ? (
            <ListItem
              button
              component="a"
              href="/patient/profile"
              sx={{
                backgroundColor: "black",
                borderRadius: "25px 0px 0px 25px ",
              }}
            >
              <Tooltip title="Profile" placement="right">
                <ListItemIcon sx={{ color: "white" }}>
                  <PersonIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Profile</ListItemText>
            </ListItem>
          ) : (
            <ListItem button component="a" href="/patient/profile">
              <Tooltip title="Profile" placement="right">
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Profile</ListItemText>
            </ListItem>
          )}

          {/* VIEW DOCTORS/BOOK APPOINTMENTS */}
          {selectedItem === 2 ? (
            <ListItem
              button
              component="a"
              href="/patient/view_doctors"
              sx={{
                backgroundColor: "black",
                borderRadius: "25px 0px 0px 25px ",
              }}
            >
              <Tooltip title="Profile" placement="right">
                <ListItemIcon sx={{ color: "white" }}>
                  <PersonIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Book Appointment</ListItemText>
            </ListItem>
          ) : (
            <ListItem button component="a" href="/patient/view_doctors">
              <Tooltip title="Book Appointment" placement="right">
                <ListItemIcon>
                  <CreateIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Book Appointment</ListItemText>
            </ListItem>
          )}

          {/* NOTIFICATIONS */}
          {selectedItem === 3 ? (
            <ListItem
              button
              component="a"
              href="/patient/notifications"
              sx={{
                backgroundColor: "black",
                borderRadius: "25px 0px 0px 25px ",
              }}
            >
              <Tooltip title="Notifications" placement="right">
                <ListItemIcon sx={{ color: "white" }}>
                  <PersonIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Notifications</ListItemText>
            </ListItem>
          ) : (
            <ListItem button component="a" href="/patient/notifications">
              <Tooltip title="Notifications" placement="right">
                <ListItemIcon>
                  <Notifications />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Notifications</ListItemText>
            </ListItem>)}

          {/* SCHEDULED MEETINGS */}
          {selectedItem === 4 ? (
            <ListItem
              button
              component="a"
              href="/patient/scheduled_meetings"
              sx={{
                backgroundColor: "black",
                borderRadius: "25px 0px 0px 25px ",
              }}
            >
              <Tooltip title="scheduled meetings" placement="right">
                <ListItemIcon sx={{ color: "white" }}>
                  <PersonIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Scheduled Meetings</ListItemText>
            </ListItem>
          ) : (
            <ListItem button component="a" href="/patient/scheduled_meetings">
              <Tooltip title="Scheduled Meetings" placement="right">
                <ListItemIcon>
                  <VideocamIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Scheduled Meetings</ListItemText>
            </ListItem>)}

          {/* PAST APPOINTMENTS */}
          {selectedItem === 5 ? (
            <ListItem
              button
              component="a"
              href="/patient/past_appointments"
              sx={{
                backgroundColor: "black",
                borderRadius: "25px 0px 0px 25px ",
              }}
            >
              <Tooltip title="past_appointments" placement="right">
                <ListItemIcon sx={{ color: "white" }}>
                  <PersonIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Past Appointments</ListItemText>
            </ListItem>
          ) : (
            <ListItem button component="a" href="/patient/past_appointments">
              <Tooltip title="Past Appointments" placement="right">
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Past Appointments</ListItemText>
            </ListItem>)}

          {/* LATEST UPDATES */}
          {selectedItem === 6 ? (
            <ListItem
              button
              component="a"
              href="/patient/latest_updates"
              sx={{
                backgroundColor: "black",
                borderRadius: "25px 0px 0px 25px ",
              }}
            >
              <Tooltip title="latest updates" placement="right">
                <ListItemIcon sx={{ color: "white" }}>
                  <PersonIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Latest Updates</ListItemText>
            </ListItem>
          ) : (
            <ListItem button component="a" href="/patient/latest_updates">
              <Tooltip title="Latest Updates" placement="right">
                <ListItemIcon>
                  <NewspaperIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Latest Updates</ListItemText>
            </ListItem>)}

          <Divider />

          {/* SIGN OUT */}
          <ListItem button onClick={handleSignout}>
            <Tooltip title="Sign Out" placement="right">
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>Sign Out</ListItemText>
          </ListItem>
        </List>
      </Drawer>

      {children}
    </Box>
  );



}
