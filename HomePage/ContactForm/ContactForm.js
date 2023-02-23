import { Button, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";
import contact from "assets/contact.jpg";
import React from "react";
import { AspectRatio } from "@mui/icons-material";
import styles from "./ContactForm.module.css";
import { Box } from "@mui/system";

const ContactForm = () => {
  return (
    <Box mt={7}>
      <Grid
        container
        spacing={5}
        columns={16}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={8} sm={16} mb={5}>
          {/* <AspectRatio variant="outlined" ratio="1" objectFit="cover"> 
              
                </AspectRatio> */}
          <Image
            src={contact}
            alt="contact-image"
            className={styles.contactImg}
          ></Image>
        </Grid>

        <Grid
          item
          lg={8}
          sm={16}
          mt={12}
          mb={12}
          justifyContent="center"
          alignItems="center"
          sx={{ margin: "0 auto", justifyContent: "center" }}
        >
          <Grid container item columns={16} spacing={2} mb={2}>
            <Typography
              mb={1}
              sx={{ textAlign: "center", fontWeight: "bold" }}
              variant="h4"
            >
              Request a Free Consultation
            </Typography>

            <Typography
              sx={{ textAlign: "center", fontWeight: "bold" }}
              variant="h7"
            >
              Dramatically maintain clicks-and-mortar solutions without
              functional solutions.
            </Typography>
          </Grid>
          <Grid container item columns={16} spacing={2} mb={2}>
            <Grid item xs={7}>
              <TextField
                mr={2}
                id="filled-basic"
                label="Name*"
                variant="filled"
                fullWidth
                autoFocus
                InputProps={{ disableUnderline: true }}
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                mr={2}
                id="filled-basic"
                label="Email*"
                variant="filled"
                fullWidth
                autoFocus
                InputProps={{ disableUnderline: true }}
              />
            </Grid>
          </Grid>
          <Grid container item columns={16} spacing={2} mb={2}>
            <Grid item xs={7}>
              <TextField
                mr={2}
                id="filled-basic"
                label="Phone*"
                variant="filled"
                fullWidth
                autoFocus
                InputProps={{ disableUnderline: true }}
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                mr={2}
                id="filled-basic"
                label="Subject*"
                variant="filled"
                fullWidth
                autoFocus
                InputProps={{ disableUnderline: true }}
              />
            </Grid>
          </Grid>
          <Grid container item columns={16} spacing={2} mb={2}>
            <Grid item xs={14}>
              <TextField
                mr={2}
                id="filled-basic"
                label="Message*"
                variant="filled"
                fullWidth
                autoFocus
                inputProps={{
                  style: {
                    height: "90px",
                  },
                }}
                multiline={true}
                InputProps={{ disableUnderline: true }}
              />
            </Grid>
          </Grid>
          <Grid container item columns={16} spacing={2} mb={2}>
            <Grid item xs={14}>
              <Button variant="contained">Send</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
