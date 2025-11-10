'use client';

import { Header } from '@/components/header';
import { games, mockLeaderboard } from '@/lib/data/games';
import { useParams } from 'next/navigation';
import { ArrowLeft, Share2, Trophy, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function GamePage() {
  const params = useParams();
  const game = games.find(g => g.id === params.id);

  if (!game) {
    return (
      <div className="min-h-screen bg-[hsl(var(--background))]">
        <Header />
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Game Not Found</h1>
          <Link href="/">
            <button className="px-6 py-3 bg-gradient-to-r from-[#FF1493] to-[#FF69B4] rounded-lg font-bold text-white">
              Back to Games
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Header />

      <main className="container mx-auto px-6 py-8">
        {/* Back button */}
        <Link href="/" className="inline-flex items-center gap-2 text-[hsl(var(--muted-foreground))] hover:text-white transition-colors mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Games</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main game area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Game canvas */}
            <div className="bg-[hsl(var(--card))] rounded-2xl overflow-hidden shadow-lg p-4">
              <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
                <Image
                  src={game.thumbnail}
                  alt={game.title}
                  fill
                  className="object-cover"
                />

                {/* Overlay with play button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                  <button className="px-8 py-4 bg-gradient-to-r from-[#FF1493] to-[#FF69B4] rounded-xl font-bold text-white text-lg uppercase shadow-lg hover:scale-105 transition-transform">
                    START GAME
                  </button>
                </div>
              </div>
            </div>

            {/* Game info */}
            <div className="bg-[hsl(var(--card))] rounded-2xl p-6 shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="font-heading text-3xl font-bold text-white uppercase mb-2">
                    {game.title}
                  </h1>
                  <div className="flex items-center gap-4 text-[hsl(var(--muted-foreground))]">
                    <span className="px-3 py-1 bg-[#FF1493]/20 text-[#FF1493] rounded-full text-sm font-semibold uppercase">
                      {game.category}
                    </span>
                    <span>★ {game.rating} Rating</span>
                    <span>{(game.playCount / 1000).toFixed(1)}K Plays</span>
                  </div>
                </div>
                <button className="p-3 bg-[hsl(var(--muted))] hover:bg-[#FF1493] rounded-xl transition-colors">
                  <Share2 className="w-5 h-5 text-white" />
                </button>
              </div>

              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                {game.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#FF1493]" />
                  <span className="text-white font-medium">Single Player</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#FFD700]" />
                  <span className="text-white font-medium">Achievements Available</span>
                </div>
              </div>
            </div>

            {/* Controls/Instructions */}
            <div className="bg-[hsl(var(--card))] rounded-2xl p-6 shadow-lg">
              <h3 className="font-heading text-xl font-bold text-white mb-4 uppercase">
                How to Play
              </h3>
              <div className="space-y-2 text-[hsl(var(--muted-foreground))]">
                <p>• Use arrow keys to move</p>
                <p>• Press SPACE to interact</p>
                <p>• ESC to pause game</p>
                <p>• Collect points and unlock achievements</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Leaderboard */}
            <div className="bg-[hsl(var(--card))] rounded-2xl p-6 shadow-lg">
              <h3 className="font-heading text-xl font-bold text-white mb-4 uppercase flex items-center gap-2">
                <Trophy className="w-6 h-6 text-[#FFD700]" />
                Leaderboard
              </h3>
              <div className="space-y-3">
                {mockLeaderboard.map((entry) => (
                  <div
                    key={entry.rank}
                    className="flex items-center justify-between p-3 bg-[hsl(var(--muted))] rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        entry.rank === 1 ? 'bg-[#FFD700] text-black' :
                        entry.rank === 2 ? 'bg-[#C0C0C0] text-black' :
                        entry.rank === 3 ? 'bg-[#CD7F32] text-black' :
                        'bg-[hsl(var(--background))] text-white'
                      }`}>
                        {entry.rank}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{entry.playerName}</p>
                      </div>
                    </div>
                    <div className="text-[#FF1493] font-bold">
                      {entry.score.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 px-4 py-2 border-2 border-[#FF1493] text-[#FF1493] rounded-lg font-bold hover:bg-[#FF1493] hover:text-white transition-all">
                View Full Leaderboard
              </button>
            </div>

            {/* Achievements */}
            <div className="bg-[hsl(var(--card))] rounded-2xl p-6 shadow-lg">
              <h3 className="font-heading text-xl font-bold text-white mb-4 uppercase">
                Achievements
              </h3>
              <div className="space-y-3">
                <AchievementItem
                  title="First Steps"
                  description="Complete your first game"
                  unlocked={false}
                />
                <AchievementItem
                  title="Speed Runner"
                  description="Finish in under 5 minutes"
                  unlocked={false}
                />
                <AchievementItem
                  title="High Scorer"
                  description="Score over 10,000 points"
                  unlocked={false}
                />
              </div>
            </div>

            {/* Game stats */}
            <div className="bg-[hsl(var(--card))] rounded-2xl p-6 shadow-lg">
              <h3 className="font-heading text-xl font-bold text-white mb-4 uppercase">
                Your Stats
              </h3>
              <div className="space-y-3">
                <StatRow label="Times Played" value="0" />
                <StatRow label="Best Score" value="-" />
                <StatRow label="Total Time" value="0h 0m" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

interface AchievementItemProps {
  title: string;
  description: string;
  unlocked: boolean;
}

function AchievementItem({ title, description, unlocked }: AchievementItemProps) {
  return (
    <div className={`p-3 rounded-lg ${unlocked ? 'bg-[#FFD700]/20' : 'bg-[hsl(var(--muted))]/50'}`}>
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
          unlocked ? 'bg-[#FFD700]' : 'bg-[hsl(var(--muted))]'
        }`}>
          <Trophy className={`w-5 h-5 ${unlocked ? 'text-black' : 'text-[hsl(var(--muted-foreground))]'}`} />
        </div>
        <div className="flex-1">
          <p className={`font-semibold text-sm ${unlocked ? 'text-white' : 'text-[hsl(var(--muted-foreground))]'}`}>
            {title}
          </p>
          <p className="text-xs text-[hsl(var(--muted-foreground))]">{description}</p>
        </div>
      </div>
    </div>
  );
}

interface StatRowProps {
  label: string;
  value: string;
}

function StatRow({ label, value }: StatRowProps) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-[hsl(var(--muted-foreground))]">{label}</span>
      <span className="text-white font-bold">{value}</span>
    </div>
  );
}
