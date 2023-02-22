import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import Textarea from '@mui/joy/Textarea';

const Login = () => {
  return (
    <Box sx={{width: '90%', margin:'50px auto'}} boxShadow='inherit'>
        <Stack >
          <Typography variant="h3" textAlign="center" fontWeight="bold">
            Login
          </Typography>

    <Stack>
        <form >
        <Textarea size="md" label="Size" placeholder="Medium" />
        </form>
    </Stack>
        </Stack>
 
    </Box>
  );
};

export default Login;
