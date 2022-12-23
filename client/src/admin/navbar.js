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
  Grid,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import PostAddIcon from "@mui/icons-material/PostAdd";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LogoutIcon from "@mui/icons-material/Logout";

import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const drawerWidth = 240;

export default function Navbar(props) {
  const { children, selectedItem } = props;
  const history = useHistory();

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
            // backgroundImage: `linear-gradient(to bottom,  rgba(70, 45, 55, 1), rgba(70, 90, 120, 1))`,
            backgroundColor:"rgba(70,90,120,1)",
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
            style={{ maxWidth: "200px", maxHeight: "50px", margin: "auto" }}
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
                  <b>ThincHealth Admin</b>
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
              href="/admin/dashboard"
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
            <ListItem button component="a" href="/admin/dashboard">
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
              href="/doctors"
              sx={{
                backgroundColor: "black",
                borderRadius: "25px 0px 0px 25px ",
              }}
            >
              <Tooltip title="Profile" placement="right">
                <ListItemIcon sx={{ color: "white" }}>
                  <MedicalServicesIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Doctors</ListItemText>
            </ListItem>
          ) : (
            <ListItem button component="a" href="/doctors">
              <Tooltip title="Doctors" placement="right">
                <ListItemIcon>
                  <MedicalServicesIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Doctors</ListItemText>
            </ListItem>
          )}

          {/* VIEW DOCTORS/BOOK APPOINTMENTS */}
          {selectedItem === 2 ? (
            <ListItem
              button
              component="a"
              href="/patients"
              sx={{
                backgroundColor: "black",
                borderRadius: "25px 0px 0px 25px ",
              }}
            >
              <Tooltip title="Profile" placement="right">
                <ListItemIcon sx={{ color: "white" }}>
                  <PeopleIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Patients</ListItemText>
            </ListItem>
          ) : (
            <ListItem button component="a" href="/patients">
              <Tooltip title="Patients" placement="right">
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Patients</ListItemText>
            </ListItem>
          )}

          {/* NOTIFICATIONS */}
          {selectedItem === 3 ? (
            <ListItem
              button
              component="a"
              href="/create_post"
              sx={{
                backgroundColor: "black",
                borderRadius: "25px 0px 0px 25px ",
              }}
            >
              <Tooltip title="Notifications" placement="right">
                <ListItemIcon sx={{ color: "white" }}>
                  <PostAddIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Create Post</ListItemText>
            </ListItem>
          ) : (
            <ListItem button component="a" href="/create_post">
              <Tooltip title="Create Post" placement="right">
                <ListItemIcon>
                  <PostAddIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Create Post</ListItemText>
            </ListItem>)}

          {/* SCHEDULED MEETINGS */}
          {selectedItem === 4 ? (
            <ListItem
              button
              component="a"
              href="/latest_updates"
              sx={{
                backgroundColor: "black",
                borderRadius: "25px 0px 0px 25px ",
              }}
            >
              <Tooltip title="scheduled meetings" placement="right">
                <ListItemIcon sx={{ color: "white" }}>
                  <NewspaperIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Latest Updates</ListItemText>
            </ListItem>
          ) : (
            <ListItem button component="a" href="/latest_updates">
              <Tooltip title="Latest Updates" placement="right">
                <ListItemIcon>
                  <NewspaperIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Latest Updates</ListItemText>
            </ListItem>)}

          {/* PAST APPOINTMENTS */}
          {selectedItem === 5 ? (
            <ListItem
              button
              component="a"
              href="/notifications"
              sx={{
                backgroundColor: "black",
                borderRadius: "25px 0px 0px 25px ",
              }}
            >
              <Tooltip title="past_appointments" placement="right">
                <ListItemIcon sx={{ color: "white" }}>
                  <NotificationsIcon/>
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Notifications</ListItemText>
            </ListItem>
          ) : (
            <ListItem button component="a" href="/notifications">
              <Tooltip title="Notifications" placement="right">
                <ListItemIcon>
                  <NotificationsIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Notifications</ListItemText>
            </ListItem>)}

          {/* LATEST UPDATES */}
          {selectedItem === 6 ? (
            <ListItem
              button
              component="a"
              href="/feedbacks"
              sx={{
                backgroundColor: "black",
                borderRadius: "25px 0px 0px 25px ",
              }}
            >
              <Tooltip title="latest updates" placement="right">
                <ListItemIcon sx={{ color: "white" }}>
                  <EmailIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Read Feedback</ListItemText>
            </ListItem>
          ) : (
            <ListItem button component="a" href="/feedbacks">
              <Tooltip title="Read Feedbacks" placement="right">
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText>Read Feedbacks</ListItemText>
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

