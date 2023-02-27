import React from 'react';
import { AboutSection } from './aboutSection/AboutSection';
import { ComandSection } from './comandSection/ComandSection';
import { ContuctUs } from './../common/callUs/ContuctUs';

export const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <div className="container">
        <h2>О нас</h2>
        <AboutSection />
        <ComandSection />
      </div>
      <ContuctUs />
    </div>
  );
};
