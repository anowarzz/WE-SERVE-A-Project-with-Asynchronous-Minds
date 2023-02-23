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
import React from "react";
import Textarea from "@mui/joy/Textarea";
import AnimateLog from "../assets/Login/login-animate.gif";
import AnimateLock from "../assets/Login/login.gif";
import Image from "next/image";
import GoogleIcon from "@mui/icons-material/Google";

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
                marginBottom="22px"
                size="small"
              />

              <TextField
                id="password"
                label="Password"
                type="password"
                variant="standard"
                size="small"
              />
              <Button
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

export default Login;
