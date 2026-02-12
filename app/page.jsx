import AboutHero from '@/components/about/AboutHero'
import {Footer} from '@/components/common/Footer'
import { CTASection } from '@/components/landingpage/CTASection'
import FAQSection from '@/components/landingpage/FaqSection'
import HeroSection from '@/components/landingpage/HeroSection'
import ServicesSection from '@/components/landingpage/ServicesSection'
import Testimonials from '@/components/landingpage/Testimonials'
import TrustSection from '@/components/landingpage/TrustSection'
import WhyChooseUs from '@/components/landingpage/WhyChooseUs'
import { Header } from '@/components/ui/navbar/animatedNavbar'
import React from 'react'

const page = () => {
  return (
    <div style={{minHeight:'200vh',overflow:"hidden"}}>
      <Header />
      <HeroSection />
      <TrustSection />
      <WhyChooseUs />
      <ServicesSection />
      <Testimonials />
      <FAQSection />
      <CTASection />
      <Footer />
    
    </div>
  )
}

export default page
