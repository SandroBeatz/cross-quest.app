'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Target,
  Sparkles,
  Trophy,
  Lightbulb,
  Users,
  Zap,
  Grid3X3,
  Clock,
  TrendingUp,
  Shield,
  Gamepad2,
  Puzzle,
  Calculator,
  Map,
  Hash,
  BookOpen,
  Rocket,
  CheckCircle2,
} from 'lucide-react';

const MotionDiv = motion.div as any;

const About: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 rounded-full text-orange-600 font-black text-xs uppercase tracking-widest mb-6 border border-orange-200">
            <Sparkles className="w-4 h-4" />О проекте
          </div>
          <h1 className="text-5xl md:text-6xl font-game font-bold text-stone-800 leading-tight mb-6">
            Умняут — платформа <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              интеллектуальных игр
            </span>
          </h1>
          <p className="text-xl text-stone-600 font-medium leading-relaxed max-w-3xl mx-auto">
            Веб-платформа для любителей головоломок и интеллектуальных игр на русском языке. Начиная
            с классических кроссвордов, мы расширяемся до полноценной экосистемы игр на логику и
            мышление.
          </p>
        </MotionDiv>
      </section>

      {/* Mission Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <MotionDiv
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-game font-bold text-stone-800 leading-tight">Наша миссия</h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Мы создаём платформу, которая помогает развивать интеллект и получать удовольствие от
            решения головоломок. Умняут — это не просто игра, это тренажёр для вашего мозга, который
            адаптируется под ваши интересы и уровень знаний.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-xl border border-emerald-100">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span className="font-bold text-sm text-emerald-700">Развитие интеллекта</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-xl border border-blue-100">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span className="font-bold text-sm text-blue-700">Удовольствие от игры</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-xl border border-purple-100">
              <CheckCircle2 className="w-5 h-5 text-purple-600" />
              <span className="font-bold text-sm text-purple-700">Персонализация</span>
            </div>
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-12 aspect-square flex items-center justify-center shadow-2xl">
            <Brain className="w-full h-full text-white/10 absolute rotate-12" />
            <div className="relative z-10 grid grid-cols-2 gap-4 w-full">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-white text-center">
                <Target className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-black">1,200+</div>
                <div className="text-xs font-bold opacity-90">Игроков</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-white text-center">
                <Grid3X3 className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-black">5,000+</div>
                <div className="text-xs font-bold opacity-90">Кроссвордов</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-white text-center">
                <Zap className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-black">47%</div>
                <div className="text-xs font-bold opacity-90">Рост ЗА месяц</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-white text-center">
                <Trophy className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-black">4.9★</div>
                <div className="text-xs font-bold opacity-90">Рейтинг</div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-game font-bold text-stone-800 mb-4">
            Что делает Умняут <span className="text-orange-500">особенным?</span>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Мы объединили лучшие практики геймификации с научным подходом к развитию интеллекта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Brain,
              bgColor: 'bg-blue-100',
              iconColor: 'text-blue-600',
              title: 'Тренировка мозга',
              description:
                'Научно доказано: 15 минут в день повышают когнитивные способности на 30%',
            },
            {
              icon: Target,
              bgColor: 'bg-orange-100',
              iconColor: 'text-orange-600',
              title: 'Персонализация',
              description: 'Кроссворды адаптируются под ваши интересы и уровень сложности',
            },
            {
              icon: TrendingUp,
              bgColor: 'bg-emerald-100',
              iconColor: 'text-emerald-600',
              title: 'Система прогрессии',
              description: 'Отслеживайте свой рост, зарабатывайте очки и повышайте уровень',
            },
            {
              icon: Zap,
              bgColor: 'bg-amber-100',
              iconColor: 'text-amber-600',
              title: 'Ударный режим',
              description: 'Играйте каждый день и получайте бонусы за серии',
            },
            {
              icon: Shield,
              bgColor: 'bg-purple-100',
              iconColor: 'text-purple-600',
              title: 'Облачное хранение',
              description: 'Ваш прогресс синхронизируется между всеми устройствами',
            },
            {
              icon: Users,
              bgColor: 'bg-pink-100',
              iconColor: 'text-pink-600',
              title: 'Сообщество',
              description: 'Присоединяйтесь к тысячам игроков и делитесь достижениями',
            },
          ].map((feature, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-4`}
              >
                <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-black text-stone-800 mb-2">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed">{feature.description}</p>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Gamification Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-12 border border-slate-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-game font-bold text-stone-800 mb-4">
            Система <span className="text-orange-500">геймификации</span>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Мы превратили обучение в увлекательное приключение с наградами и достижениями
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-black text-stone-800">Очки (XP)</h3>
            <p className="text-stone-600">
              Зарабатывайте очки за правильные ответы, скорость и точность. Бонусы за безошибочность
              +30%!
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-gradient-to-br from-purple-400 to-pink-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-black text-stone-800">Уровни</h3>
            <p className="text-stone-600">
              Повышайте уровень и открывайте новые темы, эксклюзивные аватары и специальные
              челленджи
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-gradient-to-br from-red-400 to-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
              <Zap className="w-10 h-10 text-white fill-white" />
            </div>
            <h3 className="text-2xl font-black text-stone-800">Ударный режим 🔥</h3>
            <p className="text-stone-600">
              Решайте минимум 1 кроссворд в день. Награды за 7, 30, 100 и 365 дней подряд!
            </p>
          </div>
        </div>
      </section>

      {/* Future Games Section */}
      <section className="space-y-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-50 rounded-full text-purple-600 font-black text-xs uppercase tracking-widest mb-4 border border-purple-200">
            <Rocket className="w-4 h-4" />
            Будущие игры
          </div>
          <h2 className="text-4xl font-game font-bold text-stone-800 mb-4">
            Это только <span className="text-orange-500">начало</span>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Скоро на платформе появятся новые виды головоломок и интеллектуальных игр
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { icon: Puzzle, name: 'Судоку', bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
            {
              icon: Calculator,
              name: 'Числовые головоломки',
              bgColor: 'bg-green-100',
              iconColor: 'text-green-600',
            },
            {
              icon: Target,
              name: 'Логические задачи',
              bgColor: 'bg-purple-100',
              iconColor: 'text-purple-600',
            },
            { icon: Hash, name: 'Анаграммы', bgColor: 'bg-pink-100', iconColor: 'text-pink-600' },
            {
              icon: Map,
              name: 'Словесные ассоциации',
              bgColor: 'bg-amber-100',
              iconColor: 'text-amber-600',
            },
          ].map((game, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:scale-105"
            >
              <div
                className={`w-16 h-16 ${game.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3`}
              >
                <game.icon className={`w-8 h-8 ${game.iconColor}`} />
              </div>
              <h3 className="font-black text-sm text-stone-800">{game.name}</h3>
              <div className="text-xs text-stone-400 mt-2 font-bold">СКОРО</div>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="bg-stone-800 rounded-3xl p-12 text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-game font-bold mb-4">Наш путь развития</h2>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto">
            Мы постоянно улучшаем платформу и добавляем новые функции
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-emerald-500 w-10 h-10 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black">MVP (v1.0)</h3>
            </div>
            <div className="space-y-3 pl-13">
              {['Кроссворды', 'Базовая геймификация', 'localStorage прогресс'].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-stone-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-500 w-10 h-10 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black">v1.1</h3>
            </div>
            <div className="space-y-3 pl-13">
              {['Регистрация через Google', 'Расширенная аналитика', 'Таблица лидеров'].map(
                (item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-blue-400 rounded shrink-0 mt-0.5" />
                    <span className="text-stone-300">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-500 w-10 h-10 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black">v2.0</h3>
            </div>
            <div className="space-y-3 pl-13">
              {['Новые типы игр', 'Социальные функции', 'Премиум подписка'].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 border-2 border-purple-400 rounded shrink-0 mt-0.5" />
                  <span className="text-stone-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-game font-bold text-stone-800">
            Философия <span className="text-orange-500">дизайна</span>
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Умняут создан с заботой о пользователях. Мы используем современный минималистичный
            дизайн, который не отвлекает от главного — игры и развития интеллекта.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-xl shrink-0">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-black text-stone-800 mb-1">Современный</h4>
                <p className="text-stone-600 text-sm">
                  Чистые линии, минимализм и много воздуха для комфортного восприятия
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-xl shrink-0">
                <Gamepad2 className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="font-black text-stone-800 mb-1">Игровой</h4>
                <p className="text-stone-600 text-sm">
                  Элементы геймификации делают процесс обучения увлекательным
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 p-3 rounded-xl shrink-0">
                <BookOpen className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-black text-stone-800 mb-1">Дружелюбный</h4>
                <p className="text-stone-600 text-sm">
                  Зрелый, но не скучный. Подходит для всех возрастов
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
          <h3 className="text-2xl font-black text-stone-800 mb-6">Цветовая палитра</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl shadow-lg" />
              <div>
                <div className="font-bold text-stone-800">Primary Blue</div>
                <div className="text-sm text-stone-500">Доверие и интеллект</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl shadow-lg" />
              <div>
                <div className="font-bold text-stone-800">Amber</div>
                <div className="text-sm text-stone-500">Энергия и достижения</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl shadow-lg" />
              <div>
                <div className="font-bold text-stone-800">Emerald</div>
                <div className="text-sm text-stone-500">Правильные ответы</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl shadow-lg" />
              <div>
                <div className="font-bold text-stone-800">Purple</div>
                <div className="text-sm text-stone-500">Премиум элементы</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-12 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-game font-bold mb-4">
            Начни своё интеллектуальное путешествие
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Присоединяйся к сообществу Умняута и развивай свой интеллект каждый день!
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <Grid3X3 className="absolute top-8 left-8 w-32 h-32 rotate-12" />
          <Brain className="absolute bottom-8 right-8 w-40 h-40 -rotate-12" />
          <Sparkles className="absolute top-1/2 left-1/4 w-24 h-24" />
        </div>
      </section>
    </div>
  );
};

export default About;
