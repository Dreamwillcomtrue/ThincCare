import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { Avatar, Button, Grid } from "@mui/material";
import Title from "./dashboard/title";
import { button,typography } from "./styles";

const Patient_List = (props) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    db.collection("patients").onSnapshot((snapshot) => {
      setPatients(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <>
      {patients.map((patient) => {
        if (patient.uid === props.uid)
          return (
            <Grid container spacing={3}>
              <Grid item xs={12} sm={3} md={3}>
                <Avatar
                  alt="Patient_Profile_Image"
                  // src={`${patient.imageURL}`}
                  src={require("./images/liuyifei.jpg")}
                  
                  sx={{
                    width: 100,
                    height: 100,
                    border: "1px solid #08475e",
                    margin:3,
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} mt={7}>
                <Title >{patient.name}</Title>
              </Grid>

              <Grid item xs={12} sm={3} md={3} mt={1}>
                <Button
                  variant="contained"
                  href={`/patient_profile/${props.uid}`}
                  target="_blank"
                  sx={button}
                >
                  See Profile
                </Button>
              </Grid>
            </Grid>
          );
      })}
    </>
  );
};

export default Patient_List;
