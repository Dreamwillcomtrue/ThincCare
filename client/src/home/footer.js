import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import './home.css';
import {
  raleway,
} from "./styles";

const Copyright = () => {
  return (
    <Typography variant="body2" color="#ffffff" align="center" sx={raleway}>
      {"Copyright © "} {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
      <section class="footer">

      <div class="box-container">

          <div class="box">
              <h3>our services</h3>
              <a href="#"> <i class="fas fa-chevron-right"></i> ThincCare </a>
              <a href="#"> <i class="fas fa-chevron-right"></i> ThincHealth </a>
              <a href="#"> <i class="fas fa-chevron-right"></i> ThincAge </a>
              <a href="#"> <i class="fas fa-chevron-right"></i> Nutrition </a>
          </div>

          <div class="box">
              <h3>contact info</h3>
              <a href="#"> <i class="fas fa-phone"></i> VN (+84) 903736736 </a>
              {/* <a href="#"> <i class="fas fa-envelope"></i> thinchealth@gmail.com </a> */}
              <a href="#"> <i class="fas fa-map-marker-alt"></i> AU (+61) 431305339 </a>
              <a href="#"> <i class="fas fa-map-marker-alt"></i> contact@thinchealth.org </a>
          </div>

          <div class="box">
              <h3>follow us</h3>
              <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
              <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
              <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
              <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
          </div>

      </div>

      <div class="credit"></div>

  </section>
  );
};

export default Footer;
