import { Star, Quote, User } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Koyna Chakraborty',
      course: 'Fullstack Web Development',
      text: 'The fullstack program at foreBrain completely transformed my career. The hands-on labs and real-world scenarios prepared me perfectly for the industry.',
      rating: 5,
    },
    {
      name: 'Suhana',
      course: 'Artificial Intelligence',
      text: 'The AI course curriculum is cutting-edge. I landed my dream job within two months of completing the program. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Chelsea',
      course: 'Cybersecurity',
      text: 'Best investment in my career! The Cybersecurity bootcamp taught me everything from fundamentals to advanced Security majors. The mentors are exceptional.',
      rating: 5,
    },
    {
      name: 'Tejas',
      course: 'Data Science',
      text: 'The Data Science course curriculum is cutting-edge. I landed my dream job within two months of completing the program. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Amar',
      course: 'DevOps',
      text: 'Best investment in my career! The DevOps bootcamp taught me everything from fundamentals to advanced deployment and automation practices. The mentors are exceptional.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Student Reviews
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Gain valuable perspectives from our students on how the curriculum and training are empowering their growth in tech.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <div className="glass-effect rounded-2xl p-8 md:p-12 neon-border relative">
                    <Quote className="absolute top-8 right-8 w-16 h-16 text-cyan-400/20" />

                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 mb-6">
                      <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center neon-border">
                        <User className="w-12 h-12 text-cyan-400" />
                      </div>

                      <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-1">{testimonial.name}</h3>
                        <p className="text-cyan-400 font-semibold mb-1">{testimonial.course}</p>
                        <div className="flex justify-center md:justify-start mt-2 space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'bg-cyan-400 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
