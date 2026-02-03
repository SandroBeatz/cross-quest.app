'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext, INITIAL_STATS } from '../AppContext';
import Onboarding from '@/components/Onboarding';
import Layout from '@/components/Layout';
import { UserProfile } from '@/types';

export default function OnboardingPage() {
  const { profile, saveProfile, loading } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading && profile) {
      router.push('/dashboard');
    }
  }, [profile, loading, router]);

  const handleOnboardingComplete = (data: { username: string; categories: string[] }) => {
    const newProfile: UserProfile = {
      username: data.username,
      selectedCategories: data.categories,
      themeProgress: data.categories.reduce((acc, cat) => {
        acc[cat] = { completedWords: [], totalWords: 100 };
        return acc;
      }, {} as any),
      stats: INITIAL_STATS,
      history: [],
      solvedCrosswordIds: [],
    };
    saveProfile(newProfile);
    router.push('/dashboard');
  };

  const handleCancel = () => {
    router.push('/');
  };

  if (loading || profile) {
    return null;
  }

  return (
    <Layout onLogoClick={() => router.push('/')} onAccountClick={() => {}}>
      <Onboarding onComplete={handleOnboardingComplete} onCancel={handleCancel} />
    </Layout>
  );
}
