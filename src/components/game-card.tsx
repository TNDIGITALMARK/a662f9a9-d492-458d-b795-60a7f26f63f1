'use client';

import { Game } from '@/lib/types/game';
import Link from 'next/link';
import { Play, Star } from 'lucide-react';
import Image from 'next/image';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const formatPlayCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <Link href={`/game/${game.id}`} className="group block">
      <div className="relative rounded-2xl overflow-hidden bg-[hsl(var(--card))] transition-all duration-300 hover:scale-105 hover:shadow-card-hover">
        {/* Purple gradient border effect */}
        <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-[#FF00FF] via-[#9C27B0] to-[#673AB7] opacity-80 group-hover:opacity-100 transition-opacity" />

        {/* Card content */}
        <div className="relative bg-[hsl(var(--card))] rounded-2xl overflow-hidden h-full">
          {/* Game thumbnail */}
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={game.thumbnail}
              alt={game.title}
              fill
              className="object-cover brightness-100 contrast-105 saturate-110 group-hover:brightness-110 transition-all duration-300"
            />

            {/* Hover overlay with Play button */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF1493] to-[#FF69B4] rounded-lg font-bold text-white shadow-lg hover:brightness-125 transition-all">
                  <Play className="w-5 h-5" fill="white" />
                  PLAY NOW
                </button>
              </div>
            </div>

            {/* Online indicator */}
            <div className="absolute top-3 right-3 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
              <div className="w-2 h-2 bg-[#00FF00] rounded-full shadow-[0_0_8px_rgba(0,255,0,0.8)] animate-pulse" />
              <span className="text-xs text-white font-medium">ONLINE</span>
            </div>
          </div>

          {/* Game info */}
          <div className="p-4 space-y-2">
            {/* Title */}
            <h3 className="font-bold text-white text-base uppercase tracking-wide truncate">
              {game.title}
            </h3>

            {/* Rating and play count */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(game.rating)
                        ? 'fill-[#FFD700] text-[#FFD700]'
                        : 'fill-[#444] text-[#444]'
                    }`}
                  />
                ))}
                <span className="ml-1 text-[hsl(var(--muted-foreground))]">
                  {game.rating}
                </span>
              </div>
              <span className="text-[hsl(var(--muted-foreground))] text-xs">
                {formatPlayCount(game.playCount)} plays
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
