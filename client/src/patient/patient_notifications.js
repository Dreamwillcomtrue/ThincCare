import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "./navbar";
import { db } from "../firebase";
import { Button, Container, List, ListItem, Typography } from "@mui/material";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import { container, listItem, typography } from "./styles";

const Patient_Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const { currentUser } = useAuth();

  // FETCHING PATIENT'S DATA FROM DB
  useEffect(() => {
    db.collection("patients")
      .doc(currentUser.uid)
      .collection("notifications")
      .orderBy("sentAt", "desc")
      .onSnapshot((snapshot) => {
        setNotifications(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  // READ NOTIFICATIONS BUTTON
  const handleReadNotifications = () => {
    db.collection("patients").doc(currentUser.uid).update({
      unreadCount: 0,
    });
  };

  return (
    <>
      <Navbar selectedItem={3}>
        <Container maxWidth="lg" sx={container}>
          <Typography variant="h4" marginLeft={3} sx={typography}>
            Notifications
          </Typography>
          <Button
            sx={{ backgroundColor: "#41AFDC" ,
            "&:hover": {
              backgroundColor: "#4391B0",
            }, margin: 3,
            mb:0
          }}
            variant="contained"
            size="small"
            startIcon={<MarkChatReadIcon />}
            onClick={handleReadNotifications}
            alignSelf="right"
          >
            Mark as read
          </Button>
          <List>
            {notifications.map((notification) => {
              return (
                <ListItem sx={listItem}>
                  <Typography>
                    {notification.message} <br />{" "}
                    {new Date(
                      notification.sentAt.seconds * 1000
                    ).toLocaleDateString("en-US")}
                    ,{new Date(notification.sentAt.seconds * 1000).getHours()}:
                    {new Date(notification.sentAt.seconds * 1000).getMinutes()}
                    <br />
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        </Container>
      </Navbar>
    </>
  );
};

export default Patient_Notifications;
