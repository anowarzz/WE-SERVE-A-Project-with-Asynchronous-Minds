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
import React, { useState } from "react";
import Textarea from "@mui/joy/Textarea";
import AnimateLog from "../assets/Login/login-animate.gif";
import AnimateLock from "../assets/Login/login.gif";
import Image from "next/image";
import GoogleIcon from "@mui/icons-material/Google";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    accountType: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

//   Collecting the input value of Register form

  const handleInputChange = (event) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleRegisterInfo = (event) => {
    event.preventDefault();
    console.log(userInfo);
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
      <Stack width="450px" margin="auto">
        <Paper
          sx={{
            paddingTop: "1rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            paddingBottom: "3rem",
          }}
        >
          <Stack justifyContent="center" alignItems="center">
            <Image priority src={AnimateLock} alt="icon" maxwidth="90" height="90" />

            <Typography
              variant="h4"
              textAlign="center"
              fontWeight="bold"
              marginBottom="2rem"
              paddingBottom="1rem"
            >
              Register
            </Typography>
          </Stack>

          <form onSubmit={handleRegisterInfo}>
            <Stack spacing={3}>
              <TextField
                id="name"
                type="text"
                label="Name"
                variant="standard"
                size="small"
                autoComplete="off"
                onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
              />

              <TextField
                id="email"
                type="email"
                label="Email"
                variant="standard"
                size="small"
                autoComplete="off"
                onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
              />
              <FormControl variant="standard">
                <InputLabel id="account-type">Choose User Type</InputLabel>
                <Select
                  labelId="account-type"
                  id="account-type"
                  value= {userInfo?.accountType}
                  onChange={(e) => setUserInfo({...userInfo, accountType: e.target.value})}
                  label=""
                >
                  <MenuItem value="">{/* <em>None</em> */}</MenuItem>
                  <MenuItem value="user">User</MenuItem>
                  <MenuItem value="moderator">Moderator</MenuItem>
                  {/* <MenuItem value={30}>Admin</MenuItem> */}
                </Select>
              </FormControl>

              <Stack direction="row" spacing={3}>
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  variant="standard"
                  size="small"
                  onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}
                />
                <TextField
                  id="confirm-password"
                  label="Confirm Password"
                  type="password"
                  variant="standard"
                  size="small"
                  onChange={(e) => setUserInfo({...userInfo, confirmPassword: e.target.value})}
                />

              </Stack>
            <FormControlLabel label={`I accept the terms and conditions`} control={ <Checkbox /> } />

              <Button
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
        </Paper>
      </Stack>
    </Box>
  );
};

export default Register;
