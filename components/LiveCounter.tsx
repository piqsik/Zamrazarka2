import React, { useState, useEffect } from 'react';

interface LiveCounterProps {
  startDate: string;
}

const LiveCounter: React.FC<LiveCounterProps> = ({ startDate }) => {
  const [days, setDays] = useState<number>(0);

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(startDate);
      start.setHours(0, 0, 0, 0);
      const now = new Date();
      
      const diff = now.getTime() - start.getTime();
      
      if (diff < 0) {
        setDays(0);
        return;
      }

      const calculatedDays = Math.floor(diff / (1000 * 60 * 60 * 24));
      setDays(calculatedDays);
    };

    calculateTime();
    // Update every minute to ensure it stays accurate if the page is left open
    const timer = setInterval(calculateTime, 60000);
    return () => clearInterval(timer);
  }, [startDate]);

  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg group">
      {/* Background with gradient and subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900"></div>
      
      {/* Animated shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] animate-[shimmer_4s_infinite]"></div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-between px-6 py-5 border border-white/10 rounded-xl bg-navy-900/30 backdrop-blur-[2px]">
        
        {/* Label Section */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-[10px] md:text-xs font-bold text-white/90 uppercase tracking-[0.2em]">
              Status: Zamrożony
            </span>
          </div>
          <span className="text-[10px] font-medium text-navy-light/50">
            Czas oczekiwania na procedowanie
          </span>
        </div>

        {/* Counter Section */}
        <div className="flex items-baseline gap-2">
          <span 
            key={days} 
            className="text-4xl md:text-5xl font-serif font-black text-white tabular-nums tracking-tight drop-shadow-xl animate-tick"
          >
            {days}
          </span>
          <span className="text-sm font-bold text-accent-gold uppercase tracking-wider mb-1">
            Dni
          </span>
        </div>
        
      </div>
    </div>
  );
};

export default LiveCounter;