import { Game, UserProfile, LeaderboardEntry } from '../types/game';

export const games: Game[] = [
  {
    id: 'puzzle-quest',
    title: 'Puzzle Quest',
    category: 'puzzle',
    rating: 4.8,
    playCount: 15423,
    thumbnail: '/generated/puzzle-quest.png',
    estimatedPlayTime: 15,
    description: 'Match colorful gems and blocks in this addictive puzzle adventure'
  },
  {
    id: 'speed-racer',
    title: 'Speed Racer',
    category: 'action',
    rating: 4.3,
    playCount: 8901,
    thumbnail: '/generated/speed-racer.png',
    estimatedPlayTime: 10,
    description: 'High-speed racing action on colorful tracks'
  },
  {
    id: 'word-wizard',
    title: 'Word Wizard',
    category: 'puzzle',
    rating: 4.6,
    playCount: 22156,
    thumbnail: '/generated/word-wizard.png',
    estimatedPlayTime: 20,
    description: 'Create words from letter tiles in this challenging word game'
  },
  {
    id: 'space-invaders-redux',
    title: 'Space Invaders Redux',
    category: 'arcade',
    rating: 4.7,
    playCount: 31782,
    thumbnail: '/generated/space-invaders.png',
    estimatedPlayTime: 12,
    description: 'Classic space shooter with modern pixel art graphics'
  },
  {
    id: 'tower-defense-pro',
    title: 'Tower Defense Pro',
    category: 'strategy',
    rating: 4.4,
    playCount: 12634,
    thumbnail: '/generated/tower-defense.png',
    estimatedPlayTime: 30,
    description: 'Strategic tower placement to defend against waves of enemies'
  },
  {
    id: 'asteroid-smasher',
    title: 'Asteroid Smasher',
    category: 'action',
    rating: 4.5,
    playCount: 18945,
    thumbnail: '/generated/asteroid-smasher.png',
    estimatedPlayTime: 8,
    description: 'Blast asteroids in this fast-paced space action game'
  },
  {
    id: 'casual-stacker',
    title: 'Casual Stacker',
    category: 'puzzle',
    rating: 4.2,
    playCount: 9823,
    thumbnail: '/generated/casual-stacker.png',
    estimatedPlayTime: 10,
    description: 'Stack colorful blocks to clear lines and score points'
  },
  {
    id: 'maze-runner',
    title: 'Maze Runner',
    category: 'arcade',
    rating: 4.6,
    playCount: 24567,
    thumbnail: '/generated/maze-runner.png',
    estimatedPlayTime: 15,
    description: 'Navigate through mazes while avoiding enemies and collecting dots'
  },
  {
    id: 'neon-pinball',
    title: 'Neon Pinball',
    category: 'arcade',
    rating: 4.4,
    playCount: 16789,
    thumbnail: '/generated/neon-pinball.png',
    estimatedPlayTime: 12,
    description: 'Classic pinball action with vibrant neon graphics'
  },
];

export const mockUserProfile: UserProfile = {
  id: 'user-1',
  username: 'arcade_master_2024',
  totalGamesPlayed: 347,
  achievementsUnlocked: 23,
  totalAchievements: 50,
  currentStreak: 12,
  favoriteCategory: 'puzzle',
  totalPlayTime: 9392, // 156 hours 32 minutes
};

export const mockLeaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    playerName: 'Sarah K.',
    score: 98450,
    gameId: 'puzzle-quest'
  },
  {
    rank: 2,
    playerName: 'Mike R.',
    score: 87230,
    gameId: 'puzzle-quest'
  },
  {
    rank: 3,
    playerName: 'Jenny L.',
    score: 82910,
    gameId: 'puzzle-quest'
  },
];

export function getGamesByCategory(category: string) {
  if (category === 'all') return games;
  return games.filter(game => game.category === category);
}

export function getTrendingGames() {
  return [...games].sort((a, b) => b.playCount - a.playCount).slice(0, 4);
}

export function getTopRatedGames() {
  return [...games].sort((a, b) => b.rating - a.rating).slice(0, 4);
}
