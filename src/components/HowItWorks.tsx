
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Record Your Lesson",
      description: "Use your phone to record a class session."
    },
    {
      number: "02",
      title: "Get Instant Feedback",
      description: "RafiqAI gives you clear, actionable insights."
    },
    {
      number: "03",
      title: "Reflect & Improve",
      description: "Receive guided prompts to help you reflect and grow."
    },
    {
      number: "04",
      title: "Connect with a Coach",
      description: "Talk with a human coach for deeper support when needed."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple steps to transform your teaching practice
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
                
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/30 transform translate-x-8 -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
