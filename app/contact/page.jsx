import React from "react";
import { Header } from "@/components/ui/navbar/animatedNavbar";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import { Footer } from "@/components/common/Footer";

const page = () => {
  return (
    <div>
      <Header />
      <ContactHero />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default page;
