'use client';

import Link from 'next/link';
import { Search, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[hsl(var(--background))] border-b border-[hsl(var(--border))] backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="font-display text-2xl font-black tracking-wider text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2196F3] to-[#00E5FF]" style={{ textShadow: '0 0 20px rgba(33, 150, 243, 0.6)' }}>
                ARCADE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-[#FF1493] transition-colors font-medium">
              HOME
            </Link>
            <Link href="/games" className="text-white hover:text-[#FF1493] transition-colors font-medium">
              GAMES
            </Link>
            <Link href="/leaderboards" className="text-white hover:text-[#FF1493] transition-colors font-medium">
              LEADERBOARDS
            </Link>
            <Link href="/challenges" className="text-white hover:text-[#FF1493] transition-colors font-medium">
              CHALLENGES
            </Link>
            <Link href="/support" className="text-white hover:text-[#FF1493] transition-colors font-medium">
              SUPPORT
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search */}
            <button className="p-2 hover:bg-[hsl(var(--card))] rounded-lg transition-colors">
              <Search className="w-5 h-5 text-white" />
            </button>

            {/* User/Login */}
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-[hsl(var(--card))] rounded-full transition-colors">
                <User className="w-5 h-5 text-white" />
              </button>
              <Link href="/login">
                <button className="px-4 py-2 border-2 border-[#FF1493] text-[#FF1493] rounded-lg font-bold hover:bg-[#FF1493] hover:text-white transition-all">
                  LOG IN
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 hover:bg-[hsl(var(--card))] rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-[hsl(var(--border))]">
            <Link href="/" className="block text-white hover:text-[#FF1493] transition-colors font-medium">
              HOME
            </Link>
            <Link href="/games" className="block text-white hover:text-[#FF1493] transition-colors font-medium">
              GAMES
            </Link>
            <Link href="/leaderboards" className="block text-white hover:text-[#FF1493] transition-colors font-medium">
              LEADERBOARDS
            </Link>
            <Link href="/challenges" className="block text-white hover:text-[#FF1493] transition-colors font-medium">
              CHALLENGES
            </Link>
            <Link href="/support" className="block text-white hover:text-[#FF1493] transition-colors font-medium">
              SUPPORT
            </Link>
            <div className="pt-4 border-t border-[hsl(var(--border))] flex gap-3">
              <Link href="/profile" className="flex-1">
                <button className="w-full px-4 py-2 bg-[hsl(var(--card))] text-white rounded-lg font-bold hover:bg-[hsl(var(--muted))] transition-all">
                  PROFILE
                </button>
              </Link>
              <Link href="/login" className="flex-1">
                <button className="w-full px-4 py-2 border-2 border-[#FF1493] text-[#FF1493] rounded-lg font-bold hover:bg-[#FF1493] hover:text-white transition-all">
                  LOG IN
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
