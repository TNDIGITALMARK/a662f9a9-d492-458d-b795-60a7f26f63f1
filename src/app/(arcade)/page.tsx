'use client';

import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { GameCard } from '@/components/game-card';
import { games, getTrendingGames } from '@/lib/data/games';
import { Flame, Star, Gamepad2, Search } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = games.filter(game => {
    const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const trendingGames = getTrendingGames();

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Header />
      <HeroSection />

      {/* Main Content */}
      <main id="games" className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Category filters */}
              <div className="bg-[hsl(var(--card))] rounded-xl p-6 shadow-lg">
                <h3 className="font-heading font-bold text-lg mb-4 text-white uppercase">
                  Categories
                </h3>
                <div className="space-y-2">
                  <CategoryButton
                    icon={<Flame className="w-5 h-5" />}
                    label="Popular Games"
                    active={selectedCategory === 'all'}
                    onClick={() => setSelectedCategory('all')}
                  />
                  <CategoryButton
                    icon={<Star className="w-5 h-5" />}
                    label="New Releases"
                    active={selectedCategory === 'new'}
                    onClick={() => setSelectedCategory('new')}
                  />
                  <CategoryButton
                    icon={<Gamepad2 className="w-5 h-5" />}
                    label="Most Played"
                    active={selectedCategory === 'arcade'}
                    onClick={() => setSelectedCategory('arcade')}
                  />
                </div>
              </div>

              {/* Genre filters */}
              <div className="bg-[hsl(var(--card))] rounded-xl p-6 shadow-lg">
                <h3 className="font-heading font-bold text-lg mb-4 text-white uppercase">
                  Genres
                </h3>
                <div className="space-y-2">
                  <GenreButton
                    label="All Games"
                    active={selectedCategory === 'all'}
                    onClick={() => setSelectedCategory('all')}
                    count={games.length}
                  />
                  <GenreButton
                    label="Puzzle"
                    active={selectedCategory === 'puzzle'}
                    onClick={() => setSelectedCategory('puzzle')}
                    count={games.filter(g => g.category === 'puzzle').length}
                  />
                  <GenreButton
                    label="Action"
                    active={selectedCategory === 'action'}
                    onClick={() => setSelectedCategory('action')}
                    count={games.filter(g => g.category === 'action').length}
                  />
                  <GenreButton
                    label="Strategy"
                    active={selectedCategory === 'strategy'}
                    onClick={() => setSelectedCategory('strategy')}
                    count={games.filter(g => g.category === 'strategy').length}
                  />
                  <GenreButton
                    label="Arcade"
                    active={selectedCategory === 'arcade'}
                    onClick={() => setSelectedCategory('arcade')}
                    count={games.filter(g => g.category === 'arcade').length}
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* Main game grid */}
          <div className="flex-1">
            {/* Search bar */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[hsl(var(--muted-foreground))] w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search games..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-[hsl(var(--card))] text-white rounded-xl border-2 border-[hsl(var(--border))] focus:border-[#FF1493] focus:ring-2 focus:ring-[#FF1493]/20 transition-all"
                />
              </div>
            </div>

            {/* Section heading */}
            <div className="mb-6">
              <h2 className="font-heading text-3xl font-bold text-white uppercase tracking-wide">
                {selectedCategory === 'all' ? 'Release Games' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Games`}
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] mt-2">
                {filteredGames.length} games available
              </p>
            </div>

            {/* Game grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGames.map(game => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>

            {/* No results */}
            {filteredGames.length === 0 && (
              <div className="text-center py-16">
                <p className="text-[hsl(var(--muted-foreground))] text-lg">
                  No games found matching your search.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[hsl(var(--card))] border-t border-[hsl(var(--border))] mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-heading font-bold text-white mb-3 uppercase">About Us</h4>
              <p className="text-[hsl(var(--muted-foreground))] text-sm">
                contact@arcade.com
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold text-white mb-3 uppercase">Privacy Policy</h4>
            </div>
            <div>
              <h4 className="font-heading font-bold text-white mb-3 uppercase">Terms of Service</h4>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[hsl(var(--border))] text-center">
            <p className="text-[hsl(var(--muted-foreground))] text-sm">
              © 2024 Arcade Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface CategoryButtonProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

function CategoryButton({ icon, label, active, onClick }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium ${
        active
          ? 'bg-[#FF1493] text-white shadow-lg'
          : 'text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))] hover:text-white'
      }`}
    >
      <span className={active ? 'text-white' : 'text-[#FF1493]'}>{icon}</span>
      {label}
    </button>
  );
}

interface GenreButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
  count: number;
}

function GenreButton({ label, active, onClick, count }: GenreButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-all ${
        active
          ? 'bg-[#FF1493]/20 text-[#FF1493] font-semibold'
          : 'text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))] hover:text-white'
      }`}
    >
      <span>{label}</span>
      <span className={`text-xs ${active ? 'text-[#FF1493]' : 'text-[hsl(var(--muted-foreground))]'}`}>
        {count}
      </span>
    </button>
  );
}
