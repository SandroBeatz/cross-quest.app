'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Landing from '@/components/Landing';

export default function HomePage() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/auth/onboarding');
  };

  return <Landing isLoggedIn={false} onStart={handleStart} />;
}
