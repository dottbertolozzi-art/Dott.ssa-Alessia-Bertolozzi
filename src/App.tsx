import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, CheckCircle2, AlertCircle, Info, ArrowRight, Mail, Heart, Activity, Zap, Droplets, Leaf } from 'lucide-react';
import { QUESTIONS, PROFILES } from './constants';
import { Question, Profile } from './types';

type Screen = 'START' | 'QUIZ' | 'EMAIL' | 'CALCULATING' | 'RESULT';

export default function App() {
  const [screen, setScreen] = useState<Screen>('START');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [email, setEmail] = useState('');
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const progress = useMemo(() => {
    return ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;
  }, [currentQuestionIndex]);

  const totalScore = useMemo(() => {
    return Object.values(answers).reduce((acc: number, val: number) => acc + val, 0);
  }, [answers]);

  const resultProfile = useMemo(() => {
    return PROFILES.find(p => totalScore >= p.minScore && totalScore <= p.maxScore) || PROFILES[PROFILES.length - 1];
  }, [totalScore]);

  const handleStart = () => setScreen('QUIZ');

  const handleAnswer = (value: number) => {
    const questionId = QUESTIONS[currentQuestionIndex].id;
    setAnswers(prev => ({ ...prev, [questionId]: value }));

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setScreen('EMAIL');
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else {
      setScreen('START');
    }
  };

  const showResult = () => {
    setScreen('CALCULATING');
    setTimeout(() => {
      setScreen('RESULT');
    }, 2500);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsEmailSubmitted(true);
    showResult();
    
    // Preparazione dati per il Webhook (Google Sheets via Apps Script)
    const payload = {
      timestamp: new Date().toLocaleString('it-IT'),
      email: email,
      score: totalScore,
      profile: resultProfile.name,
      profileDetails: {
        messaggio: resultProfile.message,
        descrizione: resultProfile.description,
        cosaStaSuccedendo: resultProfile.whatIsHappening,
        percheFallito: resultProfile.whyPastAttemptsFailed,
        cosaServe: resultProfile.whatIsNeeded
      },
      answers: QUESTIONS.map(q => {
        const value = answers[q.id];
        const option = q.options?.find(o => o.value === value) || 
                       [
                         { label: 'Mai', value: 0 },
                         { label: 'A volte', value: 1 },
                         { label: 'Spesso', value: 2 }
                       ].find(o => o.value === value);
        
        return {
          domanda: q.text,
          risposta: option?.label || 'N/A'
        };
      })
    };

    /**
     * CONFIGURAZIONE GOOGLE SHEETS:
     * URL del Google Apps Script configurato dall'utente.
     */
    const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwWpE5qA2qo4mqGijoKPXv5A334MDMPq2bRGHNX0-ETHa7PmYluPobYUzA4LHftFjiPkg/exec';

    if (WEBHOOK_URL) {
      try {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors', // Importante per Google Apps Script
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        console.log('Dati inviati con successo al foglio Google');
      } catch (error) {
        console.error('Errore nell\'invio dei dati:', error);
      }
    } else {
      console.log('Webhook non configurato. Dati pronti per l\'invio:', payload);
    }
  };

  const skipEmail = () => showResult();

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D3436] font-sans selection:bg-[#E2F1E7]">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        <AnimatePresence mode="wait">
          {screen === 'START' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-8"
            >
              <div className="inline-flex items-center justify-center p-3 bg-[#E2F1E7] rounded-full mb-4">
                <Leaf className="w-8 h-8 text-[#4A7C59]" />
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1D1E]">
                  A che punto è il tuo <span className="text-[#4A7C59]">equilibrio ormonale</span>?
                </h1>
                <p className="text-xl text-[#636E72] max-w-lg mx-auto leading-relaxed">
                  Scopri cosa sta succedendo davvero nel tuo corpo e da dove partire per rimetterlo in equilibrio.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#F0EBE3] text-left space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-[#FDFBF7] rounded-md">
                    <Info className="w-4 h-4 text-[#4A7C59]" />
                  </div>
                  <p className="text-sm text-[#636E72]">
                    Questo non è un test diagnostico, ma uno strumento di orientamento basato su nutrizione funzionale e fisiologia.
                  </p>
                </div>
              </div>

              <button
                onClick={handleStart}
                className="w-full md:w-auto px-10 py-4 bg-[#4A7C59] text-white rounded-full font-semibold text-lg shadow-lg shadow-[#4A7C59]/20 hover:bg-[#3D6649] transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mx-auto"
              >
                Inizia il test
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {screen === 'QUIZ' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#4A7C59]">
                    Area: {QUESTIONS[currentQuestionIndex].area}
                  </span>
                  <span className="text-sm font-medium text-[#636E72]">
                    {currentQuestionIndex + 1} di {QUESTIONS.length}
                  </span>
                </div>
                <div className="h-2 w-full bg-[#F0EBE3] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#4A7C59]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1D1E] leading-tight">
                  {QUESTIONS[currentQuestionIndex].text}
                </h2>

                <div className="grid gap-4">
                  {(QUESTIONS[currentQuestionIndex].options || [
                    { label: 'Mai', value: 0 },
                    { label: 'A volte', value: 1 },
                    { label: 'Spesso', value: 2 }
                  ]).map((option) => (
                    <button
                      key={option.label}
                      onClick={() => handleAnswer(option.value)}
                      className="group relative w-full p-5 text-left bg-white border-2 border-[#F0EBE3] rounded-2xl hover:border-[#4A7C59] hover:bg-[#FDFBF7] transition-all flex items-center justify-between"
                    >
                      <span className="text-lg font-medium text-[#2D3436] group-hover:text-[#4A7C59]">
                        {option.label}
                      </span>
                      <div className="w-6 h-6 rounded-full border-2 border-[#F0EBE3] group-hover:border-[#4A7C59] flex items-center justify-center transition-colors">
                        <div className="w-3 h-3 rounded-full bg-[#4A7C59] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-[#636E72] hover:text-[#2D3436] font-medium transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                Indietro
              </button>
            </motion.div>
          )}

          {screen === 'EMAIL' && (
            <motion.div
              key="email"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="text-center space-y-8"
            >
              <div className="inline-flex items-center justify-center p-3 bg-[#E2F1E7] rounded-full mb-4">
                <Mail className="w-8 h-8 text-[#4A7C59]" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-[#1A1D1E]">Ci siamo quasi!</h2>
                <p className="text-lg text-[#636E72] max-w-md mx-auto">
                  Inserisci la tua email per ricevere il risultato dettagliato e una guida ai primi passi per il tuo equilibrio.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-4 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="La tua email migliore"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 bg-white border-2 border-[#F0EBE3] rounded-2xl focus:border-[#4A7C59] focus:outline-none transition-all text-lg"
                />
                <button
                  type="submit"
                  className="w-full py-4 bg-[#4A7C59] text-white rounded-full font-semibold text-lg shadow-lg hover:bg-[#3D6649] transition-all"
                >
                  Scopri il mio profilo
                </button>
                <button
                  type="button"
                  onClick={skipEmail}
                  className="text-sm text-[#636E72] hover:underline"
                >
                  Voglio solo vedere il risultato
                </button>
              </form>
            </motion.div>
          )}

          {screen === 'CALCULATING' && (
            <motion.div
              key="calculating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center space-y-8 py-20"
            >
              <div className="relative w-24 h-24 mx-auto">
                <motion.div
                  className="absolute inset-0 border-4 border-[#E2F1E7] rounded-full"
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: 1 }}
                  transition={{ repeat: Infinity, duration: 1, repeatType: 'reverse' }}
                />
                <motion.div
                  className="absolute inset-0 border-4 border-t-[#4A7C59] rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Activity className="w-8 h-8 text-[#4A7C59]" />
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-[#1A1D1E]">Analisi in corso...</h2>
                <div className="space-y-1">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-[#636E72]"
                  >
                    Stiamo elaborando le tue risposte
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-[#636E72] text-sm italic"
                  >
                    Identificando il tuo profilo ormonale...
                  </motion.p>
                </div>
              </div>
            </motion.div>
          )}

          {screen === 'RESULT' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-10"
            >
              <div className={`p-8 rounded-3xl border-2 ${resultProfile.color} space-y-6`}>
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest opacity-70">Il tuo profilo è:</span>
                  <h2 className="text-3xl font-bold leading-tight">{resultProfile.name}</h2>
                </div>
                <p className="text-lg font-medium italic">
                  “{resultProfile.message}”
                </p>
                <p className="text-base leading-relaxed opacity-90">
                  {resultProfile.description}
                </p>
              </div>

              <div className="space-y-8">
                <section className="space-y-4">
                  <div className="flex items-center gap-3 text-[#4A7C59]">
                    <Activity className="w-6 h-6" />
                    <h3 className="text-xl font-bold">Cosa sta succedendo nel tuo corpo</h3>
                  </div>
                  <p className="text-[#636E72] leading-relaxed">
                    {resultProfile.whatIsHappening}
                  </p>
                </section>

                <section className="space-y-4">
                  <div className="flex items-center gap-3 text-[#4A7C59]">
                    <AlertCircle className="w-6 h-6" />
                    <h3 className="text-xl font-bold">Perché i tentativi fatti finora potrebbero non aver funzionato</h3>
                  </div>
                  <p className="text-[#636E72] leading-relaxed">
                    {resultProfile.whyPastAttemptsFailed}
                  </p>
                </section>

                <section className="space-y-4">
                  <div className="flex items-center gap-3 text-[#4A7C59]">
                    <Zap className="w-6 h-6" />
                    <h3 className="text-xl font-bold">Cosa ti servirebbe ora</h3>
                  </div>
                  <p className="text-[#636E72] leading-relaxed">
                    {resultProfile.whatIsNeeded}
                  </p>
                </section>
              </div>

              <div className="pt-8 border-t border-[#F0EBE3] space-y-6 text-center">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#1A1D1E]">Il prossimo passo verso il tuo equilibrio</h3>
                  <p className="text-[#636E72]">
                    Prenota una chiamata preliminare gratuita di 15 minuti. Analizzeremo insieme il tuo profilo per capire come impostare un percorso di nutrizione funzionale su misura per te.
                  </p>
                </div>
                <button
                  onClick={() => window.open('https://calendly.com/dott-bertolozzi/chiamatapreliminare', '_blank')}
                  className="w-full md:w-auto px-10 py-4 bg-[#4A7C59] text-white rounded-full font-semibold text-lg shadow-lg hover:bg-[#3D6649] transition-all flex items-center justify-center gap-2 mx-auto"
                >
                  Prenota la chiamata gratuita
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={() => {
                  setScreen('START');
                  setCurrentQuestionIndex(0);
                  setAnswers({});
                }}
                className="w-full text-[#636E72] hover:text-[#2D3436] text-sm font-medium transition-colors"
              >
                Ricomincia il test
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <footer className="max-w-2xl mx-auto px-6 pb-12 text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-[#4A7C59]/60">
          <Heart className="w-4 h-4 fill-current" />
          <span className="text-xs font-medium uppercase tracking-widest">Nutrizione Funzionale & Fisiologia</span>
        </div>
        <p className="text-[10px] text-[#636E72]/50 uppercase tracking-tighter">
          © {new Date().getFullYear()} • Questo test non sostituisce il parere medico.
        </p>
      </footer>
    </div>
  );
}
