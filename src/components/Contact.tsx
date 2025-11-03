// src/components/Contact.tsx
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

type FormData = { name: string; email: string; phone: string; message: string };

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ email: '', phone: '', message: '', form: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = { email: '', phone: '', message: '', form: '' };
    let isValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (formData.phone.trim()) {
      const digits = formData.phone.replace(/\D/g, '');
      if (digits.length < 7 || digits.length > 15) {
        newErrors.phone = 'Please enter a valid phone number';
        isValid = false;
      }
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    if (!isValid) return;

    setLoading(true);
    try {
      // Using relative URL for API which will work with Vite proxy
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || 'Failed to send message');
      }

      // success
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err: any) {
      setErrors(prev => ({ ...prev, form: err.message || 'Server error' }));
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <section id="contact" className="relative py-20 md:py-32">
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your tech journey? Reach out to us and let's make it happen
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* left contact info (unchanged) */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Contact Information</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4 glass-effect rounded-xl p-4 neon-border glow-hover">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-400">forebraininnovation@gmail.com</p>
                  <p className="text-gray-400">support@forebrain.tech</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 glass-effect rounded-xl p-4 neon-border glow-hover">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-400">+91 9225524601</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 glass-effect rounded-xl p-4 neon-border glow-hover">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-gray-400">Nagpur, Maharashtra</p>
                  <p className="text-gray-400">India - 440001</p>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6 neon-border">
              <h4 className="font-semibold mb-4 text-cyan-400">Office Hours</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-white">Closed</span>
                </p>
              </div>
            </div>
          </div>

          {/* form */}
          <div className="glass-effect rounded-2xl p-8 neon-border">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-cyan-500/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 text-white transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.email ? 'border-red-500' : 'border-cyan-500/30'} focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 text-white transition-all`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-300">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-cyan-500/30'} focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 text-white transition-all`}
                  placeholder="e.g. +91 98765 43210"
                />
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.message ? 'border-red-500' : 'border-cyan-500/30'} focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 text-white transition-all resize-none`}
                  placeholder="Tell us about your query..."
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              {errors.form && <p className="text-red-400 text-sm">{errors.form}</p>}

              <button
                type="submit"
                disabled={isSubmitted || loading}
                className={`w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${isSubmitted ? 'bg-green-600 cursor-not-allowed' : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-2xl hover:shadow-cyan-500/50 glow-hover'}`}
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
