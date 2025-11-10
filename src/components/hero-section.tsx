'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(var(--card))] py-16 md:py-24">
      {/* Animated floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingShape color="#FF1493" size={60} delay={0} />
        <FloatingShape color="#2196F3" size={80} delay={2} />
        <FloatingShape color="#00FF00" size={50} delay={1} />
        <FloatingShape color="#9C27B0" size={70} delay={3} />
        <FloatingShape color="#FF9800" size={55} delay={1.5} />
        <FloatingShape color="#FF1493" size={65} delay={2.5} />
        <FloatingShape color="#2196F3" size={45} delay={0.5} />
        <FloatingShape color="#00FF00" size={75} delay={3.5} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tight leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FF1493] to-[#FF69B4]" style={{ textShadow: '0 0 30px rgba(255, 215, 0, 0.5)' }}>
              RELIVE THE GOLDEN
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] to-[#FF69B4] mt-2" style={{ textShadow: '0 0 30px rgba(255, 20, 147, 0.5)' }}>
              AGE OF GAMING
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[hsl(var(--muted-foreground))] font-medium">
            Play hundreds of classic arcade games instantly in your browser
          </p>

          {/* CTA Button */}
          <div className="flex justify-center pt-4">
            <Link href="#games">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#FF1493] to-[#FF69B4] rounded-xl font-bold text-white text-lg uppercase tracking-wide shadow-lg hover:shadow-[0_0_30px_rgba(255,20,147,0.6)] transition-all duration-300 hover:scale-105">
                <span className="relative z-10">PLAY NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF69B4] to-[#FF1493] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FloatingShapeProps {
  color: string;
  size: number;
  delay: number;
}

function FloatingShape({ color, size, delay }: FloatingShapeProps) {
  const [position, setPosition] = useState({
    x: Math.random() * 100,
    y: Math.random() * 100,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * 100,
        y: Math.random() * 100,
      });
    }, 8000 + delay * 1000);

    return () => clearInterval(interval);
  }, [delay]);

  return (
    <div
      className="absolute transition-all duration-[8000ms] ease-in-out opacity-80"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        animationDelay: `${delay}s`,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" className="animate-spin-slow">
        <polygon
          points="50,10 90,90 10,90"
          fill={color}
          opacity="0.6"
          filter="blur(1px)"
        />
      </svg>
    </div>
  );
}
