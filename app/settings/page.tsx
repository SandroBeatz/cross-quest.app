'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '../AppContext';
import Settings from '@/components/Settings';
import Layout from '@/components/Layout';
import BottomNav from '@/components/BottomNav';

export default function SettingsPage() {
  const { profile, saveProfile, loading } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !profile) {
      router.push('/');
    }
  }, [profile, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center font-game font-bold text-orange-600">
        Загрузка...
      </div>
    );
  }

  if (!profile) {
    return null;
  }

  const handleSave = (updated: any) => {
    saveProfile(updated);
    router.push('/dashboard');
  };

  return (
    <Layout
      stats={profile.stats}
      username={profile.username}
      onLogoClick={() => router.push('/')}
      onAccountClick={() => router.push('/dashboard')}
    >
      <div className="pb-24">
        <Settings profile={profile} onSave={handleSave} />
      </div>
      <BottomNav
        activeView="SETTINGS"
        onViewChange={(view) => {
          if (view === 'SETTINGS') router.push('/settings');
          if (view === 'DASHBOARD') router.push('/dashboard');
        }}
      />
    </Layout>
  );
}
