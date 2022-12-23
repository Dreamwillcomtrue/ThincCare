import * as React from "react";
import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./navbar";
import Header from "./header";
import Register from "./register";
import About from "./about";
import Testimonials from "./testimonials";
import Footer from "./footer";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const sections = [
  { title: "Home", url: "#" },
  { title: "About", url: "#about" },
  { title: "Register", url: "#register" },
  { title: "Contact", url: "#contact" },
];

const theme = createTheme();

const Home = () => {
  return (
   
      <div >
        <CssBaseline />
        {/* maxWidth="lg" sx={{ backgroundColor: "#d7e8f4" }} */}
        <div maxWidth="100%" sx={{ backgroundColor: "#d7e8f4" }}>
          {/* NAVBAR COMPONENT - links to various sections*/}
          <Navbar sections={sections} />

          <main >
            {/* HEADER COMPONENT - image with tagline*/}
            {/* <Header /> */}
            {/* REGISTER COMPONENT - signup/signin for doctor/patient */}
            <Register />
            <br />
            <br />
            {/* ABOUT COMPONENT - about doctors */}
            {/* <About /> */}
            {/* TESTIMONIALS COMPONENT - patient testimonials */}
            {/* <Testimonials /> */}
            {/* FOOTER COMPONENT - contacts */}
            <Footer />
          </main>
        </div>
      </div>
    

    // <Container maxWidth="100%" >
    //   <CssBaseline />
    //   <Grid sx={12}>
    //     <Navbar sections={sections} /> 
    //   </Grid>
    //   <Grid>
    //     <main>
    //       {/* HEADER COMPONENT - image with tagline*/}
    //       {/* <Header /> */}
    //       {/* REGISTER COMPONENT - signup/signin for doctor/patient */}
    //       <Register />
    //       <br />
    //       <br />
    //       {/* ABOUT COMPONENT - about doctors */}
    //         {/* <About /> */}
    //         {/* TESTIMONIALS COMPONENT - patient testimonials */}
    //         {/* <Testimonials /> */}
    //         {/* FOOTER COMPONENT - contacts */}
    //         <Footer />
    //       </main>
    //   </Grid>
    // </Container>


  );
};

export default Home;
