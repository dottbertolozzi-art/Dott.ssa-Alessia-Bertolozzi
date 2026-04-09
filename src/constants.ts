import { Question, Profile } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Come valuteresti il tuo livello di energia durante la giornata?",
    options: [
      { text: "Stabile e buona fino a sera", score: 0 },
      { text: "Buona, ma con cali dopo i pasti", score: 1 },
      { text: "Alti e bassi continui", score: 2 },
      { text: "Sempre bassa, mi sento sfinita", score: 3 }
    ]
  },
  {
    id: 2,
    text: "Come descriveresti la tua pancia dopo i pasti?",
    options: [
      { text: "Piatta e leggera", score: 0 },
      { text: "Leggermente gonfia a fine giornata", score: 1 },
      { text: "Si gonfia subito dopo mangiato", score: 2 },
      { text: "Sempre gonfia e tesa, a prescindere da cosa mangio", score: 3 }
    ]
  },
  {
    id: 3,
    text: "Hai spesso voglia di dolci o carboidrati (pane, pasta)?",
    options: [
      { text: "Raramente, solo occasionalmente", score: 0 },
      { text: "Sì, specialmente nel pomeriggio o dopo cena", score: 1 },
      { text: "Sì, sento proprio il bisogno fisico di zuccheri", score: 2 },
      { text: "Costantemente, è una lotta quotidiana", score: 3 }
    ]
  },
  {
    id: 4,
    text: "Com'è la qualità del tuo sonno?",
    options: [
      { text: "Riposante, mi sveglio carica", score: 0 },
      { text: "Dormo ma mi sveglio stanca", score: 1 },
      { text: "Faccio fatica ad addormentarmi o ho risvegli notturni", score: 2 },
      { text: "Insonnia o sonno molto disturbato", score: 3 }
    ]
  },
  {
    id: 5,
    text: "Come descriveresti il tuo ciclo mestruale?",
    options: [
      { text: "Regolare, senza dolori particolari", score: 0 },
      { text: "Regolare ma con sindrome premestruale (gonfiore, umore)", score: 1 },
      { text: "Irregolare o molto doloroso", score: 2 },
      { text: "Assente, molto scarso o emorragico", score: 3 }
    ]
  },
  {
    id: 6,
    text: "Noti cambiamenti nel tuo peso o nella distribuzione del grasso?",
    options: [
      { text: "Peso stabile", score: 0 },
      { text: "Faccio più fatica a mantenere il peso rispetto a prima", score: 1 },
      { text: "Tendo ad accumulare sulla pancia", score: 2 },
      { text: "Aumento di peso costante nonostante la dieta", score: 3 }
    ]
  },
  {
    id: 7,
    text: "Come gestisci lo stress quotidiano?",
    options: [
      { text: "Bene, mi sento resiliente", score: 0 },
      { text: "Mi sento spesso sopraffatta", score: 1 },
      { text: "Lo stress influisce subito sulla mia digestione", score: 2 },
      { text: "Mi sento in 'burnout' o costantemente in ansia", score: 3 }
    ]
  },
  {
    id: 8,
    text: "Com'è la tua pelle e i tuoi capelli?",
    options: [
      { text: "Sani e luminosi", score: 0 },
      { text: "Pelle secca o capelli più fragili", score: 1 },
      { text: "Acne, pelle grassa o caduta capelli", score: 2 },
      { text: "Cambiamenti evidenti e preoccupanti", score: 3 }
    ]
  },
  {
    id: 9,
    text: "Soffri di nebbia mentale o difficoltà di concentrazione?",
    options: [
      { text: "Mai, sono sempre lucida", score: 0 },
      { text: "Ogni tanto, specialmente se sono stanca", score: 1 },
      { text: "Spesso, mi sento rallentata", score: 2 },
      { text: "Costantemente, fatico a focalizzarmi", score: 3 }
    ]
  },
  {
    id: 10,
    text: "Qual è il tuo obiettivo principale oggi?",
    options: [
      { text: "Mantenere il benessere attuale", score: 0 },
      { text: "Migliorare energia e digestione", score: 1 },
      { text: "Riequilibrare il ciclo o cercare una gravidanza", score: 2 },
      { text: "Risolvere un malessere profondo e costante", score: 3 }
    ]
  },
  {
    id: 11,
    text: "Hai mai ricevuto una diagnosi di PCOS o Endometriosi?",
    options: [
      { text: "No", score: 0 },
      { text: "Sospetta, ma mai confermata", score: 1 },
      { text: "Sì, PCOS", score: 2 },
      { text: "Sì, Endometriosi", score: 3 }
    ]
  },
  {
    id: 12,
    text: "Hai notato una crescita eccessiva di peli in zone insolite (viso, petto)?",
    options: [
      { text: "No", score: 0 },
      { text: "Leggera peluria più evidente", score: 1 },
      { text: "Sì, è un problema che mi crea disagio", score: 2 },
      { text: "Sì, associato ad altri sintomi ormonali", score: 3 }
    ]
  },
  {
    id: 13,
    text: "Ti capita di avere vampate di calore o sudorazioni notturne?",
    options: [
      { text: "Mai", score: 0 },
      { text: "Raramente, vicino al ciclo", score: 1 },
      { text: "Sì, occasionalmente", score: 2 },
      { text: "Sì, spesso e disturbano il sonno", score: 3 }
    ]
  },
  {
    id: 14,
    text: "Come descriveresti il tuo appetito?",
    options: [
      { text: "Regolare, sento bene fame e sazietà", score: 0 },
      { text: "Sento poca fame al mattino e molta la sera", score: 1 },
      { text: "Ho attacchi di fame improvvisa", score: 2 },
      { text: "Non sento mai la vera sazietà", score: 3 }
    ]
  },
  {
    id: 15,
    text: "Hai problemi intestinali frequenti (stitichezza, diarrea)?",
    options: [
      { text: "No, sono regolare", score: 0 },
      { text: "Ogni tanto, legato a ciò che mangio", score: 1 },
      { text: "Sì, soffro spesso di stitichezza", score: 2 },
      { text: "Sì, ho l'intestino molto irritabile", score: 3 }
    ]
  },
  {
    id: 16,
    text: "Hai mai avuto difficoltà a concepire per più di 12 mesi?",
    options: [
      { text: "Non sto cercando una gravidanza", score: 0 },
      { text: "No, ho concepito facilmente in passato", score: 0 },
      { text: "Sì, sto riscontrando difficoltà", score: 3 },
      { text: "Sì, e sto valutando o facendo percorsi medici", score: 3 }
    ]
  },
  {
    id: 17,
    text: "Hai avuto esperienze di aborti spontanei?",
    options: [
      { text: "No", score: 0 },
      { text: "Sì, uno", score: 2 },
      { text: "Sì, più di uno", score: 3 },
      { text: "Preferisco non rispondere", score: 1 }
    ]
  },
  {
    id: 18,
    text: "Stai seguendo o hai seguito percorsi di PMA (Procreazione Medicalmente Assistita)?",
    options: [
      { text: "No", score: 0 },
      { text: "Ci sto pensando", score: 1 },
      { text: "Sì, ho iniziato il percorso", score: 3 },
      { text: "Sì, ho già fatto diversi tentativi", score: 3 }
    ]
  }
];

export const PROFILES: Profile[] = [
  {
    id: 1,
    name: "Tutto sembra andare bene",
    mainMessage: "Il tuo corpo viaggia bene, ma anche ciò che funziona ha bisogno di essere mantenuto nel tempo.",
    meaningNow: "In questo momento il tuo corpo sta funzionando bene. Hai energia. I segnali sono stabili. Non senti particolari difficoltà. Sei in una fase in cui il corpo sta compensando bene. Ed è proprio questo il punto. Quando tutto sembra andare bene, è facile non farci caso. Ma spesso è qui che si decide come starai tra qualche anno.",
    inactionConsequences: "Il rischio qui non è immediato. È silenzioso. È come avere una macchina nuova e non fare mai manutenzione. All’inizio va tutto bene. Poi, nel tempo: piccoli cali, meno prestazione, più fatica. Nel corpo succede lo stesso: energia meno stabile, più difficoltà nel gestire il peso, cambiamenti che arrivano senza accorgersene. Non succede all’improvviso, succede piano. E quando te ne accorgi, è già cambiato qualcosa.",
    improvement: "Se lavori su questo adesso: mantieni l’energia nel tempo, eviti cali futuri, costruisci una base solida. È come fare manutenzione quando tutto funziona. Serve poco. Ma cambia tutto nel lungo periodo. Qui stai giocando d’anticipo.",
    transition: "Se vuoi capire meglio come proteggere questo equilibrio o come potrei aiutarti a blindare la tua salute nel tempo, il prossimo passo è parlarne insieme.",
    minScore: 0,
    maxScore: 10,
    color: "bg-blue-50 text-blue-900 border-blue-200"
  },
  {
    id: 2,
    name: "Il corpo ti sta avvisando",
    mainMessage: "Il tuo corpo ti sta mandando dei segnali. Ascoltarli ora cambia tutto.",
    meaningNow: "Sei in una fase in cui il corpo funziona… ma con fatica. Magari ti senti bene a tratti. Ma basta poco per perdere equilibrio. Più stanchezza, più gonfiore, meno tolleranza allo stress. Non è ancora un problema evidente. Ma non è più nemmeno equilibrio.",
    inactionConsequences: "È come avere una piccola crepa in un muro. All’inizio non succede niente. Poi, con il tempo: si allarga, entra instabilità, diventa un problema vero. Nel corpo succede lo stesso. Quello che oggi è un fastidio, una sensazione, qualcosa che “va e viene”, diventa lentamente qualcosa di più costante. Più aspetti, più il corpo si abitua a funzionare così. E quello che era semplice… diventa più complesso.",
    improvement: "Se lavori su questo adesso: il corpo torna stabile più velocemente, i segnali si riducono prima che diventino cronici, recuperi energia senza sforzo continuo. È come sistemare una crepa quando è ancora piccola. Serve poco ma eviti un problema molto più grande dopo.",
    transition: "Se vuoi capire meglio cosa sta succedendo o come potrei aiutarti a fermare questi segnali prima che peggiorino, facciamo il punto insieme.",
    minScore: 11,
    maxScore: 20,
    color: "bg-green-50 text-green-900 border-green-200"
  },
  {
    id: 3,
    name: "Energia sulle montagne russe",
    mainMessage: "La tua energia non è stabile. Il tuo corpo sta chiedendo equilibrio.",
    meaningNow: "Il tuo corpo sta facendo fatica a gestire l’energia. Ti senti stanca anche quando non dovresti. Hai cali durante la giornata. Fai fatica a mantenere concentrazione. È come se il tuo sistema lavorasse a scatti. E questo si riflette su tutto: fame, peso, lucidità, umore.",
    inactionConsequences: "È come un telefono con la batteria sempre scarica. Abbassa tutto, limita le funzioni, cerca di durare il più possibile. Il tuo corpo fa lo stesso. Rallenta. Risparmia. Blocca. Nel tempo questo porta a: metabolismo più lento, più difficoltà a perdere peso, più bisogno di zuccheri, meno energia disponibile. Più vai avanti così, più il corpo si abitua a funzionare in modalità “risparmio”. E uscirne diventa più difficile.",
    improvement: "Quando il corpo torna stabile: l’energia diventa continua, la mente è più lucida, il metabolismo riparte. E soprattutto: non devi più “spingerti” per funzionare. È il corpo che torna a collaborare.",
    transition: "Se vuoi capire come sbloccare il tuo metabolismo o come potrei aiutarti a ritrovare un'energia costante, il primo passo è parlarne a voce.",
    minScore: 21,
    maxScore: 30,
    color: "bg-yellow-50 text-yellow-900 border-yellow-200"
  },
  {
    id: 4,
    name: "Ormoni e ciclo fuori fase",
    mainMessage: "Il tuo corpo ti sta parlando chiaramente. È il momento di rimettere ordine.",
    meaningNow: "Qui il segnale è evidente. Il ciclo è cambiato. Il corpo non risponde come prima. La fertilità (se la cerchi) è diventata un pensiero costante. Senti che qualcosa non è allineato. E questo riguarda tutto il sistema.",
    inactionConsequences: "È come guidare con una spia accesa. All’inizio vai avanti lo stesso. Ma il problema non sparisce. Si stabilizza, diventa parte del sistema, si complica. Nel corpo significa: sistema ormonale sempre meno sincronizzato, ambiente meno favorevole, più difficoltà nel tempo. Non è solo aspettare. È continuare a restare nello stesso stato… mentre il corpo si allontana dall’equilibrio.",
    improvement: "Quando lavori sul sistema: il corpo torna a comunicare meglio, il ciclo si regolarizza, il terreno diventa più favorevole. È come preparare un terreno prima di seminare. Non forzi il risultato, crei le condizioni perché succeda. E questo cambia tutto.",
    transition: "Se vuoi capire come rimettere ordine nel tuo ciclo o come potrei aiutarti a preparare il terreno per la tua fertilità, facciamo chiarezza insieme.",
    minScore: 31,
    maxScore: 40,
    color: "bg-orange-50 text-orange-900 border-orange-200"
  },
  {
    id: 5,
    name: "Corpo in emergenza",
    mainMessage: "Il tuo corpo è in sovraccarico. Ha bisogno di essere riportato in equilibrio.",
    meaningNow: "Sei in una fase in cui il corpo è stanco. Non risponde più come prima. L’energia è bassa. I segnali sono continui. È come se il sistema fosse sempre in allerta. E questo impatta tutto: digestione, energia, ciclo, umore.",
    inactionConsequences: "È come guidare con il freno a mano tirato. Fai fatica, consumi più energia, non vai avanti davvero. E nel tempo: il sistema si irrigidisce, il recupero diventa più lento, i segnali aumentano. Non perché non stai facendo abbastanza. Ma perché il corpo non si sente al sicuro. E più resta così, più diventa difficile uscirne senza cambiare approccio.",
    improvement: "Quando il corpo torna in sicurezza: l’energia inizia a risalire, i segnali si riducono, il sistema si sblocca gradualmente. Non è immediato. Ma è reale. Ed è il passaggio necessario per tornare a stare bene davvero, non a resistere.",
    transition: "Se vuoi capire come togliere questo 'freno a mano' o come potrei aiutarti a riportare il tuo corpo in sicurezza, iniziamo da una chiacchierata.",
    minScore: 41,
    maxScore: 50,
    color: "bg-red-50 text-red-900 border-red-200"
  }
];
