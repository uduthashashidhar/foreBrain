import { ChevronUp } from 'lucide-react';

interface ScrollToTopProps {
  show: boolean;
}

export default function ScrollToTop({ show }: ScrollToTopProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 glow-hover animate-bounce"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}
