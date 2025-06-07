
import React from 'react';
import { Lightbulb, Globe } from 'lucide-react';

const ValuePropositions = () => {
  const propositions = [
    {
      icon: Lightbulb,
      title: "Context-Aware AI Feedback",
      description: "Get real-time suggestions aligned with your curriculum and local teaching norms."
    },
    {
      icon: Globe,
      title: "Built for Real Classrooms",
      description: "Designed for schools in both urban and rural settings, with offline-friendly tools."
    },
    {
      icon: Globe,
      title: "Human + AI Coaching",
      description: "Benefit from smart automation — and connect with expert coaches when you need them most."
    }
  ];

  return (
    <section id="features" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Teachers Love RafiqAI
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover what makes our platform unique and effective
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {propositions.map((prop, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <prop.icon className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {prop.title}
                </h3>
                <p className="text-muted-foreground">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;
