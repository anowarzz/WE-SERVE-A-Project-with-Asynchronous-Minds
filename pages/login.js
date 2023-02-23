import { Button, Paper, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import Textarea from "@mui/joy/Textarea";
import { Height } from "@mui/icons-material";

const Login = () => {
  return (
    <Box
      sx={{
        width: "95%",
        margin: "50px auto",
        boxShadow: "inherit",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        padding: "3rem",
      }}
    >
      <Stack width="400px" margin="auto">
        <Paper sx={{ padding: "2rem", paddingBottom: "5rem" }}>
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            marginBottom="2rem"
            padding="1rem"
          >
            Log In
          </Typography>

          <form>
            <Stack spacing={3}>
              <TextField
                id="outlined-basic"
                label="Email"
                type="email"
                variant="outlined"
                marginBottom="22px"
                size="small"
              />

              <TextField
                id="outlined-basic"
                label="Password"
                type="password"
                variant="outlined"
                size="small"
              />

              <Button variant="contained">Login</Button>
            </Stack>
          </form>
        </Paper>
      </Stack>
    </Box>
  );
};

export default Login;
