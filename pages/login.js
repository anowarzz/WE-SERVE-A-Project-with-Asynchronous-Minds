import {
  Button,
  Divider,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useContext, useState } from "react";
import Textarea from "@mui/joy/Textarea";
import AnimateLog from "../assets/Login/login-animate.gif";
import AnimateLock from "../assets/Login/login.gif";
import Image from "next/image";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "@/contexts/AuthProvider";



const googleProvider = new GoogleAuthProvider();

const Login = () => {


 // Context values 
  const {setUser,logIn,googleLogIn} = useContext(AuthContext)



// error state
const [error, setError] = useState('')

// Router hook
  const router = useRouter();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });  


// Logging in a user with email and password
const handleLogin = (event) => {
event.preventDefault();
  
const email = loginInfo.email;
const password = loginInfo.password ;

logIn(email, password)
.then(result => {
  const user = result.user ;
  setUser(user)
  router.push('/')
})
.catch(err => {
  console.log(err);
  setError(err.message)
})}


// User Login with google Account 
const handleGoogleLogIn = () =>{
  googleLogIn(googleProvider)
  .then(result => {
    const user = result.user ;
    setUser(user)
    router.push('/')
  }) 
  .catch(err => {
    console.log(err);
    setError(err.message)
    
  })
}


  return (
    <Box
      sx={{
        width: "100%",
        margin: "50px auto",
        boxShadow: "inherit",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        padding: "2rem",
      }}
    >
      <Stack width="400px" margin="auto">
        <Paper
          sx={{
            paddingTop: "1rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            paddingBottom: "3rem",
          }}
        >
          <Stack justifyContent="center" alignItems="center">
            <Image src={AnimateLog} alt="service" maxWidth="90" height="90" />

            <Typography
              variant="h4"
              textAlign="center"
              fontWeight="bold"
              marginBottom="2rem"
              paddingBottom="1rem"
            >
              Log In
            </Typography>
          </Stack>

          <form>
            <Stack spacing={3}>
              <TextField
                id="email"
                type="email"
                label="Email"
                variant="standard"
                required
                size="small"
                onBlur={(e) =>
                  setLoginInfo({ ...loginInfo, email: e.target.value })
                }
              />

              <TextField
                id="password"
                label="Password"
                type="password"
                required
                variant="standard"
                size="small"
                onBlur={(e) =>
                  setLoginInfo({ ...loginInfo, password: e.target.value })
                }
              />
              {
                error && (
                  <Typography color='red' fontWeight='bold' fontSize='small'>
                    {error}
                  </Typography>
                )
              }
              <Button
              onClick={handleLogin}
                size="large"
                variant="contained"
                color="success"
                sx={{
                  "&:hover": {
                    backgroundColor: "#2196f3",
                  },
                }}
              >
                Login
              </Button>

              <Divider
                sx={{ margin: "0px", padding: "0px", fontFamily: "railway" }}
              >
                OR
              </Divider>
              <Button
              onClick={handleGoogleLogIn}
                size="large"
                variant="outlined"
                color="success"
                sx={{
                  "&:hover": {
                    backgroundColor: "#2E7D32",
                    color: "white",
                  },
                }}
              >
                <GoogleIcon sx={{ marginRight: "10px" }} />
                <Typography variant="subtitle2">
                  Continue With Google
                </Typography>
              </Button>
            </Stack>
          </form>
          <Typography variant="subtitle2" textAlign='center' mt={2}>
            New Here ? 
            <Link href='/register' style={{paddingLeft: '8px', textDecoration:'none', color:'red', fontWeight:'bold'}}>
                Register Now
            </Link>
          </Typography>
        </Paper>
      </Stack>
    </Box>
  );
};

export default Login;
