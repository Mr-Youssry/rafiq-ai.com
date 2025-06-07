
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ValuePropositions from '../components/ValuePropositions';
import HowItWorks from '../components/HowItWorks';
import WhyRafiqAI from '../components/WhyRafiqAI';
import EarlyAccessForm from '../components/EarlyAccessForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ValuePropositions />
      <HowItWorks />
      <WhyRafiqAI />
      <EarlyAccessForm />
      <Footer />
    </div>
  );
};

export default Index;
