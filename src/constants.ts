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
    name: "Equilibrio fragile ma recuperabile",
    description: "Il tuo corpo ha piccoli segnali di squilibrio, ma ha ancora una buona capacità di recupero.",
    message: "Il tuo corpo sta iniziando a mandare segnali. Intervenire ora può fare molta differenza.",
    whatIsHappening: "Il tuo sistema ormonale è ancora reattivo, ma sta iniziando a faticare per mantenere l'omeostasi. Piccoli stress metabolici o nutrizionali stanno creando delle micro-infiammazioni che, se ignorate, potrebbero consolidarsi in squilibri più profondi.",
    whyPastAttemptsFailed: "Forse hai provato approcci generici o 'fai da te' che non hanno considerato la tua unicità biochimica. Senza una strategia mirata, è facile perdersi in consigli contrastanti.",
    whatIsNeeded: "Serve una regolazione fine dei ritmi circadiani e un supporto nutrizionale che stabilizzi la glicemia, permettendo al corpo di ritrovare la sua naturale fluidità ormonale.",
    minScore: 0,
    maxScore: 10,
    color: "bg-green-50 text-green-800 border-green-200"
  },
  {
    id: 2,
    name: "Sistema sotto stress metabolico",
    description: "Instabilità energetica e glicemica con chiari segnali di affaticamento.",
    message: "Il tuo corpo sta lavorando in condizioni non ottimali. Serve rimettere stabilità.",
    whatIsHappening: "La gestione degli zuccheri e dell'insulina è al centro del tuo quadro attuale. Questo stress metabolico 'ruba' risorse al sistema ormonale, creando stanchezza cronica e rendendo difficile la gestione del peso e dell'energia.",
    whyPastAttemptsFailed: "Molte diete si focalizzano solo sulle calorie, ignorando l'impatto ormonale del cibo. Se il tuo metabolismo è sotto stress, restrizioni eccessive possono addirittura peggiorare la situazione.",
    whatIsNeeded: "È prioritario ripristinare la flessibilità metabolica attraverso una nutrizione funzionale che sostenga i surreni e ottimizzi la risposta insulinica.",
    minScore: 11,
    maxScore: 20,
    color: "bg-yellow-50 text-yellow-800 border-yellow-200"
  },
  {
    id: 3,
    name: "Equilibrio ormonale disallineato",
    description: "Segnali ormonali evidenti con possibile impatto su ovulazione e fertilità.",
    message: "Qui non si tratta di piccoli aggiustamenti, ma di un lavoro mirato sull’equilibrio del sistema.",
    whatIsHappening: "L'asse ormonale sta comunicando un disallineamento significativo. Ciclo irregolare, spotting o sintomi marcati indicano che la comunicazione tra cervello e ovaie è disturbata da fattori pro-infiammatori o carenze micronutrizionali specifiche.",
    whyPastAttemptsFailed: "Spesso ci si concentra solo sul sintomo (es. l'irregolarità del ciclo) senza guardare alla causa radice intestinale o metabolica che lo alimenta.",
    whatIsNeeded: "Serve un protocollo nutrizionale anti-infiammatorio e di supporto epatico per favorire il corretto metabolismo degli estrogeni e sostenere la fase progestinica.",
    minScore: 21,
    maxScore: 30,
    color: "bg-orange-50 text-orange-800 border-orange-200"
  },
  {
    id: 4,
    name: "Sistema in sovraccarico",
    description: "Più sistemi coinvolti (metabolico, intestinale, ormonale) con impatto importante sulla fertilità.",
    message: "Il tuo corpo sta cercando di compensare uno squilibrio più profondo. Serve una strategia guidata.",
    whatIsHappening: "Il tuo organismo è in una fase di 'allarme' costante. L'infiammazione sistemica coinvolge intestino, metabolismo e ormoni, creando un ambiente poco favorevole alla fertilità e al benessere generale. Il corpo sta dando priorità alla sopravvivenza rispetto alla riproduzione.",
    whyPastAttemptsFailed: "Approcci parziali non sono sufficienti quando il sovraccarico è multi-organo. Serve una visione d'insieme che ricolleghi tutti i puntini del tuo vissuto clinico.",
    whatIsNeeded: "È necessaria una strategia integrata di nutrizione funzionale che parta dal ripristino della barriera intestinale e prosegua con la modulazione profonda dell'infiammazione e dello stress ossidativo.",
    minScore: 31,
    maxScore: 40,
    color: "bg-red-50 text-red-800 border-red-200"
  }
];
