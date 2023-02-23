import PricingImage from "../../assets/ServiceSlider/best-pricing.jpg";
import BlogImage from "../../assets/ServiceSlider/blog.png" ;
import ChatImage from "../../assets/ServiceSlider/chat-feature-logo.jpg" ;
import ChartImage from "../../assets/ServiceSlider/chart-services.png" ;
import HRImage from "../../assets/ServiceSlider/hr-management-image.jpg" ;
import InvoiceImage from "../../assets/ServiceSlider/invoice.jpeg" ;



import Invoice from "../../assets/ServiceSlider/invoice.gif" ;
import blog from "../../assets/ServiceSlider/blog.gif" ;
import chat from "../../assets/ServiceSlider/chat.gif" ;
import chart from "../../assets/ServiceSlider/chart.gif" ;
import hr from "../../assets/ServiceSlider/HR.gif";
import pricess from "../../assets/ServiceSlider/price.gif";




import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import styles from "./ServiceSlider.module.css";
import { Box, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { textAlign } from "@mui/system";
import { AspectRatio, Grid } from "@mui/joy";
import { Directions } from "@mui/icons-material";

const ServicesSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 991, min: 601 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  const services = [
    {
      name: "Invoice Service",
      id: "01",
      image: Invoice,
    },
    {
      name: "Real Time Chatting",
      id: "02",
      image: chat,
    },
    {
      name: "HR Management",
      id: "03",
      image: hr,
    },
    {
      name: "Chart And Graphs Service",
      id: "04",
      image: chart,
    },

    {
      name: "Blogs",
      id: "05",
      image: blog,
    },
    {
      name: "Customize Pricing",
      id: "05",
      image: pricess,
    },
  ];

  return (
    <Box sx={{ marginTop: "200px" }}>
      <Typography
      mb={5}
        textAlign='center'
        fontWeight='bold'
        variant="h3"
      >
        Our Services
      </Typography>

      <Carousel
        swipeable={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        arrows=""
        customTransition="transform 500ms ease-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "desktop"]}
        dotListClass="react-multi-carousel-dot-list"
        // itemClass="carousel-item-padding--110-px"
      >
        {services?.map((service) => (
          <Box key={service.id}  >
            
        <Grid item className={styles.mainBox}>
           <Grid item>
                 <Typography 
                 className={styles.serviceName}
                 variant="h5">
                  {service?.name}{" "}
                </Typography>
           </Grid>
     
           <Grid item  className={styles.imageBox}>
              <Box sx={{boxShadow: 1, padding: 10, margin:2}}>
                 <Image 
                      src={service?.image}
                      alt="service"
                      width="80"
                      // border="primary"
                      height="80"
                    />
                {/* <CardContent>
              
                
                
                
                </CardContent> */}
                {/* <CardMedia >
                  
                
                  
                  </CardMedia> */}
              </Box>
           </Grid>
           </Grid>
            
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default ServicesSlider;
