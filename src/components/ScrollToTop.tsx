'use client';

import { useEffect } from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;

      const progress = document.getElementById('scroll-progress');
      if (progress) {
        progress.style.height = `${scrolled}%`;
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center group">
      {/* Progress Bar */}
      <div className="w-2 h-24 bg-gray-200 rounded-full overflow-hidden mb-2">
        <div
          id="scroll-progress"
          className="w-full bg-cyan-600 transition-all duration-200 ease-linear"
          style={{ height: '0%' }}
        />
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-cyan-600 text-white p-2 rounded-full shadow-lg hover:bg-cyan-700 transition transform hover:scale-105"
        title="Scroll to Top"
      >
        ↑
      </button>
    </div>
  );
}
