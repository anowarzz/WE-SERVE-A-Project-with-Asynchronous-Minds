import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useContext, useState } from "react";
import Textarea from "@mui/joy/Textarea";
import AnimateLog from "../assets/Login/login-animate.gif";
import AnimateLock from "../assets/Login/login.gif";
import Image from "next/image";
import Link from "next/link";
import { AuthContext } from "@/contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
import { useRouter } from "next/router";
import { AltRouteRounded } from "@mui/icons-material";
import { ScaleLoader } from "react-spinners";


const googleProvider = new GoogleAuthProvider();

const Register = () => {
  const {
    createNewUser,
    updateUserProfile,
    googleLogIn,
    setUser,
  } = useContext(AuthContext);

  const [userInfo, setUserInfo] = useState({
    name: "",
    orgName: "",
    email: "",
    // accountType: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

// error and  loading states
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)


  const router = useRouter();

  // Registering a user
  const handleRegister = (event) => {
    setLoading(true)
    event.preventDefault();
    const name = userInfo.name;
    const email = userInfo.email;
    const password = userInfo.password;

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Please Provide a Valid Email");
      setLoading(false)
      return ;
    }

    if (password.length < 6) {
      setError("Password Must Be 6 Character or More");
      setLoading(false)
      return;
    }

    if (userInfo.password !== userInfo.confirmPassword) {
      setError("Your Password Did Not Match");
      setLoading(false)
      return;
    }

    createNewUser(email, password).then((result) => {
      setError("");
      const user = result.user;
      console.log(user);
      handleUpdateUserProfile();
      setLoading(false)
      router.push("/");
    });

    //updating user information
    const handleUpdateUserProfile = (name) => {
      const profile = { displayName: name };
      updateUserProfile(profile)
        .then(() => {})
        .catch((e) => {
          console.error(e);
          setError(e.message);
          setLoading(false)
        });
    };
    console.log(userInfo);
  };

  // User Register with google
  const handleGoogleRegister = () => {
    setLoading(true)
    googleLogIn(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError("");
        setLoading(false)
        router.push("/");
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false)
      });
  };

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
      <Stack width="550px" margin="auto">
        <Paper
          sx={{
            paddingTop: "1rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            paddingBottom: "3rem",
          }}
        >
          <Stack justifyContent="center" alignItems="center">
            <Image
              priority
              src={AnimateLock}
              alt="icon"
              maxwidth="90"
              height="90"
            />

            <Typography
              variant="h4"
              textAlign="center"
              fontWeight="bold"
              paddingBottom="1rem"
            >
              Register
            </Typography>
            {
                loading && (
                  <ScaleLoader color="#36d7b7" size={100} style={{textAlign:'center'}}/>
                )
              }
          </Stack>

          <form onSubmit={handleRegister}>
            <Stack spacing={3}>

            
              <Stack
                justifyContent="space-between"
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 2 }}
              >
                <TextField
                  id="name"
                  required
                  autoComplete="off"
                  type="text"
                  label="Full Name"
                  variant="standard"
                  size="small"
                  onBlur={(e) =>
                    setUserInfo({ ...userInfo, name: e.target.value })
                  }
                />
                <TextField
                  id="org-name"
                  type="text"
                  required
                  label="Organization Name"
                  variant="standard"
                  size="small"
                  autoComplete="off"
                  onBlur={(e) =>
                    setUserInfo({ ...userInfo, orgName: e.target.value })
                  }
                />
              </Stack>

              <TextField
                id="email"
                required
                type="email"
                label="Email"
                variant="standard"
                size="small"
                autoComplete="off"
                onBlur={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
              />
              {/* <FormControl variant="standard">
                <InputLabel id="account-type">Choose Your Role</InputLabel>
                <Select
                  labelId="account-type"
                  id="account-type"
                  value={userInfo?.accountType}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, accountType: e.target.value })
                  }
                  label=""
                > */}
              {/* <MenuItem value=""><em>None</em></MenuItem> */}
              {/* <MenuItem value="user">User</MenuItem> */}
              {/* <MenuItem value="moderator">Moderator</MenuItem> */}
              {/* <MenuItem value={30}>Admin</MenuItem> */}
              {/* </Select> */}
              {/* </FormControl> */}

              <Stack
                justifyContent="space-between"
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  required
                  variant="standard"
                  size="small"
                  onBlur={(e) =>
                    setUserInfo({ ...userInfo, password: e.target.value })
                  }
                />
                <TextField
                  id="confirm-password"
                  label="Confirm Password"
                  type="password"
                  variant="standard"
                  required
                  size="small"
                  onBlur={(e) =>
                    setUserInfo({
                      ...userInfo,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </Stack>
              {/* <FormControlLabel label={`I accept the terms and conditions`} control={ <Checkbox /> } />
               */}
              <Stack
                direction="row"
                justifyContent="start"
                alignItems="center"
                gap={1}
                margin="0"
                padding="0"
              >
                <Checkbox
                  name="terms"
                  onClick={(e) =>
                    setUserInfo({ ...userInfo, terms: e.target.checked })
                  }
                />
                <Typography variant="subtitle2">
                  <span style={{ paddingRight: "10px" }}>Accept Our</span>
                  <Link href='/register'
              
                    style={{ textDecoration: "none", color: "red" }}
                  >
                    Terms and Conditions
                  </Link>
                </Typography>
              </Stack>
              {error && <Typography color="red" fontWeight='bold' fontSize='small'>{error}</Typography>}
              <Button
                disabled={!userInfo.terms}
                type="submit"
                size="large"
                variant="contained"
                color="success"
                sx={{
                  "&:hover": {
                    backgroundColor: "#2196f3",
                  },
                }}
              >
                Register
              </Button>

              <Divider
                sx={{ margin: "0px", padding: "0px", fontFamily: "railway" }}
              >
                OR
              </Divider>
              <Button
                onClick={handleGoogleRegister}
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
                  Register With Google
                </Typography>
              </Button>
            </Stack>
          </form>
          <Typography variant="subtitle2" textAlign="center" mt={2}>
            Already Have An Account ?
            <Link
              href="/login"
              style={{
                paddingLeft: "8px",
                textDecoration: "none",
                color: "red",
                fontWeight: "bold",
              }}
            >
              Login Now
            </Link>
          </Typography>
        </Paper>
      </Stack>
    </Box>
  );
};

export default Register;
