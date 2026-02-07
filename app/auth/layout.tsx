import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-orange-50 text-stone-800">
      <main className="min-h-screen flex items-center justify-center">{children}</main>
    </div>
  );
}
