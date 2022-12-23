import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";
import Title from "../title";
import Age from "./age";
import Address from "./address";
import Degree from "./degree";
import Experience from "./experience";
import TimeSlot from "./timeSlot";
import Divider from '@mui/material/Divider';

const theme = createTheme();

const Edit_Details = (props) => {
  const [doctors, setDoctors] = useState([]);

  // FETCHING PATIENT'S DATA FROM DB
  useEffect(() => {
    db.collection("doctors").onSnapshot((snapshot) => {
      setDoctors(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {doctors.map((doctor) => {
          if (doctor.uid === props.uid)
            return (
              <Grid container spacing={1} key={doctor.uid}>
                <Grid
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  item
                  xs={12}
                >
                  <Title>Your Profile </Title>
                  {/* <Typography variant="subtitle2" gutterBottom>
                    (You can still edit your details)
                  </Typography> */}
                </Grid>
                <Divider variant="middle" />
                <Box
                  sx={{
                    marginLeft: "15px",
                    backgroundColor: "rgba(235, 236, 241, 1)",
                    borderRadius: "10px",
                    width: "100%",
                    marginTop: "30px",
                    height: "90%",
                  }}
                >

                <Grid item xs={12}>
                  <Typography marginLeft={5}
                      marginTop={3} >Name: {doctor.name}</Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography marginLeft={5}>Gender: {doctor.gender}</Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography marginLeft={5}>
                    Medical Speciality: {doctor.medicalSpeciality}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={10}>
                      <Typography marginLeft={5}>
                        Experience: {doctor.experience} years
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Experience uid={doctor.uid} />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={10}>
                      <Typography marginLeft={5}>Age: {doctor.age} years</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Age uid={doctor.uid} />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={10}>
                      <Typography marginLeft={5}>Degree: {doctor.degree}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Degree uid={doctor.uid} />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={10}>
                      <Typography marginLeft={5}>
                        Address: {doctor.address1}, {doctor.address2},
                        <br />
                        {doctor.city}, {doctor.state}, {doctor.country},{" "}
                        {doctor.pincode}
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Address uid={doctor.uid} />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={10}>
                      <Typography marginLeft={5}>
                        Time Slot :{" "}
                        {new Date(doctor.startTime.seconds * 1000).getHours()}:
                        {new Date(doctor.startTime.seconds * 1000).getMinutes()}
                        0 - {new Date(doctor.endTime.seconds * 1000).getHours()}
                        :{new Date(doctor.endTime.seconds * 1000).getMinutes()}0
                        hrs
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <TimeSlot uid={doctor.uid} />
                    </Grid>
                  </Grid>
                </Grid>

                <br />
                <Grid item xs={12}>
                <Typography
                      marginLeft={5}
                      marginTop={3}
                      variant="subtitle2">
                    
                    Last updated at:
                    {new Date(
                      doctor.updatedAt.seconds * 1000
                    ).toLocaleDateString("en-US")}
                    ,{new Date(doctor.updatedAt.seconds * 1000).getHours()}:
                    {new Date(doctor.updatedAt.seconds * 1000).getMinutes()}
                  </Typography>
                </Grid>
                </Box>
              </Grid>
            );
        })}
      </Box>
    </ThemeProvider>
  );
};
export default Edit_Details;
