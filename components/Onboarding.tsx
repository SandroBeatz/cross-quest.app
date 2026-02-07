'use client';

import React, { useState, useEffect } from 'react';
import { Category, AgeGroupKey, AGE_GROUPS, AGE_CATEGORY_MAP } from '../types';
import { fetchCategories } from '../crosswordApi';
import {
  BrainCircuit,
  Sparkles,
  Book,
  History,
  Palette,
  Film,
  Cpu,
  Globe,
  Trophy,
  Music,
  Leaf,
  Utensils,
  FlaskConical,
  ArrowLeft,
  RefreshCw,
  AlertTriangle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;

export interface OnboardingData {
  username: string;
  ageGroup: AgeGroupKey;
  defaultDifficulty: 'easy' | 'medium' | 'hard';
  categories: string[];
}

interface OnboardingProps {
  onComplete: (data: OnboardingData) => void;
  onCancel: () => void;
}

const CATEGORY_ICONS: Record<string, any> = {
  Наука: FlaskConical,
  История: History,
  Искусство: Palette,
  Кино: Film,
  'Кино и культура': Film,
  Технологии: Cpu,
  География: Globe,
  Спорт: Trophy,
  Литература: Book,
  Музыка: Music,
  Еда: Utensils,
  Природа: Leaf,
  'Природа и садоводство': Leaf,
  Кулинария: Utensils,
  Экономика: BrainCircuit,
  Право: Book,
  Политика: Globe,
  Животные: Sparkles,
  'Цвета и формы': Palette,
  Транспорт: Cpu,
  Творчество: Palette,
  'Советское кино': Film,
  'Классическая литература': Book,
  'Классическая музыка': Music,
  'История СССР/России': History,
  'Садоводство и огородничество': Leaf,
  'Живопись и скульптура': Palette,
};

const DIFFICULTY_OPTIONS = [
  {
    value: 'easy' as const,
    label: 'Лёгкий',
    emoji: '🟢',
    description: 'Простые слова, подсказки всегда доступны',
    color: 'from-emerald-500 to-green-500',
    border: 'border-emerald-700',
  },
  {
    value: 'medium' as const,
    label: 'Средний',
    emoji: '🟡',
    description: 'Баланс вызова и удовольствия',
    color: 'from-amber-500 to-yellow-500',
    border: 'border-amber-700',
  },
  {
    value: 'hard' as const,
    label: 'Сложный',
    emoji: '🔴',
    description: 'Продвинутый словарь, минимум подсказок',
    color: 'from-red-500 to-rose-500',
    border: 'border-red-700',
  },
];

// Резервный список на случай ошибки сервера
const FALLBACK_CATEGORIES: Category[] = [
  { name: 'Наука', word_count: 150 },
  { name: 'История', word_count: 200 },
  { name: 'Технологии', word_count: 120 },
  { name: 'Спорт', word_count: 180 },
];

type Step = 1 | 2 | 3 | 4;
const TOTAL_STEPS = 4;

const Onboarding: React.FC<OnboardingProps> = ({ onComplete, onCancel }) => {
  const [step, setStep] = useState<Step>(1);
  const [username, setUsername] = useState('');
  const [ageGroup, setAgeGroup] = useState<AgeGroupKey | null>(null);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [selected, setSelected] = useState<string[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const loadCategories = async () => {
    setLoading(true);
    setError(false);
    try {
      const cats = await fetchCategories();
      setCategories(cats);
    } catch (err) {
      console.error('Could not load categories from API, using fallback', err);
      setError(true);
      setCategories(FALLBACK_CATEGORIES);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (step === 4) loadCategories();
  }, [step]);

  // Filter categories by age group
  const filteredCategories = ageGroup
    ? categories.filter((cat) => {
        const allowedNames = AGE_CATEGORY_MAP[ageGroup];
        return allowedNames.includes(cat.name);
      })
    : categories;

  const toggleCategory = (cat: string) => {
    setSelected((prev) => (prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]));
  };

  const isStepValid = (): boolean => {
    switch (step) {
      case 1: return username.trim().length > 0;
      case 2: return ageGroup !== null;
      case 3: return true; // difficulty always has a value
      case 4: return selected.length > 0 && !loading;
    }
  };

  const handleNext = () => {
    if (!isStepValid()) return;
    if (step < TOTAL_STEPS) {
      setStep((step + 1) as Step);
    } else {
      onComplete({
        username,
        ageGroup: ageGroup!,
        defaultDifficulty: difficulty,
        categories: selected,
      });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((step - 1) as Step);
    } else {
      onCancel();
    }
  };

  const buttonLabel = (): string => {
    if (step === TOTAL_STEPS) return 'Начать игру';
    return 'Далее';
  };

  const ageGroupKeys = Object.keys(AGE_GROUPS) as AgeGroupKey[];

  return (
    <div className="min-h-screen bg-orange-500 flex items-center justify-center p-4 sm:p-6 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-400 via-orange-500 to-amber-600 overflow-y-auto">
      <MotionDiv
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-4xl w-full bg-white rounded-[3rem] shadow-[0_32px_64px_rgba(0,0,0,0.4)] overflow-hidden p-8 sm:p-12 text-center relative border-b-[12px] border-orange-200/50 my-8"
      >
        <button
          onClick={handleBack}
          className="absolute top-8 left-8 p-4 bg-slate-50 text-slate-400 rounded-2xl hover:bg-slate-100 transition-all"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        {/* Step indicator */}
        <div className="flex justify-center gap-2 mb-4">
          {Array.from({ length: TOTAL_STEPS }, (_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i + 1 <= step ? 'w-8 bg-orange-500' : 'w-4 bg-slate-200'
              }`}
            />
          ))}
        </div>

        <div className="flex justify-center mb-6">
          <MotionDiv
            animate={{ y: [0, -8, 0], rotate: [0, -3, 3, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="w-24 h-24 rounded-[2rem] shadow-2xl overflow-hidden"
          >
            <img src="/logo.png" alt="Умняут" className="w-full h-full object-cover" />
          </MotionDiv>
        </div>

        <AnimatePresence mode="wait">
          {/* Step 1: Username */}
          {step === 1 && (
            <MotionDiv
              key="step1"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-3xl sm:text-4xl font-game font-bold text-stone-800 mb-2">
                  Привет! Я Умняут!
                </h1>
                <p className="text-stone-500 font-medium">Как тебя зовут?</p>
              </div>

              <div className="relative max-w-sm mx-auto">
                <input
                  autoFocus
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                  placeholder="Твое имя..."
                  className="w-full bg-slate-50 border-4 border-slate-100 rounded-3xl px-8 py-6 text-2xl font-black text-stone-800 outline-none focus:border-orange-400 transition-all text-center"
                />
              </div>

              <div className="max-w-md mx-auto space-y-3">
                <div className="flex items-start gap-3 bg-sky-50 rounded-2xl p-4 border border-sky-100">
                  <span className="text-lg">📌</span>
                  <p className="text-sm text-sky-700 font-medium">
                    Ваш прогресс сохраняется в браузере
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-amber-50 rounded-2xl p-4 border border-amber-100">
                  <span className="text-lg">💡</span>
                  <p className="text-sm text-amber-700 font-medium">
                    Хотите играть на разных устройствах? Скоро можно будет создать аккаунт!
                  </p>
                </div>
              </div>
            </MotionDiv>
          )}

          {/* Step 2: Age Group */}
          {step === 2 && (
            <MotionDiv
              key="step2"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-3xl sm:text-4xl font-game font-bold text-stone-800 mb-2">
                  Сколько тебе лет?
                </h1>
                <p className="text-stone-500 font-medium">
                  Это поможет подобрать подходящие слова и темы
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto">
                {ageGroupKeys.map((key, i) => {
                  const group = AGE_GROUPS[key];
                  const isSelected = ageGroup === key;

                  return (
                    <MotionDiv
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <MotionButton
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => setAgeGroup(key)}
                        className={`
                          w-full p-4 sm:p-5 rounded-2xl transition-all text-left
                          ${
                            isSelected
                              ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-200'
                              : 'bg-white border-2 border-slate-100 hover:border-orange-200 hover:shadow-md'
                          }
                        `}
                      >
                        <div
                          className={`font-black text-base sm:text-lg ${isSelected ? 'text-white' : 'text-stone-800'}`}
                        >
                          {group.label}
                        </div>
                        <div
                          className={`text-[10px] sm:text-xs font-medium mt-1 ${isSelected ? 'text-white/80' : 'text-slate-400'}`}
                        >
                          {group.description}
                        </div>
                      </MotionButton>
                    </MotionDiv>
                  );
                })}
              </div>

              <div className="flex items-start gap-3 bg-sky-50 rounded-2xl p-4 border border-sky-100 max-w-md mx-auto">
                <span className="text-lg">💡</span>
                <p className="text-sm text-sky-700 font-medium">
                  Можно изменить в любой момент в настройках
                </p>
              </div>
            </MotionDiv>
          )}

          {/* Step 3: Default Difficulty */}
          {step === 3 && (
            <MotionDiv
              key="step3"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-3xl sm:text-4xl font-game font-bold text-stone-800 mb-2">
                  Какой уровень предпочитаешь?
                </h1>
                <p className="text-stone-500 font-medium">
                  Можно изменить в любой момент в настройках
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                {DIFFICULTY_OPTIONS.map((opt, i) => {
                  const isSelected = difficulty === opt.value;

                  return (
                    <MotionDiv
                      key={opt.value}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex-1"
                    >
                      <MotionButton
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => setDifficulty(opt.value)}
                        className={`
                          w-full p-5 sm:p-6 rounded-2xl transition-all text-center
                          ${
                            isSelected
                              ? `bg-gradient-to-b ${opt.color} text-white shadow-lg border-b-4 ${opt.border}`
                              : 'bg-white border-2 border-slate-100 hover:border-orange-200 hover:shadow-md'
                          }
                        `}
                      >
                        <div className="text-3xl mb-2">{opt.emoji}</div>
                        <div
                          className={`font-black text-lg ${isSelected ? 'text-white' : 'text-stone-800'}`}
                        >
                          {opt.label}
                        </div>
                        <div
                          className={`text-[10px] sm:text-xs font-medium mt-1 ${isSelected ? 'text-white/80' : 'text-slate-400'}`}
                        >
                          {opt.description}
                        </div>
                      </MotionButton>
                    </MotionDiv>
                  );
                })}
              </div>
            </MotionDiv>
          )}

          {/* Step 4: Categories */}
          {step === 4 && (
            <MotionDiv
              key="step4"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-3xl sm:text-4xl font-game font-bold text-stone-800 mb-2">
                  Мяу, {username}! Отличное имя!
                </h1>
                <p className="text-stone-500 font-medium">Выбери темы, которые тебе интересны</p>
              </div>

              {loading ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-pulse">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="h-24 bg-slate-100 rounded-2xl" />
                  ))}
                </div>
              ) : (
                <>
                  {error && (
                    <div className="flex items-center gap-2 justify-center bg-amber-50 text-amber-700 p-3 rounded-xl border border-amber-100 mb-4 text-xs font-bold">
                      <AlertTriangle className="w-4 h-4" />
                      Сервер временно недоступен. Используем базовые категории.
                    </div>
                  )}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {filteredCategories.map((cat) => {
                      const isSelected = selected.includes(cat.name);
                      const Icon = CATEGORY_ICONS[cat.name] || Sparkles;

                      return (
                        <MotionButton
                          key={cat.name}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.96 }}
                          onClick={() => toggleCategory(cat.name)}
                          className={`
                            p-4 rounded-[2rem] border-4 transition-all flex flex-col items-center justify-center gap-2 relative
                            ${
                              isSelected
                                ? 'border-orange-500 bg-orange-50 shadow-lg'
                                : 'border-slate-50 bg-slate-50 hover:bg-white hover:border-orange-100'
                            }
                          `}
                        >
                          <div
                            className={`p-3 rounded-2xl transition-colors ${isSelected ? 'bg-orange-500 text-white' : 'bg-slate-200 text-slate-400'}`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <span
                            className={`font-black text-[10px] uppercase tracking-wider ${isSelected ? 'text-orange-700' : 'text-slate-500'}`}
                          >
                            {cat.name}
                          </span>
                          <div className="w-full mt-1">
                            <div className="flex justify-between text-[8px] font-bold mb-1">
                              <span className={isSelected ? 'text-orange-400' : 'text-slate-400'}>
                                {cat.guessed_percent || 0}%
                              </span>
                            </div>
                            <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all ${isSelected ? 'bg-indigo-500' : 'bg-slate-300'}`}
                                style={{ width: `${cat.guessed_percent || 0}%` }}
                              />
                            </div>
                          </div>
                        </MotionButton>
                      );
                    })}
                  </div>
                  {error && (
                    <button
                      onClick={loadCategories}
                      className="mt-4 flex items-center gap-2 mx-auto bg-slate-100 text-slate-600 px-6 py-2 rounded-full font-bold text-xs hover:bg-slate-200 transition-all"
                    >
                      <RefreshCw className="w-3.5 h-3.5" /> Попробовать восстановить связь
                    </button>
                  )}
                </>
              )}
            </MotionDiv>
          )}
        </AnimatePresence>

        <div className="mt-12">
          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            disabled={!isStepValid()}
            className={`
              w-full sm:w-auto px-16 py-6 rounded-3xl font-black text-xl transition-all shadow-xl uppercase tracking-widest
              ${
                isStepValid()
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white border-b-8 border-orange-700'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed border-b-8 border-slate-300'
              }
            `}
          >
            {buttonLabel()}
          </MotionButton>
        </div>
      </MotionDiv>
    </div>
  );
};

export default Onboarding;
