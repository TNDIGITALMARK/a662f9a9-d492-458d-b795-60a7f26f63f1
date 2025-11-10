export type GameCategory = 'puzzle' | 'action' | 'strategy' | 'arcade';

export interface Game {
  id: string;
  title: string;
  category: GameCategory;
  rating: number; // 0-5
  playCount: number;
  thumbnail: string;
  estimatedPlayTime: number; // in minutes
  description?: string;
}

export interface UserProfile {
  id: string;
  username: string;
  totalGamesPlayed: number;
  achievementsUnlocked: number;
  totalAchievements: number;
  currentStreak: number;
  favoriteCategory: GameCategory;
  totalPlayTime: number; // in minutes
  avatar?: string;
}

export interface LeaderboardEntry {
  rank: number;
  playerName: string;
  score: number;
  gameId: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
}
