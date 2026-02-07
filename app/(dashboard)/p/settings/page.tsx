'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '../../../AppContext';
import Settings from '@/components/Settings';

export default function SettingsPage() {
  const { profile, saveProfile } = useAppContext();
  const router = useRouter();

  if (!profile) {
    return null;
  }

  const handleSave = (updated: any) => {
    saveProfile(updated);
    router.push('/p/dashboard');
  };

  return <Settings profile={profile} onSave={handleSave} />;
}
