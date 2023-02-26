import { Facebook, LinkedIn, Twitter, YouTube } from "@mui/icons-material";
import map from "assets/map.png";
import { Button,  Divider, Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#152B54",
          paddingY: "5rem",
          display: "flex",
          marginX: 'auto',
          justifyContent: "space-between",
          color:'white'
        }}
      >
        <Container>
          <Typography variant="h5">About Us</Typography>
          <Typography sx={{ marginTop: "1rem" }} variant="body2">
            Intrinsicly evisculate emerging cutting edge scenarios redefine
            future-proof e-markets demand line
          </Typography>
          <Box
            sx={{
              display: "flex",
              marginTop: "1rem",
              gap: "10px",
              justifyContent: "flex-start",
              borderRadius: 1,
            }}
          >
            <Button
              sx={{
                borderRadius: 0,
              }}
              variant="contained"
            >
              <Facebook></Facebook>
            </Button>
            <Button
              sx={{
                borderRadius: 0,
              }}
              variant="contained"
            >
              <LinkedIn></LinkedIn>
            </Button>
            <Button
              sx={{
                borderRadius: 0,
              }}
              variant="contained"
            >
              <YouTube></YouTube>
            </Button>
            <Button
              sx={{
                borderRadius: 0,
              }}
              variant="contained"
            >
              <Twitter></Twitter>
            </Button>
          </Box>
        </Container>
        <Container>
          <Typography sx={{marginBottom:"1rem"}} variant="h5">Important Like Here.</Typography>
          <div>
            <Typography>
              <Link href="#" underline="none">
                {"Our Team Member"}
              </Link>
            </Typography>
            <Typography>
              <Link href="#" underline="none">
                {"Our Working Policy"}
              </Link>
            </Typography>
            <Typography>
              <Link href="#" underline="none">
                {"Terms and Conditions"}
              </Link>
            </Typography>
          </div>
        </Container>
        <Container>
          <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
            Our Office Location
          </Typography>
          <Link href="https://goo.gl/maps/X3soPQ496Ej5Yd7P6"><Image src={map} width={150} alt="map Image"></Image></Link>
        </Container>
      </Box>
      <Divider />
      <Box sx={{
        bgcolor: "#152B54",
        paddingY: "1rem"
      }}>
        <Typography sx={{textAlign: 'center', color:'white'}} variant="subtitle2">All Copyright Received by Asynchronous Minds team member.</Typography>
      </Box>
    </>
  );
};

export default Footer;


