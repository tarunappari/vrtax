import IndividualHeroSection from '@/components/individual/IndividualHeroSection';
import { Header } from '@/components/ui/navbar/animatedNavbar';
import React from 'react'
import ServicesCardsSection from '@/components/individual/ServiceCardsSection';
import IndividualFAQ from '@/components/individual/IndividualFAQ';
import { IndividualCTA } from '@/components/individual/IndividualCTA';
import { Footer } from '@/components/common/Footer';
import { IndividualWhyChooseUs } from '@/components/individual/IndividualWhyChooseUs';

const page = () => {
  return (
    <div>
      <Header />
      <IndividualHeroSection />
      <ServicesCardsSection />
      <IndividualWhyChooseUs />
      <IndividualFAQ />
      <IndividualCTA />
      <Footer />
    </div>
  )
}

export default page;
