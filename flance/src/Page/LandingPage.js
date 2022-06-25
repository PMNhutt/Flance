import React from 'react';
import '../styles/LandingPage.scss';
import HeroSection from '../components/BodyComponents/HeroSection';
import PopularService from '../components/BodyComponents/PopularService';
import WhatWeDo from '../components/BodyComponents/WhatWeDo';

function LandingPage() {
  return (
    <div className="landing-page">
        <HeroSection />
        <PopularService />
        <WhatWeDo />
        
    </div>
  )
}

export default LandingPage