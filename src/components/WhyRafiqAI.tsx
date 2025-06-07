
import React from 'react';
import { Globe } from 'lucide-react';

const WhyRafiqAI = () => {
  const features = [
    "Built for Arabic and Swahili speakers",
    "Supports local curricula and standards",
    "Works well in low-bandwidth environments",
    "Combines AI efficiency with human expertise",
    "Scales easily for schools and districts"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why RafiqAI?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            We understand the unique challenges faced by educators in diverse environments. 
            That's why RafiqAI is specifically designed to meet your needs.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 bg-card p-4 rounded-lg border border-border"
              >
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRafiqAI;
