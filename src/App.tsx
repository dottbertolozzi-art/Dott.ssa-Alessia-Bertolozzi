import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, CheckCircle2, AlertCircle, Info, ArrowRight, Mail, Heart, Activity, Zap, Droplets } from 'lucide-react';
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
    const scoreProfile = PROFILES.find(p => totalScore >= p.minScore && totalScore <= p.maxScore) || PROFILES[PROFILES.length - 1];
    
    // Regola Clinica: PMA, aborti o infertilità (>6 mesi) portano il profilo minimo a "Squilibrio ormonale reattivo" (ID 4)
    const hasFertilityIssues = answers[16] === 2 || answers[17] === 2 || answers[18] === 2;
    
    if (hasFertilityIssues && scoreProfile.id < 4) {
      return PROFILES.find(p => p.id === 4) || scoreProfile;
    }
    
    return scoreProfile;
  }, [totalScore, answers]);

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
        messaggio: resultProfile.mainMessage,
        significato: resultProfile.meaningNow,
        conseguenze: resultProfile.inactionConsequences,
        miglioramento: resultProfile.improvement,
        prossimoPasso: resultProfile.transition
      },
      answers: QUESTIONS.map(q => {
        const value = answers[q.id];
        const option = q.options?.find(o => o.score === value) || 
                       [
                         { text: 'Mai', score: 0 },
                         { text: 'A volte', score: 1 },
                         { text: 'Spesso', score: 2 }
                       ].find(o => o.score === value);
        
        return {
          domanda: q.text,
          risposta: option?.text || 'N/A'
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
      {/* Header with Logo and Name */}
      <header className="max-w-2xl mx-auto px-6 pt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#E2F1E7] rounded-full overflow-hidden flex items-center justify-center border border-[#4A7C59]/20">
            {/* Placeholder for the logo image */}
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback if logo.png is not found
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="text-[#4A7C59] font-bold text-xl">AB</div>';
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[#1A1D1E] tracking-tight text-lg leading-tight">
              Dott.ssa Alessia Bertolozzi
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-[#4A7C59]">
              Biologa Nutrizionista e della Riproduzione
            </span>
          </div>
        </div>
      </header>

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
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#E2F1E7] rounded-full mb-4 overflow-hidden border-2 border-[#4A7C59]/10">
                <img 
                  src="/logo.png" 
                  alt="Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="text-[#4A7C59] font-bold text-3xl">AB</div>';
                  }}
                />
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
                    Domanda
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
                  {QUESTIONS[currentQuestionIndex].options.map((option) => (
                    <button
                      key={option.text}
                      onClick={() => handleAnswer(option.score)}
                      className="group relative w-full p-5 text-left bg-white border-2 border-[#F0EBE3] rounded-2xl hover:border-[#4A7C59] hover:bg-[#FDFBF7] transition-all flex items-center justify-between"
                    >
                      <span className="text-lg font-medium text-[#2D3436] group-hover:text-[#4A7C59]">
                        {option.text}
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
                <h2 className="text-3xl font-bold text-[#1A1D1E]">Ricevi la tua analisi e la guida ai primi passi</h2>
                <p className="text-lg text-[#636E72] max-w-md mx-auto">
                  Non ti invierò spam. Riceverai il tuo profilo dettagliato e una guida pratica per iniziare a capire cosa serve davvero al tuo corpo oggi.
                </p>
                <div className="flex items-center justify-center gap-2 text-xs text-[#636E72]/70 italic">
                  <CheckCircle2 className="w-3 h-3" />
                  I tuoi dati sono trattati con il massimo rispetto professionale.
                </div>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-4 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Inserisci la tua email migliore"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 bg-white border-2 border-[#F0EBE3] rounded-2xl focus:border-[#4A7C59] focus:outline-none transition-all text-lg"
                />
                <button
                  type="submit"
                  className="w-full py-4 bg-[#4A7C59] text-white rounded-full font-semibold text-lg shadow-lg hover:bg-[#3D6649] transition-all"
                >
                  Invia l'analisi e scopri il profilo
                </button>
                <button
                  type="button"
                  onClick={skipEmail}
                  className="text-sm text-[#636E72] hover:underline"
                >
                  Voglio solo vedere il risultato (senza guida)
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
                  <p className="text-xl font-semibold mt-4 leading-tight">
                    {resultProfile.mainMessage}
                  </p>
                </div>
              </div>

              <div className="space-y-10">
                <section className="space-y-4">
                  <div className="flex items-center gap-3 text-[#4A7C59]">
                    <Zap className="w-6 h-6" />
                    <h3 className="text-xl font-bold">Cosa significa per te adesso</h3>
                  </div>
                  <p className="text-[#636E72] text-lg leading-relaxed whitespace-pre-line">
                    {resultProfile.meaningNow}
                  </p>
                </section>

                <section className="space-y-4 p-6 bg-red-50/30 rounded-2xl border border-red-100">
                  <div className="flex items-center gap-3 text-red-700">
                    <AlertCircle className="w-6 h-6" />
                    <h3 className="text-xl font-bold">Cosa succede se non intervieni</h3>
                  </div>
                  <p className="text-red-900/80 text-lg leading-relaxed italic whitespace-pre-line">
                    {resultProfile.inactionConsequences}
                  </p>
                </section>

                <section className="space-y-4 p-6 bg-[#E2F1E7]/30 rounded-2xl border border-[#4A7C59]/20">
                  <div className="flex items-center gap-3 text-[#4A7C59]">
                    <CheckCircle2 className="w-6 h-6" />
                    <h3 className="text-xl font-bold">Cosa cambierebbe se intervenissi ora</h3>
                  </div>
                  <p className="text-[#1A1D1E] text-lg font-medium leading-relaxed whitespace-pre-line">
                    {resultProfile.improvement}
                  </p>
                </section>
              </div>

              <div className="pt-8 border-t border-[#F0EBE3] space-y-12 text-center">
                <div className="space-y-6">
                  <p className="text-[#4A7C59] font-bold text-lg italic">
                    {resultProfile.transition}
                  </p>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#1A1D1E]">Il prossimo passo verso il tuo equilibrio</h3>
                    <p className="text-[#636E72] text-lg max-w-xl mx-auto">
                      Per capire meglio come posso aiutarti nel tuo caso specifico e quali sono i passi giusti per te, prenota una chiamata preliminare gratuita.
                    </p>
                  </div>
                  <button
                    onClick={() => window.open('https://calendly.com/dott-bertolozzi/chiamatapreliminare', '_blank')}
                    className="w-full md:w-auto px-10 py-5 bg-[#4A7C59] text-white rounded-full font-bold text-xl shadow-lg hover:bg-[#3D6649] transition-all flex items-center justify-center gap-2 mx-auto"
                  >
                    Chiamata preliminare gratuita (15 min)
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6 pt-8 border-t border-[#F0EBE3]">
                  <p className="text-[#1A1D1E] text-xl font-bold max-w-md mx-auto leading-tight">
                    Oppure, se ti senti pronta e non vuoi più aspettare, prenota direttamente la prima visita:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                      onClick={() => window.open('https://calendly.com/dott-bertolozzi/prima-visita-firenze', '_blank')}
                      className="w-full md:w-auto px-8 py-4 bg-white text-[#4A7C59] border-2 border-[#4A7C59] rounded-full font-bold text-lg hover:bg-[#E2F1E7] transition-all flex items-center justify-center gap-2"
                    >
                      Prenota a Firenze
                    </button>
                    <button
                      onClick={() => window.open('https://calendly.com/dott-bertolozzi/prima-visita-capannori', '_blank')}
                      className="w-full md:w-auto px-8 py-4 bg-white text-[#4A7C59] border-2 border-[#4A7C59] rounded-full font-bold text-lg hover:bg-[#E2F1E7] transition-all flex items-center justify-center gap-2"
                    >
                      Prenota a Capannori (LU)
                    </button>
                  </div>
                </div>
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
          <span className="text-xs font-bold uppercase tracking-widest">Dott.ssa Alessia Bertolozzi • Biologa Nutrizionista e della Riproduzione</span>
        </div>
        <p className="text-[10px] text-[#636E72]/50 uppercase tracking-tighter">
          © {new Date().getFullYear()} • Questo test non sostituisce il parere medico.
        </p>
      </footer>
    </div>
  );
}
