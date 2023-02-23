import {
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import Textarea from "@mui/joy/Textarea";
import AnimateLog from "../assets/Login/login-animate.gif";
import AnimateLock from "../assets/Login/login.gif";
import Image from "next/image";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Login = () => {
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
            paddingBottom: "5rem",
          }}
        >
          <Stack justifyContent="center" alignItems="center">
            <Image
              src={AnimateLock}
              alt="service"
              maxWidth="90"
              height="90"
              margin="0 auto"
            />

            <Typography
              variant="h4"
              textAlign="center"
              fontWeight="bold"
              marginBottom="2rem"
              padding="1rem"
            >
              Log In
            </Typography>
          </Stack>

          <form>
            <Stack spacing={3}>
              <TextField
                id="outlined-basic"
                label="Email"
                type="email"
                variant="standard"
                marginBottom="22px"
                size="small"
              />

              <TextField
                id="outlined-basic"
                label="Password"
                type="password"
                variant="standard"
                size="small"
              />

              <Button size="large" variant="contained" color="success">
                Login
              </Button>
            </Stack>
          </form>
        </Paper>
      </Stack>
    </Box>
  );
};

export default Login;
