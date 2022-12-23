import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";
import Title from "../title";
import Name from "./name";
import Gender from "./gender";
import Age from "./age";
import BloodGroup from "./bloodGroup";
import Address from "./address";
import Divider from '@mui/material/Divider';

const theme = createTheme();

const Edit_Details = (props) => {
  const [patients, setPatients] = useState([]);

  // FETCHING PATIENT'S DATA FROM DB
  useEffect(() => {
    db.collection("patients").onSnapshot((snapshot) => {
      setPatients(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {patients.map((patient) => {
          if (patient.uid === props.uid)
            return (
              <Grid container spacing={1} key={patient.uid}>
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
                    <Grid container>
                      <Grid item xs={10}>
                        <Typography marginLeft={5} marginTop={5}>
                          Name: {patient.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={2} marginTop={5}>
                        <Name uid={patient.uid} />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={10}>
                        <Typography marginLeft={5}>
                          Gender: {patient.gender}
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Gender uid={patient.uid} />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={10}>
                        <Typography marginLeft={5}>
                          Age: {patient.age}
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Age uid={patient.uid} />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={10}>
                        <Typography marginLeft={5}>
                          Blood Group: {patient.bloodGroup}
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <BloodGroup uid={patient.uid} />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={10}>
                        <Typography marginLeft={5}>
                          Address: {patient.address1}, {patient.address2},
                          <br />
                          {patient.city}, {patient.state}, {patient.country},{" "}
                          {patient.pincode}
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Address uid={patient.uid} />
                      </Grid>
                    </Grid>
                  </Grid>

                  <br />
                  <Grid item xs={12}>
                    <Typography
                      marginLeft={5}
                      marginTop={3}
                      variant="subtitle2"
                    >
                      Last updated at:
                      {new Date(
                        patient.updatedAt.seconds * 1000
                      ).toLocaleDateString("en-US")}
                      ,{new Date(patient.updatedAt.seconds * 1000).getHours()}:
                      {new Date(patient.updatedAt.seconds * 1000).getMinutes()}
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
