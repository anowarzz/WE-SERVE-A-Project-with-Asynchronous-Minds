import Navbar from "@/Shared/Navbar/Navbar";
import  HeroSection  from '@/HomePage/HeroSection/HeroSection';
import  ServicesSlider  from '@/HomePage/ServiceSlider/ServiceSlider';
import  ContactForm  from '@/HomePage/ContactForm/ContactForm';
import Image from "next/image";
import styles from './HomePage.module.css'
import chatLogo from '../assets/chatLogo.png'
import NewsLetter from "@/components/NewsLetter/NewsLetter";

const HomePage = () => {
    return (
        <>
        <div className={styles.main}>
        <Navbar/>
        <HeroSection />
        <ServicesSlider />
        <ContactForm></ContactForm>
        <div className={styles.chatLogo}>
        <Image 
           src={chatLogo}
           className={styles.logo}
           width="50"
           height="50"
           alt="chatlogo"
           />
        </div>
        </div>
         
         <NewsLetter />
    
        </>
    );
};

export default HomePage;