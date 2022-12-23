import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import { Avatar, Container, Grid, Paper, Typography } from "@mui/material";
import Title from "./dashboard/title";
import { container, paper, avatar, upload } from "./styles";
import BPGraph from "./bpGraph";
import WeightGraph from "./weightGraph";

const Patient_Profile = () => {
  const { currentUser } = useAuth();
  const [patients, setPatients] = useState([]);

  // FETCHING PATIENT'S DATA FROM DB
  useEffect(() => {
    db.collection("patients").onSnapshot((snapshot) => {
      console.log(snapshot);
      setPatients(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <>
      <Navbar selectedItem={1}>
        <Container maxWidth="lg" sx={container}>
          {patients.map((patient) => {
            if (patient.uid === currentUser.uid)
              return (
                <Grid container spacing={3}>
                  {/* PATIENT'S PROFILE IMAGE */}
                  <Grid item xs={12} md={4} lg={4} >
                    <Paper sx={upload} >
                      <Title>{patient.name}</Title>
                      <Avatar
                        alt="Patient_Profile_Image"
                        // src={`${patient.imageURL}`}
                        src={require("./images/liuyifei.jpg")}
                        sx={avatar}
                      />
                    </Paper>
                  </Grid>

                  {/* PATIENT'S PROFILE */}
                  <Grid item xs={12} md={8} lg={8}>
                    <Paper sx={paper}  elevation={6}>
                      <Title>Profile</Title>
                      <Typography sx={{ fontStyle: "italic" }}>
                        (You can update these details by going to the dashboard
                        tab)
                      </Typography>
                      <Typography>Name: {patient.name}</Typography>
                      <Typography>Age: {patient.age}</Typography>
                      <Typography>Gender: {patient.gender}</Typography>
                      <Typography>Blood Group: {patient.bloodGroup}</Typography>
                      <Typography>
                        Address: {patient.address1}, {patient.address2},{" "}
                        {patient.city}, {patient.state}, {patient.country}
                      </Typography>
                      <Typography>Postcode: {patient.pincode}</Typography>
                      <Typography variant="subtitle2" marginTop={5}>
                        Last updated at:{" "}
                        {new Date(
                          patient.updatedAt.seconds * 1000
                        ).toLocaleDateString("en-US")}
                        , at{" "}
                        {new Date(patient.updatedAt.seconds * 1000).getHours()}:
                        {new Date(
                          patient.updatedAt.seconds * 1000
                        ).getMinutes()}{" "}
                        hrs
                      </Typography>
                    </Paper>
                  </Grid>

                  {/* GRAPHS */}
                  <Grid item xs={12}>
                    <Paper
                      sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        height: 275,

                      }}
                      style={{ marginTop: "20px", borderRadius: "10px" }}
                      elevation={6}
                    >
                      <BPGraph uid={patient.uid} />
                    </Paper>
                  </Grid>

                  <Grid item xs={12}>
                    <Paper
                      sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        height: 275,
                        // marginTop: "20px", borderRadius: "10px" 
                      }}
                      style={{ marginTop: "20px", borderRadius: "10px" }}
                      elevation={6}
                    >
                      <WeightGraph uid={patient.uid} />
                    </Paper>
                  </Grid>
                </Grid>
              );
          })}
        </Container>
      </Navbar>
    </>
  );
};

export default Patient_Profile;