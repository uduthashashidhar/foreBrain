import { Calendar, MapPin, Users, Image } from 'lucide-react';

export default function Events() {
  const events = [
    {
      type: 'Workshop',
      title: 'Cybersecurity Bootcamp',
      description: 'Hands-on ethical hacking and network security fundamentals with lab practice.',
      date: 'Aug 2024',
      location: 'Nagpur, India',
      participants: '120+ attendees',
      cta: 'View Gallery',
    },
    {
      type: 'Event',
      title: 'AI Hackathon',
      description: '24-hour hackathon focused on NLP and computer vision challenges.',
      date: 'Nov 2024',
      location: 'Nagpur, India',
      participants: '80+ participants',
      cta: 'View Highlights',
    },
    {
      type: 'Workshop',
      title: 'Web Development Workshop',
      description: 'Modern React, TailwindCSS, and deployment best practices for beginners.',
      date: 'Jan 2025',
      location: 'Nagpur, India',
      participants: '150+ attendees',
      cta: 'View Gallery',
    },
  ];

  return (
    <section id="events" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Workshops & Events Conducted</h2>
          <p className="text-gray-400 mt-3 max-w-3xl">
            A snapshot of our recent workshops and events. Explore what we’ve built with communities and partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((ev, idx) => (
            <article key={idx} className="glass-effect rounded-2xl p-6 neon-border flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {ev.type}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {ev.participants}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{ev.title}</h3>
              <p className="text-gray-300 mb-6">{ev.description}</p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0 mb-6 text-gray-300">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-cyan-400" />
                  <span>{ev.date}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-purple-400" />
                  <span>{ev.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-green-400" />
                  <span>{ev.participants}</span>
                </div>
              </div>

              <button className="mt-auto group px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center space-x-2">
                <Image className="w-5 h-5" />
                <span>{ev.cta}</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}