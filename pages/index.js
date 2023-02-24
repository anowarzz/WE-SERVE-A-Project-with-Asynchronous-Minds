import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import ServicesSlider from "@/HomePage/ServiceSlider/ServiceSlider";
import ContactForm from "@/HomePage/ContactForm/ContactForm";
import HeroSection from "@/HomePage/HeroSection/HeroSection";
import Navbar from "@/Shared/Navbar/Navbar";
import chatLogo from "../assets/chatLogo.png";

const inter = Inter({ subsets: ["latin"]});

export default function Home() {
  return (
    <>
      <Head>
        <title>We Serve</title>
        <meta name="we-serve" content="We serve business solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar></Navbar>
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
      </main>
    </>
  );
}
