import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeatureSection } from '../components/home/FeatureSection';
import { DemoSection } from '../components/home/DemoSection';
import { MapSection } from '../components/home/MapSection';
// import { TestimonialSection } from '../components/home/TestimonialSection';
import { CtaSection } from '../components/home/CtaSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <DemoSection />
      <MapSection />
      {/* <TestimonialSection /> */}
      <CtaSection />
    </div>
  );
};

export default HomePage;