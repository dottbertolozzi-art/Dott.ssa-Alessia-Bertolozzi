import { Question, Profile } from './types';

export const QUESTIONS: Question[] = [
  // METABOLISMO (Energia, Glicemia, Fame)
  { id: 1, area: "METABOLISMO", text: "Ti capita di avere attacchi di fame improvvisa o un bisogno irrefrenabile di dolci?" },
  { id: 2, area: "METABOLISMO", text: "Ti senti stanca, appesantita o con la mente annebbiata subito dopo aver mangiato?" },
  { id: 3, area: "METABOLISMO", text: "Senti che il tuo peso è bloccato, anche se pensi di mangiare in modo corretto?" },
  { id: 4, area: "METABOLISMO", text: "Avverti un calo di energie o di lucidità mentale nel tardo pomeriggio?" },
  { id: 5, area: "METABOLISMO", text: "Diventi irritabile, ansiosa o senti tremori se un pasto viene ritardato?" },

  // ORMONI (Ciclo, Ovulazione, Sintomi)
  { id: 6, area: "ORMONI", text: "Vivi una sindrome premestruale intensa (sbalzi d'umore, tensione al seno, irritabilità)?" },
  { id: 7, area: "ORMONI", text: "Noti delle perdite scure (spotting) nei giorni che precedono il ciclo vero e proprio?" },
  { id: 8, area: "ORMONI", text: "Il tuo ciclo è così doloroso, abbondante o irregolare da limitare le tue attività?" },
  { id: 9, area: "ORMONI", text: "Noti la comparsa di imperfezioni o brufoli sulla zona della mascella o del mento?" },
  { id: 10, area: "ORMONI", text: "Ti senti spesso 'gonfia' o noti una forte ritenzione idrica che cambia drasticamente col ciclo?" },

  // INTESTINO (Digestione, Gonfiore, Alvo)
  { id: 11, area: "INTESTINO", text: "Ti capita di svegliarti con la pancia piatta e ritrovarti molto gonfia a fine giornata?" },
  { id: 12, area: "INTESTINO", text: "Il tuo transito intestinale è irregolare (stipsi, feci poco formate o giorni alterni)?" },
  { id: 13, area: "INTESTINO", text: "Senti che la digestione è lenta, come se il cibo rimanesse sullo stomaco per ore?" },
  { id: 14, area: "INTESTINO", text: "Avverti fastidi, aria, brontolii o tensione addominale dopo i pasti?" },
  { id: 15, area: "INTESTINO", text: "Noti che la tua lucidità mentale o il tuo umore cambiano in base a come digerisci?" },

  // FERTILITÀ (Tentativi, Consapevolezza, Difficoltà)
  { id: 16, area: "FERTILITÀ", text: "Stai cercando una gravidanza da più di 6 mesi senza successo o con difficoltà?" },
  { id: 17, area: "FERTILITÀ", text: "Fai fatica a individuare i tuoi giorni fertili o i segnali dell'ovulazione (muco, temperatura)?" },
  { id: 18, area: "FERTILITÀ", text: "Ti senti 'scollegata' dal tuo corpo o senti di non capirne i ritmi riproduttivi?" },
  { id: 19, area: "FERTILITÀ", text: "Vivi il percorso della fertilità o la gestione del ciclo con un senso di ansia e pressione?" },
  { id: 20, area: "FERTILITÀ", text: "Hai ricevuto diagnosi come PCOS, endometriosi o riserva ovarica ridotta?", options: [{ label: "No", value: 0 }, { label: "Sì", value: 2 }] },

  // STILE DI VITA (Sonno, Stress, Ritmi)
  { id: 21, area: "STILE DI VITA", text: "Ti svegli stanca al mattino, anche se hai dormito un numero di ore sufficiente?" },
  { id: 22, area: "STILE DI VITA", text: "Senti di vivere costantemente 'di corsa' o sotto una pressione emotiva eccessiva?" },
  { id: 23, area: "STILE DI VITA", text: "Ti capita spesso di saltare la colazione o mangiare velocemente davanti a uno schermo?" },
  { id: 24, area: "STILE DI VITA", text: "Fai fatica ad addormentarti perché la tua mente continua a rielaborare la giornata?" },
  { id: 25, area: "STILE DI VITA", text: "Senti di aver bisogno di caffè, tè o stimolanti per riuscire ad affrontare la giornata?" },
];

export const PROFILES: Profile[] = [
  {
    id: 1,
    name: "Equilibrio Ormonale Stabile",
    mirrorEffect: "Ti senti generalmente bene e in sintonia con il tuo corpo. Il tuo ciclo è un compagno silenzioso e la tua energia è costante. Tuttavia, sei qui perché vuoi ottimizzare la tua salute o prepararti al meglio per il futuro.",
    explanation: "Il tuo corpo sta comunicando in modo efficace. Metabolismo, ormoni e intestino lavorano in sinergia, mantenendo un ambiente interno pulito e reattivo.",
    urgency: "Mantenere questo stato non è un caso, ma il risultato di buone abitudini. Senza una strategia di mantenimento evolutiva, il corpo potrebbe faticare a rispondere ai cambiamenti fisiologici dei prossimi anni.",
    reframe: "Non si tratta di risolvere un problema, ma di costruire una riserva di salute che protegga la tua fertilità e il tuo benessere a lungo termine.",
    direction: "Servirebbe un piano di ottimizzazione che affini la tua nutrizione funzionale per sostenere la longevità ormonale.",
    transition: "Hai una base eccellente, ma per portarla al livello successivo serve un tocco di personalizzazione professionale.",
    minScore: 0,
    maxScore: 10,
    color: "bg-blue-50 text-blue-900 border-blue-200"
  },
  {
    id: 2,
    name: "Equilibrio Ormonale Fragile",
    mirrorEffect: "Senti che le cose vanno bene, ma basta un periodo di stress o un pasto fuori orario per scompensarti. Il tuo corpo ti manda piccoli avvisi che spesso metti in secondo piano, pensando siano 'normali'.",
    explanation: "Il tuo sistema è in equilibrio, ma le tue riserve sono basse. C'è una micro-infiammazione latente che rende la comunicazione tra i tuoi organi meno fluida e più soggetta a interferenze.",
    urgency: "Ignorare questi piccoli segnali significa permettere allo squilibrio di mettere radici. Il rischio è che un equilibrio fragile diventi, col tempo, uno stress cronico difficile da invertire.",
    reframe: "Non è che non stai facendo nulla, è che la tua strategia attuale non è abbastanza profonda da proteggerti dagli imprevisti della vita.",
    direction: "Servirebbe rinforzare le fondamenta metaboliche e intestinali per rendere il tuo sistema ormonale davvero resiliente.",
    transition: "Il tuo corpo ti sta parlando a bassa voce. Ascoltarlo ora significa evitare che debba urlare tra qualche mese.",
    minScore: 11,
    maxScore: 20,
    color: "bg-green-50 text-green-900 border-green-200"
  },
  {
    id: 3,
    name: "Sistema sotto Stress Funzionale",
    mirrorEffect: "Ti riconosci in questo: la stanchezza è diventata la tua ombra e il gonfiore un ospite fisso. Senti che stai facendo attenzione, ma il tuo corpo sembra aver perso la bussola e non risponde più come un tempo.",
    explanation: "Il tuo corpo non è rotto, è solo stanco di compensare. Lo stress metabolico sta 'rubando' energia ai tuoi ormoni, creando un corto circuito che influenza il tuo umore, il tuo peso e il tuo ciclo.",
    urgency: "Continuare a spingere o provare soluzioni frammentate non farà che aumentare il carico interno. Se non cambi direzione, il sistema continuerà a dare priorità all'emergenza invece che al tuo benessere.",
    reframe: "Il problema non è la tua mancanza di impegno, ma l'assenza di una visione d'insieme che ricolleghi i puntini tra quello che mangi e come ti senti.",
    direction: "Serve un intervento di nutrizione funzionale che spenga l'incendio metabolico e ridia fiato alle tue ghiandole endocrine.",
    transition: "Questo risultato è un segnale chiaro: è il momento di fermarsi e ricalibrare la rotta con una strategia mirata.",
    minScore: 21,
    maxScore: 30,
    color: "bg-yellow-50 text-yellow-900 border-yellow-200"
  },
  {
    id: 4,
    name: "Squilibrio Ormonale Conclamato",
    mirrorEffect: "Il ciclo è diventato un problema, la fertilità un'ansia e la tua pancia un fastidio costante. Ti senti confusa da mille pareri e frustrata perché senti che nessuno sta davvero capendo cosa succede dentro di te.",
    explanation: "C'è un disallineamento profondo tra metabolismo, ormoni e intestino. Il dialogo biochimico è disturbato da un'infiammazione che ha preso il sopravvento, rendendo difficile per il tuo corpo ritrovare la calma.",
    urgency: "Fare altre cose senza una strategia precisa è come girare in tondo in un labirinto. Ogni giorno che passa senza un piano personalizzato è un giorno in cui il tuo corpo deve faticare il doppio per sopravvivere.",
    reframe: "Non hai sbagliato tu, ti hanno solo dato gli strumenti sbagliati. Nessuno ha mai lavorato davvero sull'unione di questi tre pilastri nel tuo caso specifico.",
    direction: "Servirebbe un protocollo integrato che lavori contemporaneamente su intestino e metabolismo per liberare finalmente i tuoi ormoni.",
    transition: "La situazione è complessa ma non impossibile. Per capire da dove iniziare a sciogliere i nodi, serve un'analisi professionale.",
    minScore: 31,
    maxScore: 40,
    color: "bg-orange-50 text-orange-900 border-orange-200"
  },
  {
    id: 5,
    name: "Sistema in Sovraccarico Profondo",
    mirrorEffect: "Ti senti esausta, come se il tuo corpo remasse costantemente contro di te. Ogni tentativo di rimetterti in sesto sembra fallire e la sensazione di aver perso il controllo sulla tua salute è opprimente.",
    explanation: "Il tuo organismo è in modalità 'emergenza assoluta'. Il metabolismo ha rallentato per proteggerti e gli ormoni sono in costante allarme, influenzando ogni aspetto della tua vita, dalla fertilità all'energia vitale.",
    urgency: "Continuare con metodi aggressivi o parziali è rischioso. Non è questione di quanto ti impegni, ma di cambiare radicalmente il modo in cui nutri il tuo sistema per farlo sentire di nuovo al sicuro.",
    reframe: "Non è colpa tua. È che il tuo sistema ha accumulato troppi carichi e ora ha bisogno di qualcuno che lo aiuti a scaricarli uno per uno, con metodo e rispetto.",
    direction: "Serve un lavoro profondo di riequilibrio funzionale che parta dal ripristino della barriera intestinale e della flessibilità metabolica.",
    transition: "Questo profilo richiede un'attenzione prioritaria. La strada per tornare a stare bene esiste, ma va percorsa con una guida esperta.",
    minScore: 41,
    maxScore: 50,
    color: "bg-red-50 text-red-900 border-red-200"
  }
];
