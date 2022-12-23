import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "./navbar";
import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { v1 as uuid } from "uuid";
import { db } from "../firebase";
import { Appointments } from "../doctor/appointments";
import { createTheme } from "@mui/material/styles";
import {
  container,
  paper,
  listItem,
  confirmButton,
  cancelButton,
  typography, button,
} from "./styles";
import Title from "./dashboard/title";


const Doctor_Schedule_Meeting = (props) => {
  const history = useHistory();
  const [meetings, setMeetings] = useState([]);
  const { currentUser } = useAuth();
  //add ,eeting functions
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);



  useEffect(() => {
    db.collection("meetings", "appointments")
      .orderBy("scheduledAt", "desc", "asc", "timeslot")
      .onSnapshot((snapshot) => {
        setMeetings(snapshot.docs.map((doc) => doc.data()));
        // });
        setAppointments(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
  }, []);

  useEffect(() => {
    db.collection("patients")
      .doc(currentUser.uid)
      .collection("doctors")
      .onSnapshot((snapshot) => {
        setDoctors(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  // const create = () => {
  //   const id = uuid();

  //   history.push(`/doctor/room/${id}`);
  //   alert(`Copy your meeting code : ${id}`);
  // };

  const create = (docID, patientUID) => {
    const id = uuid();
    alert(`Copy your meeting code : ${id}`);



    history.push(`/doctor/room/${id}`);
  };



  return (
    <>
      <Navbar selectedItem={4}>
        <Container maxWidth="lg" sx={container}>

          <Typography

            variant="h4"
            sx={typography}
            color="rgba(84, 95, 99, 1)"
            marginTop={3}
          >
            Scheduled Meetings

          </Typography>

          <Button onClick={create} variant="contained" target="_blank"
            sx={{
              backgroundColor: "#41AFDC",
              "&:hover": {
                backgroundColor: "#4391B0",
              },

              mt: "20px"
            }}>
            Meet
          </Button>
          <List>
            {meetings.map((meeting) => {
              if (

                // appointment.doctorUID === currentUser.uid &&
                meeting.doctorUID === currentUser.uid

              )
                return (
                  <ListItem sx={listItem}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={9}>
                        <Typography>

                          <b>Meeting ID: </b>{meeting.meetingID}<br />
                          <b>Scheduled At:</b>{" "}
                          {new Date(
                            meeting.scheduledAt.seconds * 1000
                          ).toLocaleDateString("en-US")}
                          ,
                          {new Date(
                            meeting.scheduledAt.seconds * 1000
                          ).getHours()}
                          :
                          {new Date(
                            meeting.scheduledAt.seconds * 1000
                          ).getMinutes()}
                          <br />

                        </Typography>
                      </Grid>

                      <Grid item xs={12} sm={3}>
                        <Button
                          variant="contained"
                          target="_blank"
                          href={`/doctor/room/${meeting.meetingID}`}
                          sx={{
                            backgroundColor: "#41AFDC",

                            "&:hover": {
                              backgroundColor: "#4391B0",
                            }

                          }}

                        >
                          Join
                        </Button>
                      </Grid>
                    </Grid>
                  </ListItem>
                );
            })}

          </List>
        </Container>
      </Navbar>
    </>
  );
};

export default Doctor_Schedule_Meeting;
