import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Container,
  Typography,
  ListItem,
  List,
  Button,
} from "@mui/material";
import Navbar from "./navbar";
import { db } from "../firebase";
import { container, listItem, paper, typography ,button} from "./styles";

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    db.collection("patients").onSnapshot((snapshot) => {
      setPatients(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  // FUNCTION TO VERIFY DOCTOR'S PROFILE
  const handleVerify = (uid) => {
    db.collection("patients").doc(uid).update({
      isVerified: "true",
      unreadCount: 1,
      updatedAt: new Date(),
    });

    db.collection("patients").doc(uid).collection("notifications").add({
      message: "Your profile has been verified by the admin!",
      sentAt: new Date(),
    });
  };

  // FUNCTION TO UNVERIFY PATIENT'S PROFILE
  const handleUnverify = (uid) => {
    db.collection("patients").doc(uid).update({
      isVerified: "false",
      unreadCount: 1,
      updatedAt: new Date(),
    });

    db.collection("patients").doc(uid).collection("notifications").add({
      message: "Your profile has been unverified by the admin!",
      sentAt: new Date(),
    });
  };

  return (
    <>
      <Navbar selectedItem={2}>
      <Container maxWidth="lg" sx={container}>
        <Grid container spacing={3}>
          {/* UNVERIFIED PATIENTS */}
          <Grid item xs={12}>
            <Typography variant="h4" sx={typography}>
              Unverified/New Patients
            </Typography>
            <Paper sx={paper}>
              <List>
                {patients.map((patient) => {
                  if (patient.isVerified === "false")
                    return (
                      <ListItem sx={listItem}>
                        <Grid container>
                          <Grid item xs={12} sm={9}>
                            <Typography m={4}>
                              Email: {patient.email} <br />
                              Name: {patient.name}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <Button
                              variant="contained"
                              onClick={() => handleVerify(patient.uid)}
                              sx={button}
                            >
                              Verify
                            </Button>
                          </Grid>
                        </Grid>
                      </ListItem>
                    );
                })}
              </List>
            </Paper>
          </Grid>

          {/* VERIFIED PATIENTS */}
          <Grid item xs={12}>
            <Typography variant="h4" sx={typography} mt={8}>
              Verified Patients
            </Typography>
            <Paper sx={paper}>
              <List>
                {patients.map((patient) => {
                  if (patient.isVerified == "true")
                    return (
                      <ListItem sx={listItem}>
                        <Grid container>
                          <Grid item xs={12} sm={9}>
                            <Typography m={4}>
                              Name: {patient.name} <br />
                              Age: {patient.age} <br />
                              Gender: {patient.gender} <br />
                              Blood Group: {patient.bloodGroup}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <Button
                              variant="contained"
                              onClick={() => handleUnverify(patient.uid)}
                              sx={button}
                            >
                              Unverify
                            </Button>
                          </Grid>
                        </Grid>
                      </ListItem>
                    );
                })}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      </Navbar>
    </>
  );
};

export default Patients;
