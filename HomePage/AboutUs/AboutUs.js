import { Box, Button, Grid, Typography } from "@mui/material";
import style from "./AboutUs.module.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Image from "next/image";
import team from 'assets/team.jpg'
const AboutUs = () => {
  return (
    <Grid p={5} container spacing={5}>
      <Grid item xs={4}>
        <Image src={team} width={500} alt={"Team Work Image"}></Image>
      </Grid>
      <Grid item xs={8}>
        <Box px={10}>
        <Typography my={2} color="primary" variant="subtitle2">GET BEST IT SOLUTION 2023</Typography>
        <Typography my={2} variant="h4">TRUST OUR BEST IT SOLUTION FOR YOUR BUSINESS</Typography>
        <Typography my={2} variant="body1">Compellingly mesh cross-platform portals through functional human capital world-class architectures for orthogonal initiatives. Assertively benchmark visionary quality vectors after covalent e-tailers. Intrinsicly enhance 24/7 users and supply process.</Typography>

        <Box m={2}>
            
        </Box>
        <Button endIcon={<ArrowRightAltIcon></ArrowRightAltIcon>} color="primary" variant="contained">About Us</Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
