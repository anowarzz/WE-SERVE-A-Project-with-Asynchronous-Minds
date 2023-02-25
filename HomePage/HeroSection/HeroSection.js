
import { AspectRatio, Button } from '@mui/joy';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';

import React from 'react'; 
import styles from './HeroSection.module.css'
import mouse from '../../assets/hero/mouse.webp'
import keyb from '../../assets/hero/keyboard.webp'




const HeroSection = () => {
    return (
      <div >
        <Grid
         container 
         // spacing={5} 
         columns={16}
         sx={{boxShadow: 6}}>
        <div style={{position:"relative"}} className={styles.bg}>

            
           

            <div style={{position: "absolute", right:"0", marginTop:"150px", marginRight:"50px"}} className={styles.upDown}>
            <Image 
            height={100}
                src={mouse}
                alt=" contact image "
            ></Image>
            </div>
            <div style={{position: "absolute", right:"0", bottom:"0", }} className={styles.upDownTwo}>
            <Image 
           
                src={keyb}
                alt=" contact image "
            ></Image>
            </div>
          
           <div  style={{marginTop:"300px", marginLeft:"50px"}}>
           <div style={{marginBottom:"30px",}}>
            <Typography
            sx={{ textAlign: "start",  fontWeight: "bold", color: "#bcaaa4" }}
            variant="h7"
          >
           A Smart Business  solutions.
          </Typography>
            </div>
           <div>
            <Typography
            sx={{ textAlign: "start", fontWeight: "bold", color: "#ffffff" }}
            variant="h4"
          >
           WE-SERVE  Dramatically maintain <br /> clicks-and-mortar solutions,  Business <br />
            functional solutions.
          </Typography>
            </div>
            <div>
            <Button variant="outlined" sx={{color: "#ffffff"}}>
  Check More
</Button>
            </div>
          
           </div>
            

        </div>
        </Grid>

      </div>
    );
};

export default HeroSection;