import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { Grid, List, ListItem, Typography, Container } from "@mui/material";
import { container, listItem, typography } from "./styles";
import Appointments from "../patient/appointments";
import Title from "./dashboard/title";
import Navbar from "./navbar";

const Past_Appointments = (props) => {
  const [appointments, setAppointments] = useState([]);

  // FETCHING APPOINTMENTS' DATA FROM DB
  useEffect(() => {
    db.collection("appointments")
      .orderBy("timeSlot", "desc")
      .onSnapshot((snapshot) => {
        setAppointments(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
  }, []);

  return (
    <>
      
        <Container maxWidth="lg" >
          <Typography marginLeft={3}
            variant="h4"
            sx={typography}
            color="rgba(84, 95, 99, 1)">
            Past Appointments
          </Typography>
          <List>
            {appointments.map((appointment) => {
              if (
                appointment.isConfirmed === "true" &&
                appointment.doctorUID === props.doctorUID &&
                
                appointment.patientUID === props.patientUID
              )
                return (
                  <ListItem sx={listItem}>
                    <Grid container>
                      <Grid item xs={12} sm={6}>
                        <Typography>
                          <b>Mode:</b> {appointment.mode} <br />
                          <b>Slot:</b>{" "}
                          {new Date(
                            appointment.timeSlot.seconds * 1000
                          ).toLocaleDateString("en-US")}
                          ,
                          {new Date(appointment.timeSlot.seconds * 1000).getHours()}
                          :
                          {new Date(
                            appointment.timeSlot.seconds * 1000
                          ).getMinutes()}
                          <br />
                          <b>Symptoms:</b> {appointment.symptoms}
                        </Typography>
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Typography>
                          <b>Prescription: </b>
                          <Appointments
                            appointmentID={appointment.id}
                            doctorUID={appointment.doctorUID}
                            patientUID={appointment.patientUID}
                          />
                        </Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                );
            })}
          </List>
        </Container>
      
    </>
  );
};

export default Past_Appointments;
