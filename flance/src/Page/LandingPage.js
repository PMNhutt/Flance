import React from 'react';
import '../styles/LandingPage.scss';
import HeroSection from '../components/BodyComponents/HeroSection';
import PopularService from '../components/BodyComponents/PopularService';
import WhatWeDo from '../components/BodyComponents/WhatWeDo';
import Categories from '../components/BodyComponents/Categories';
import EarningSection from '../components/BodyComponents/EarningSection';
import FreelancerProjects from '../components/BodyComponents/FreelancerProjects';
import Blogs from '../components/BodyComponents/Blogs';

function LandingPage() {
  return (
    <div className="landing-page">
        <HeroSection />
        <PopularService />
        <WhatWeDo />
        <Categories />
        <EarningSection />
        <FreelancerProjects />
        <Blogs />
        
    </div>
  )
}

export default LandingPage