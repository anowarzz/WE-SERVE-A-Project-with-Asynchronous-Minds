import PricingImage from "../../assets/best-pricing.jpg";
import BlogImage from "../../assets/blog.png";
import ChatImage from "../../assets/chat-feature-logo.jpg";
import ChartImage from "../../assets/chart-services.png";
import HRImage from "../../assets/hr-management-image.jpg";
import InvoiceImage from "../../assets/invoice.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import styles from "./ServiceSlider.module.css";
import { Box, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { textAlign } from "@mui/system";

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
      image: InvoiceImage,
    },
    {
      name: "Real Time Chatting",
      id: "02",
      image: ChatImage,
    },
    {
      name: "HR Management",
      id: "03",
      image: HRImage,
    },
    {
      name: "Chart And Graphs Service",
      id: "04",
      image: ChartImage,
    },

    {
      name: "Blogs",
      id: "05",
      image: BlogImage,
    },
    {
      name: "Customize Pricing",
      id: "05",
      image: PricingImage,
    },
  ];

  return (
    <Box sx={{ marginTop: "200px" }}>
      <Typography
        textAlign='center'
        fontWeight='bold'
        variant="h4"
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
        autoPlaySpeed={2000}
        keyBoardControl={true}
        arrows=""
        customTransition="transform 500ms ease-in"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "desktop"]}
        dotListClass="react-multi-carousel-dot-list"
        // itemClass="carousel-item-padding--110-px"
      >
        {services?.map((service) => (
          <Box key={service.id} className={styles.sliderContainer}>
     
            <Card className={styles.serviceCard} boxShadow='none'>
              <CardContent>
                <Typography className={styles.serviceName}>
                  {service?.name}{" "}
                </Typography>
                <CardMedia>
                  <Image
                    src={service?.image}
                    alt="service"
                    width="300"
                    border="primary"
                    height="150"
                  />
                </CardMedia>
              </CardContent>
            </Card>
            
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default ServicesSlider;
