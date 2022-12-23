import * as React from "react";
import {
  Row,
  Col,
  Container,
} from "@mui/material";
import './home.css';
import { boldRaleway, button, cardMedia, raleway } from "./styles";
import HomeIMG from './home-img.svg';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Register = () => {
  return (

    <Box className="home">
      <Grid container spacing={2} >
        <Grid item xs={6} >
          <img src={HomeIMG} />
        </Grid>
        <Grid item xs={6} >
          <Box className="content " marginTop={12}>
            <h3>
              Stay with ThincCare </h3>
            <p>Bring Patients And Doctors Closer Together And Make Healthcare More Accessible.</p>
                 {/* <a href="#" class="btn"> contact us <span class="fas fa-chevron-right"></span> </a> */}
                {/* <Container> */}

            <a href="/doctor_signup" className="btn">
              Sign Up Doctor
            </a>

           <a href="/doctor_signin" className="btn">
              Log In Doctor
            </a>

            <a href="/patient_signup" className="btn">
              Sign Up Patient
            </a>

            <a href="/patient_signin" className="btn">
              Log In Patient
            </a>

            <a href="/admin_signin" className="btn">
              Log In Admin
            </a>
          </Box>
          
        </Grid>
      </Grid>
     </Box>
  );
};

//     </Box>
//   );
// };

export default Register;

{/* <Button sx={button} href="/doctor_signup">
                Sign Up Doctor
              </Button>

              <Button sx={button} href="/doctor_signin">
                Sign In Doctor
              </Button>

              <Button sx={button} href="/patient_signup">
                Sign Up as Patient 
              </Button>

              <Button sx={button} href="/patient_signin">
                Sign In Patient
              </Button>

              <Button sx={button} href="/admin_signin">
                Sign In Admin
              </Button> */}


//     <div>
    //     <section class="home" id="home">

    //     <div class="image">
    //       <img src = {HomeIMG} /> {/* <img src="image/home-img.svg" alt=""> */}
    //     </div>

    //     <div class="content" >
    //         <h3>Stay with ThincCare </h3>
    //         <p>Bring Patients And Doctors Closer Together And Make Healthcare More Accessible.</p>
    //         {/* <a href="#" class="btn"> contact us <span class="fas fa-chevron-right"></span> </a> */}
    //         {/* <Container> */}

    //               <a href="/doctor_signup" className="btn">
    //                 Sign Up Doctor
    //               </a>

    //               <a href="/doctor_signin" className="btn">
    //                 Sign In Doctor
    //               </a>

    //               <a href="/patient_signup" className="btn">
    //                 Sign Up as Patient 
    //               </a>

    //               <a href="/patient_signin" className="btn">
    //                 Sign In Patient
    //               </a>

    //               <a href="/admin_signin" className="btn">
    //                 Sign In Admin
    //               </a>
    // {/*           
    //         </Container> */}
    //     </div>

    //     </section>
    //     </div>