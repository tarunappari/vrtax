import { AboutCTA } from '@/components/about/AboutCTA'
import AboutFAQ from '@/components/about/AboutFAQ'
import AboutHero from '@/components/about/AboutHero'
import OurValues from '@/components/about/OurValues'
import { WhyChooseUs } from '@/components/about/WhyChooseUs'
import { Footer } from '@/components/common/Footer'
import { Header } from '@/components/ui/navbar/animatedNavbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
      <AboutHero />
      <OurValues />
      <WhyChooseUs />
      <AboutFAQ />
      <AboutCTA />
      <Footer />
    </div>
  )
}

export default page
