import React from 'react';
const HeroSection = () => {
  const scrollToEarlyAccess = () => {
    const element = document.getElementById('early-access');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-primary/10 to-primary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Personalized Coaching for{' '}
            <span className="text-teal-700">Every Teacher</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            RafiqAI helps teachers grow through AI-powered feedback and expert coaching — 
            making high-quality support accessible in Africa, the Arab world, and beyond.
          </p>
          
          <button onClick={scrollToEarlyAccess} className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-fade-in">
            Request Early Access
          </button>
          
          {/* Visual Element */}
          <div className="mt-12 relative">
            <div className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl mx-auto border">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mb-4 mx-auto">
                    <img src="/lovable-uploads/7c7d7e05-f3a9-4ff0-8e4b-6ee65d53c0a2.png" alt="RafiqAI Logo" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-muted-foreground">AI-Powered Teacher Coaching Platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;