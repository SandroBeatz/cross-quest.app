'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '../../../AppContext';
import Dashboard from '@/components/Dashboard';
import { CrosswordData } from '@/types';

export default function DashboardPage() {
  const { profile } = useAppContext();
  const router = useRouter();
  const [currentCrossword, setCurrentCrossword] = useState<CrosswordData | null>(null);

  if (!profile) {
    return null;
  }

  const handleStartGame = (data: CrosswordData) => {
    setCurrentCrossword(data);
    // Store crossword data in sessionStorage for the game page
    sessionStorage.setItem('currentCrossword', JSON.stringify(data));
    router.push('/p/games/crossword');
  };

  const handleContinueGame = () => {
    // Navigate to game page - it will load saved state from localStorage
    router.push('/p/games/crossword');
  };

  return (
    <Dashboard
      profile={profile}
      onStartGame={handleStartGame}
      onContinueGame={handleContinueGame}
    />
  );
}
