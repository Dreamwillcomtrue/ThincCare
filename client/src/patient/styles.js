import { createTheme } from "@mui/material/styles";

const theme = createTheme();

export const container = {
  mt: "8vh",
  // ml: "5vw",
  minHeight: "100vh",
  // cancel the background colour
  background: "rgba(246, 245, 248, 1)",
  // backgroundImage: `url('../images/blue2.jpg')`,
  // backgroundPosition: "center",
  backgroundRepeat: "repeat-x",
  backgroundSize: "cover",
  [theme.breakpoints.down("md")]: {
    mt: "10vh",
    ml: "10vw",
    maxWidth: "95vw",
  },
  [theme.breakpoints.down("sm")]: {
    ml: "12vw",
    maxWidth: "85vw",
  },
};

export const paper = {
  p: 2,
  display: "flex",
  flexDirection: "column",
  borderRadius:"10px",
  height:"100%",
  boxShadow: 6,
  marginTop:"20px",
 
};

export const transparentPaper = {
  p: 2,
  display: "flex",
  flexDirection: "column",
  background: "transparent",
  borderRadius:"10px",
  height:"100%",
  boxShadow: 6,
  marginTop:"20px",
};

export const upload = {
  p: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius:"10px",
  marginTop:"20px",
  boxShadow: 6,
  height:"100%",
};

export const avatar = {
  width: 200,
  height: 200,
  marginTop: 3.5,
};

export const listItem = {
  border: "2px solid rgba(175, 195, 200, 1)",
  borderRadius: "15px",
  margin: "20px",
  boxShadow: 2,
  backgroundColor: "#FAFAFA",
  elevation:6,
  "&:hover": {
    // backgroundColor: "#E5E6E7",
    boxShadow: 3,
    border: "3px solid rgba(100, 140, 150, 1)",
    boxShadow:6,
  },
};

export const typography = { fontWeight: "bold", color: "#063547" ,marginTop:"20px"};

export const signinGrid = {
  backgroundImage: `url('images/Patient_Signin.jpg')`,
  backgroundRepeat: "no-repeat",
  backgroundColor: (t) =>
    t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export const signupGrid = {
  backgroundImage: `url('images/Patient_Signup.png')`,
  backgroundRepeat: "no-repeat",
  backgroundColor: (t) =>
    t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export const box = {
  my: 8,
  mx: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const controls = {
  top: "auto",
  bottom: 0,
  backgroundColor: "#021117",
  alignItems: "center",
};

export const controlsToolbar = {
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "0",
    marginLeft: "0",
  },
};
