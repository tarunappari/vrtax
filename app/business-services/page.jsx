
import { BusinessCTA } from '@/components/business/BsinessCTA';
import BusinessFAQ from '@/components/business/BusinessFAQ';
import BusinessHeroSection from '@/components/business/BusinessHeroSection';
import BusinessServicesCardsSection from '@/components/business/BusinessServiceCardsSection';
import { BusinessWhyChooseUs } from '@/components/business/BusinessWhyChooseUs';
import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/ui/navbar/animatedNavbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
      <BusinessHeroSection />
      <BusinessServicesCardsSection />
      <BusinessWhyChooseUs />
      <BusinessFAQ />
      <BusinessCTA />
      <Footer />
    </div>
  )
}

export default page;
