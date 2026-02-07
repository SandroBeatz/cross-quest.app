'use client';

import React from 'react';

export default function PolicyPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-game font-bold text-stone-800 mb-6">
        Политика конфиденциальности
      </h1>

      <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 space-y-6 text-stone-700">
        <section>
          <p className="text-sm text-stone-500 mb-4">
            Дата последнего обновления: 7 февраля 2026 года
          </p>
          <p className="leading-relaxed">
            Добро пожаловать на платформу <strong>Умняут</strong> — веб-платформу для любителей
            головоломок и интеллектуальных игр на русском языке. Мы серьёзно относимся к защите
            вашей конфиденциальности и стремимся обеспечить прозрачность в отношении того, какие
            данные мы собираем и как их используем.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-800 mb-3">1. Собираемые данные</h2>

          <h3 className="text-xl font-semibold text-stone-800 mb-2 mt-4">
            1.1. Данные при использовании без регистрации
          </h3>
          <p className="leading-relaxed mb-3">
            Если вы используете платформу без создания аккаунта, мы сохраняем следующую информацию
            локально в вашем браузере (localStorage):
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Имя пользователя (по вашему выбору)</li>
            <li>Игровой прогресс (решённые кроссворды, заработанные очки)</li>
            <li>Статистика игр (время решения, точность, серия ударного режима)</li>
            <li>Игровые настройки (выбранные темы, уровень сложности, звуковые эффекты)</li>
            <li>История игр</li>
          </ul>
          <p className="leading-relaxed mt-3 text-sm text-stone-600">
            ⚠️ <strong>Важно:</strong> Эти данные хранятся только на вашем устройстве и могут быть
            утеряны при очистке кэша браузера. Они не синхронизируются между устройствами.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-800 mb-3">
            2. Как мы используем ваши данные
          </h2>
          <p className="leading-relaxed mb-3">
            Собранные данные используются исключительно для следующих целей:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong>Обеспечение функционала игры:</strong> Сохранение прогресса, отображение
              статистики, персонализация игрового опыта
            </li>
            <li>
              <strong>Улучшение платформы:</strong> Анализ анонимных данных об использовании для
              оптимизации игрового процесса
            </li>
          </ul>
        </section>

        <section className="border-t border-stone-200 pt-6">
          <p className="text-sm text-stone-500 italic">
            Используя платформу «Умняут», вы подтверждаете, что прочитали и поняли эту политику
            конфиденциальности и соглашаетесь с условиями сбора и использования ваших данных,
            описанными выше.
          </p>
        </section>
      </div>
    </div>
  );
}
