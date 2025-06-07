
import React from 'react';

const HeroSection = () => {
  const scrollToEarlyAccess = () => {
    const element = document.getElementById('early-access');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Personalized Coaching for{' '}
            <span className="text-blue-600">Every Teacher</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            RafiqAI helps teachers grow through AI-powered feedback and expert coaching — 
            making high-quality support accessible in Africa, the Arab world, and beyond.
          </p>
          
          <button
            onClick={scrollToEarlyAccess}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-fade-in"
          >
            Request Early Access
          </button>
          
          {/* Visual Element */}
          <div className="mt-12 relative">
            <div className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl mx-auto border">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">R</span>
                  </div>
                  <p className="text-muted-foreground">AI-Powered Teacher Coaching Platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
