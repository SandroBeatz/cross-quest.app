import React from 'react';
import Header from '@/components/Header';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-orange-50 text-stone-800">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-12">{children}</main>
    </div>
  );
}
