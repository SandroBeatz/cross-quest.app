'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function GamesPage() {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-game font-bold text-stone-800 mb-6">
        Доступные игры
      </h1>

      <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
        <div className="space-y-6">
          <div className="border-l-4 border-orange-500 pl-4">
            <h2 className="text-2xl font-bold text-stone-800 mb-2">🧩 Кроссворды</h2>
            <p className="text-stone-600 mb-4">
              Решайте увлекательные кроссворды на различные темы. Выбирайте уровень сложности и
              прокачивайте свои навыки!
            </p>
            <button
              onClick={() => router.push('/p/dashboard')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              К дашборду
            </button>
          </div>

          <div className="text-stone-500 text-center py-8">
            <p>Больше игр скоро появится!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
