'use client';

import { Header } from '@/components/header';
import { GameCard } from '@/components/game-card';
import { mockUserProfile, games } from '@/lib/data/games';
import { Trophy, Flame, Clock, Star, TrendingUp } from 'lucide-react';

export default function ProfilePage() {
  const favoriteGames = games.slice(0, 4); // Mock favorite games

  // Convert total play time to hours and minutes
  const hours = Math.floor(mockUserProfile.totalPlayTime / 60);
  const minutes = mockUserProfile.totalPlayTime % 60;

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Header />

      <main className="container mx-auto px-6 py-12">
        {/* Profile header */}
        <div className="bg-gradient-to-r from-[#FF1493] to-[#9C27B0] rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Avatar */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#2196F3] to-[#00E5FF] flex items-center justify-center text-5xl font-black text-white shadow-lg">
              {mockUserProfile.username.charAt(0).toUpperCase()}
            </div>

            {/* User info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="font-heading text-4xl font-black text-white uppercase mb-2">
                {mockUserProfile.username}
              </h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  <span>Level 24</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5" />
                  <span>{mockUserProfile.currentStreak} Day Streak</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{hours}h {minutes}m Played</span>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white text-[#FF1493] rounded-xl font-bold hover:bg-white/90 transition-all">
                Edit Profile
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-[#FF1493] transition-all">
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <StatCard
            icon={<Trophy className="w-6 h-6" />}
            label="Games Played"
            value={mockUserProfile.totalGamesPlayed.toString()}
            color="#FFD700"
          />
          <StatCard
            icon={<Star className="w-6 h-6" />}
            label="Achievements"
            value={`${mockUserProfile.achievementsUnlocked}/${mockUserProfile.totalAchievements}`}
            color="#FF1493"
          />
          <StatCard
            icon={<Flame className="w-6 h-6" />}
            label="Current Streak"
            value={`${mockUserProfile.currentStreak} days`}
            color="#FF9800"
          />
          <StatCard
            icon={<TrendingUp className="w-6 h-6" />}
            label="Total XP"
            value="15,420"
            color="#2196F3"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Achievements section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-3xl font-bold text-white uppercase">
                  Achievements
                </h2>
                <span className="text-[hsl(var(--muted-foreground))]">
                  {mockUserProfile.achievementsUnlocked} of {mockUserProfile.totalAchievements} Unlocked
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <AchievementBadge
                  title="First Win"
                  unlocked={true}
                  icon="🏆"
                />
                <AchievementBadge
                  title="Speed Demon"
                  unlocked={true}
                  icon="⚡"
                />
                <AchievementBadge
                  title="High Scorer"
                  unlocked={true}
                  icon="🎯"
                />
                <AchievementBadge
                  title="Marathon"
                  unlocked={false}
                  icon="🏃"
                />
                <AchievementBadge
                  title="Perfectionist"
                  unlocked={false}
                  icon="💎"
                />
                <AchievementBadge
                  title="Champion"
                  unlocked={false}
                  icon="👑"
                />
              </div>
            </section>

            {/* Favorite games */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-3xl font-bold text-white uppercase">
                  Favorite Games
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {favoriteGames.map(game => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Activity streak */}
            <div className="bg-[hsl(var(--card))] rounded-2xl p-6 shadow-lg">
              <h3 className="font-heading text-xl font-bold text-white mb-4 uppercase flex items-center gap-2">
                <Flame className="w-6 h-6 text-[#FF9800]" />
                Activity Streak
              </h3>
              <div className="text-center mb-4">
                <div className="text-5xl font-black text-[#FF9800] mb-2">
                  {mockUserProfile.currentStreak}
                </div>
                <div className="text-[hsl(var(--muted-foreground))]">
                  days in a row
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 14 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded ${
                      i < mockUserProfile.currentStreak
                        ? 'bg-[#FF9800]'
                        : 'bg-[hsl(var(--muted))]'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Recent activity */}
            <div className="bg-[hsl(var(--card))] rounded-2xl p-6 shadow-lg">
              <h3 className="font-heading text-xl font-bold text-white mb-4 uppercase">
                Recent Activity
              </h3>
              <div className="space-y-3">
                <ActivityItem
                  game="Puzzle Quest"
                  action="Scored 15,430 points"
                  time="2 hours ago"
                />
                <ActivityItem
                  game="Space Invaders"
                  action="Unlocked achievement"
                  time="5 hours ago"
                />
                <ActivityItem
                  game="Tower Defense"
                  action="Completed level 10"
                  time="1 day ago"
                />
              </div>
            </div>

            {/* Skill badges */}
            <div className="bg-[hsl(var(--card))] rounded-2xl p-6 shadow-lg">
              <h3 className="font-heading text-xl font-bold text-white mb-4 uppercase">
                Skill Badges
              </h3>
              <div className="space-y-3">
                <SkillBadge
                  skill="Puzzle Master"
                  level={8}
                  maxLevel={10}
                />
                <SkillBadge
                  skill="Action Hero"
                  level={6}
                  maxLevel={10}
                />
                <SkillBadge
                  skill="Strategist"
                  level={4}
                  maxLevel={10}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}

function StatCard({ icon, label, value, color }: StatCardProps) {
  return (
    <div className="bg-[hsl(var(--card))] rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-2" style={{ color }}>
        {icon}
        <span className="text-[hsl(var(--muted-foreground))] text-sm font-medium uppercase">
          {label}
        </span>
      </div>
      <div className="text-3xl font-black text-white">
        {value}
      </div>
    </div>
  );
}

interface AchievementBadgeProps {
  title: string;
  unlocked: boolean;
  icon: string;
}

function AchievementBadge({ title, unlocked, icon }: AchievementBadgeProps) {
  return (
    <div className={`rounded-xl p-4 text-center transition-all ${
      unlocked
        ? 'bg-gradient-to-br from-[#FFD700] to-[#FF9800] shadow-lg'
        : 'bg-[hsl(var(--muted))] opacity-50 grayscale'
    }`}>
      <div className="text-4xl mb-2">{icon}</div>
      <div className={`text-sm font-bold ${unlocked ? 'text-black' : 'text-[hsl(var(--muted-foreground))]'}`}>
        {title}
      </div>
    </div>
  );
}

interface ActivityItemProps {
  game: string;
  action: string;
  time: string;
}

function ActivityItem({ game, action, time }: ActivityItemProps) {
  return (
    <div className="flex items-start gap-3 p-3 bg-[hsl(var(--muted))] rounded-lg">
      <div className="w-2 h-2 mt-2 rounded-full bg-[#FF1493]" />
      <div className="flex-1">
        <p className="text-white font-semibold text-sm">{game}</p>
        <p className="text-[hsl(var(--muted-foreground))] text-xs">{action}</p>
        <p className="text-[hsl(var(--muted-foreground))] text-xs mt-1">{time}</p>
      </div>
    </div>
  );
}

interface SkillBadgeProps {
  skill: string;
  level: number;
  maxLevel: number;
}

function SkillBadge({ skill, level, maxLevel }: SkillBadgeProps) {
  const percentage = (level / maxLevel) * 100;

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-semibold text-sm">{skill}</span>
        <span className="text-[hsl(var(--muted-foreground))] text-xs">
          {level}/{maxLevel}
        </span>
      </div>
      <div className="h-2 bg-[hsl(var(--muted))] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#FF1493] to-[#9C27B0]"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
