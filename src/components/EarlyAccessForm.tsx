
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const EarlyAccessForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
    country: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error('Request failed');

      toast({
        title: 'Thank you!',
        description: "We'll be in touch soon with early access details.",
      });

      setFormData({
        fullName: '',
        email: '',
        role: '',
        country: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Unable to join the waitlist. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="early-access" className="py-16 bg-gradient-to-br from-primary to-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center text-primary-foreground mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Be one of the first to use RafiqAI
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Help us shape the future of teacher coaching by joining our early access group. 
              We'll notify you as soon as we're ready to onboard new users.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="role">Role *</Label>
                <Select value={formData.role} onValueChange={(value) => handleInputChange('role', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="teacher">Teacher</SelectItem>
                    <SelectItem value="coach">Instructional Coach</SelectItem>
                    <SelectItem value="admin">School Administrator</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="country">Country *</Label>
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="message">Why are you interested in RafiqAI? (Optional)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={4}
                  className="mt-1"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Joining Waitlist...' : 'Join the Waitlist'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessForm;
