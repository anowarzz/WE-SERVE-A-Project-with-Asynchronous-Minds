
import { AspectRatio, Button } from '@mui/joy';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';

import React from 'react'; 
import styles from './HeroSection.module.css'
import mouse from '../../assets/hero/mouse.webp'
import keyb from '../../assets/hero/keyboard.webp'
import card from '../../assets/hero/card.png'
import pc from '../../assets/hero/pc.png'
import mob from '../../assets/hero/mob.png'
import consal from '../../assets/hero/consalito.png'





const HeroSection = () => {
    return (
      <div >
        <Grid
         container 
         // spacing={5} 
         columns={16}
         sx={{boxShadow: 6}}>
        <div style={{position:"relative", overflow:"hidden"}} className={styles.bg}>

            
           

            <div style={{position: "absolute", right:"2%", top: "20%"}} className={styles.upDown}>
            <Image 
            height={100}
                src={mouse}
                alt=" contact image "
            ></Image>
            </div>


            <div  className={styles.upDownTwo}>
            <Image 
            height={250}
           
                src={keyb}
                alt=" contact image "
            ></Image>
            </div>

            <div className={styles.upDownThree} >
            <Image 
            height={250}
           
                src={card}
                alt=" contact image "
            ></Image>
            </div>

            <Box>
            <div className={styles.upDownFour} >
           
           <div className={styles.pcmob}>
           <Image 
          height={250}
         
              src={pc}
              alt=" contact image "
          ></Image>
        <div className={styles.mob}>
        <Image 
          
          height={250}
         
              src={mob}
              alt=" contact image "
          ></Image>
        </div>
          </div>
          </div>
            </Box>
           







            <Box sx={{display:'flex', justifyContent:"center", alignItems:"center", marginLeft:"50px"}} className={styles.consal} >
            <Image 
            height={150}
           
                src={consal}
                alt=" contact image "
            ></Image>
             <Typography
            sx={{ textAlign: "start",  fontWeight: "bold", color: "#ffffff" }}
            variant="h7"
          >
           100% FREE Consultation on Registration
          </Typography>
            </Box>
          
           <div  style={{marginTop:"350px", marginLeft:"50px"}}>


           <div style={{marginBottom:"20px",}}>
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