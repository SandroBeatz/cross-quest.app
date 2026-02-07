'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '../AppContext';
import Contact from '@/components/Contact';
import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar';

export default function ContactPage() {
  const { profile } = useAppContext();
  const router = useRouter();

  // For logged-in users, show sidebar
  if (profile) {
    return (
      <>
        <Sidebar
          activeView="CONTACT"
          onViewChange={(view) => {
            if (view === 'SETTINGS') router.push('/settings');
            if (view === 'DASHBOARD') router.push('/dashboard');
            if (view === 'ABOUT') router.push('/about');
            if (view === 'CONTACT') router.push('/contact');
          }}
          onLogoClick={() => router.push('/')}
          onAccountClick={() => router.push('/settings')}
          avatar={profile.avatar}
        />
        <Layout stats={profile.stats}>
          <Contact />
        </Layout>
      </>
    );
  }

  // For non-logged-in users, show simple layout without sidebar
  return (
    <div className="min-h-screen bg-orange-50 text-stone-800">
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-12">
        <Contact />
      </main>
    </div>
  );
}
