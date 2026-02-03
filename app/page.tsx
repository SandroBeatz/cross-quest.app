'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from './AppContext';
import Landing from '@/components/Landing';
import Layout from '@/components/Layout';

export default function HomePage() {
  const { profile } = useAppContext();
  const router = useRouter();

  const handleStart = () => {
    if (profile) {
      router.push('/dashboard');
    } else {
      router.push('/onboarding');
    }
  };

  return (
    <Layout
      stats={profile?.stats}
      username={profile?.username}
      onLogoClick={() => router.push('/')}
      onAccountClick={() => router.push('/dashboard')}
    >
      <Landing isLoggedIn={!!profile} onStart={handleStart} />
    </Layout>
  );
}
