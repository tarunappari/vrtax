'use client'
import React from "react";
import styles from "@/styles/landingpage/Herosection.module.scss";
import  { HeroUI } from "../ui/about/hero/mainHero";
import LandingPageMainHero from "../ui/landingpage/herosection/heroUI";

const HeroSection = () => {

  const data = {images: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop',
      'https://plus.unsplash.com/premium_photo-1663054774427-55adfb2be76f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900?q=80&w=2070&auto=format&fit=crop',
    ],
}
  return (
    <div className={styles.container}>
      <LandingPageMainHero images={data.images} />
    </div>
  );
};

export default HeroSection;
