import { Question, Profile } from './types';

export const QUESTIONS: Question[] = [
  // METABOLISMO
  { id: 1, area: "METABOLISMO", text: "Hai fame improvvisa o bisogno di zuccheri durante la giornata?" },
  { id: 2, area: "METABOLISMO", text: "Ti senti spesso stanca anche dopo aver mangiato?" },
  { id: 3, area: "METABOLISMO", text: "Fai fatica a dimagrire nonostante mangi “bene”?" },
  { id: 4, area: "METABOLISMO", text: "Hai cali di energia nel pomeriggio?" },
  // ORMONI
  { id: 5, area: "ORMONI", text: "Il tuo ciclo è irregolare?", options: [{ label: "No", value: 0 }, { label: "Ogni tanto capita", value: 1 }, { label: "Sì", value: 2 }] },
  { id: 6, area: "ORMONI", text: "Hai spotting o sintomi premestruali marcati?" },
  { id: 7, area: "ORMONI", text: "Ti è stato diagnosticato PCOS o altri squilibri?", options: [{ label: "No", value: 0 }, { label: "Sì", value: 2 }] },
  { id: 8, area: "ORMONI", text: "Hai difficoltà a capire se ovuli?" },
  // INTESTINO
  { id: 9, area: "INTESTINO", text: "Hai gonfiore frequente dopo i pasti?" },
  { id: 10, area: "INTESTINO", text: "Hai stipsi o alvo irregolare?" },
  { id: 11, area: "INTESTINO", text: "Hai digestione lenta o pesante?" },
  { id: 12, area: "INTESTINO", text: "Ti senti spesso “appesantita” a livello addominale?" },
  // FERTILITÀ
  { id: 13, area: "FERTILITÀ", text: "Stai cercando una gravidanza da più di 6-12 mesi?", options: [{ label: "No", value: 0 }, { label: "Sì", value: 2 }] },
  { id: 14, area: "FERTILITÀ", text: "Sei in percorso PMA?", options: [{ label: "No", value: 0 }, { label: "Sì", value: 2 }] },
  { id: 15, area: "FERTILITÀ", text: "Hai avuto aborti o difficoltà di impianto?", options: [{ label: "No", value: 0 }, { label: "Sì", value: 2 }] },
  { id: 16, area: "FERTILITÀ", text: "Ti senti in difficoltà nel tuo percorso di fertilità?" },
  // STILE DI VITA
  { id: 17, area: "STILE DI VITA", text: "Dormi male o ti svegli stanca?" },
  { id: 18, area: "STILE DI VITA", text: "Hai ritmi alimentari irregolari?" },
  { id: 19, area: "STILE DI VITA", text: "Vivi stress costante?" },
  { id: 20, area: "STILE DI VITA", text: "Salti spesso pasti o mangi in modo disorganizzato?" },
];

export const PROFILES: Profile[] = [
  {
    id: 1,
    name: "Equilibrio Ormonale Silente",
    mirrorEffect: "Potresti riconoscerti in questo: senti che stai facendo attenzione, ma il tuo corpo non risponde come dovrebbe. Forse avverti una stanchezza sottile che ignori, o un ciclo che sta cambiando ritmo quasi senza farsi notare.",
    explanation: "Il tuo corpo non è 'rotto', sta solo cercando di compensare piccoli stress. C'è un dialogo meno fluido tra il tuo metabolismo e i tuoi ormoni, spesso alimentato da una comunicazione intestinale che sta diventando meno efficiente.",
    urgency: "Ignorare questi segnali non è mancanza di forza, ma di ascolto. Continuare a fare le stesse cose senza una direzione chiara significa aspettare che il corpo sia costretto ad alzare la voce per farsi sentire.",
    reframe: "Non è che hai fatto poco, è che finora ti sei concentrata sui singoli sintomi invece di guardare all'intero ingranaggio che li muove.",
    direction: "Servirebbe un approccio che riporti armonia tra metabolismo, ormoni e intestino, lavorando su una strategia personalizzata che sostenga la tua biochimica unica.",
    transition: "Questo risultato ti dà una direzione, ma per capire davvero come prevenire che questi segnali diventino ostacoli, serve andare un po’ più in profondità.",
    minScore: 0,
    maxScore: 12,
    color: "bg-green-50 text-green-900 border-green-200"
  },
  {
    id: 2,
    name: "Squilibrio Ormonale Reattivo",
    mirrorEffect: "Ti senti spesso 'gonfia', stanca anche dopo aver dormito, e il tuo ciclo è diventato un appuntamento temuto o imprevedibile. Hai provato integratori e diete, ma senti che i risultati sono solo temporanei e la confusione aumenta.",
    explanation: "Il tuo sistema è in uno stato di allerta costante. C'è un disallineamento tra come il tuo intestino assorbe i nutrienti e come i tuoi ormoni gestiscono l'energia, creando un ambiente interno che fatica a trovare stabilità.",
    urgency: "Aggiungere altri tentativi senza una strategia integrata è come cercare di spegnere un incendio con un bicchiere d'acqua. Il rischio è restare ferma nello stesso punto, mentre il corpo continua a compensare invece di risolvere.",
    reframe: "Non è colpa tua se non hai risolto. Il problema è che ti hanno proposto soluzioni standard per un corpo che invece ha bisogno di un linguaggio specifico.",
    direction: "Serve ripristinare il dialogo profondo tra metabolismo e asse ormonale, partendo da un lavoro mirato sull'intestino per sbloccare la tua naturale vitalità.",
    transition: "Il test indica una direzione chiara, ma per sbloccare davvero la situazione e ritrovare il tuo equilibrio serve un'analisi del tuo caso specifico.",
    minScore: 13,
    maxScore: 28,
    color: "bg-orange-50 text-orange-900 border-orange-200"
  },
  {
    id: 3,
    name: "Stress Ormonale e Metabolico Radicato",
    mirrorEffect: "Ti senti esausta, come se il tuo corpo remasse costantemente contro di te. Ogni tentativo di rimetterti in sesto sembra fallire e la frustrazione sta prendendo il sopravvento, lasciandoti con la sensazione di non avere più il controllo.",
    explanation: "Il tuo organismo è entrato in modalità 'sopravvivenza'. Il metabolismo ha rallentato per proteggerti e gli ormoni sono in costante emergenza, influenzando non solo il ciclo e la fertilità, ma anche il tuo umore e la tua energia vitale.",
    urgency: "Continuare a forzare il sistema con metodi aggressivi o frammentati non farà che aumentare lo stress interno. Non è questione di quanto ti impegni, ma di cambiare completamente la rotta della tua strategia.",
    reframe: "Non hai sbagliato tu. È che nessuno ha mai guardato al tuo equilibrio ormonale, metabolico e intestinale come a un unico grande sistema interconnesso.",
    direction: "Serve un lavoro profondo di riequilibrio che rispetti i tempi del tuo corpo, nutrendo la tua fertilità e il tuo metabolismo attraverso un approccio funzionale e altamente personalizzato.",
    transition: "Questo profilo richiede attenzione e cura, ma la strada per tornare a stare bene esiste. Per capire da dove iniziare nel tuo caso, serve un confronto diretto.",
    minScore: 29,
    maxScore: 40,
    color: "bg-red-50 text-red-900 border-red-200"
  }
];
