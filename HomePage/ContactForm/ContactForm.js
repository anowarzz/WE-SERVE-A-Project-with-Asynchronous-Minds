import { Button, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";
import contact from "assets/contact.jpg";
import React from "react";
import { AspectRatio } from "@mui/icons-material";

const ContactForm = () => {
  return (
    <div>
      <Grid container spacing={5} columns={16}>
        <Grid item lg={8} sm={16} mb={5}>
          {/* <AspectRatio variant="outlined" ratio="1" objectFit="cover"> 
              
                </AspectRatio> */}
          <Image
            src={contact}
            height={650}
            width={670}
            alt=" contact image "
          ></Image>
        </Grid>

        <Grid item lg={8} sm={16} mt={12} mb={12}>
          <Grid container item columns={16} spacing={2}  mb={2}>
            <Typography
              mb={3}
              sx={{ textAlign: "center", fontWeight: "bold", color: "#8d6e63" }}
              variant="h4"
            >
              Request a Free Consultation
            </Typography>

            <Typography
              sx={{ textAlign: "center", fontWeight: "bold", color: "#bcaaa4" }}
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
                    height: "150px",
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
    </div>
  );
};

export default ContactForm;
