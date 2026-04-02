import { Question, Profile } from './types';

export const QUESTIONS: Question[] = [
  // METABOLISMO (Energia, Glicemia, Fame)
  { id: 1, area: "METABOLISMO", text: "Ti capita di avere attacchi di fame improvvisa o una voglia matta di dolci?" },
  { id: 2, area: "METABOLISMO", text: "Ti senti stanca o con la 'nebbia in testa' subito dopo aver mangiato?" },
  { id: 3, area: "METABOLISMO", text: "Senti che il tuo peso non scende, anche se mangi poco o stai attenta?" },
  { id: 4, area: "METABOLISMO", text: "Ti senti scarica o fai fatica a concentrarti nel tardo pomeriggio?" },
  { id: 5, area: "METABOLISMO", text: "Diventi nervosa o ti senti debole se salti un pasto o mangi in ritardo?" },

  // ORMONI (Ciclo, Ovulazione, Sintomi)
  { id: 6, area: "ORMONI", text: "I giorni prima del ciclo sono un incubo (umore a terra, seno gonfio, nervosismo)?" },
  { id: 7, area: "ORMONI", text: "Noti delle piccole macchie di sangue scuro qualche giorno prima che arrivi il ciclo?" },
  { id: 8, area: "ORMONI", text: "Il tuo ciclo è così doloroso o abbondante da costringerti a stare a letto o cambiare piani?" },
  { id: 9, area: "ORMONI", text: "Ti spuntano brufoli o imperfezioni proprio sulla zona del mento o della mascella?" },
  { id: 10, area: "ORMONI", text: "Ti senti 'gonfia come un palloncino' o senti le gambe pesanti in certi momenti del mese?" },

  // INTESTINO (Digestione, Gonfiore, Alvo)
  { id: 11, area: "INTESTINO", text: "Ti svegli con la pancia piatta ma la sera non riesci quasi a chiudere i pantaloni?" },
  { id: 12, area: "INTESTINO", text: "Fai fatica ad andare in bagno regolarmente o senti che il tuo intestino è 'pigro'?" },
  { id: 13, area: "INTESTINO", text: "Senti che la digestione è lunghissima, come se avessi un sasso sullo stomaco?" },
  { id: 14, area: "INTESTINO", text: "Senti aria nella pancia, brontolii o tensione subito dopo aver mangiato?" },
  { id: 15, area: "INTESTINO", text: "Senti che il tuo umore o la tua voglia di fare dipendono da come hai digerito?" },

  // FERTILITÀ (Tentativi, Consapevolezza, Difficoltà)
  { id: 16, area: "FERTILITÀ", text: "Stai cercando un bambino da più di 6 mesi ma senti che non arriva?" },
  { id: 17, area: "FERTILITÀ", text: "Sei in un percorso di PMA o hai avuto difficoltà di impianto?", options: [{ label: "No", value: 0 }, { label: "Sì", value: 2 }] },
  { id: 18, area: "FERTILITÀ", text: "Hai avuto aborti spontanei o gravidanze che si sono interrotte subito?", options: [{ label: "No", value: 0 }, { label: "Sì", value: 2 }] },
  { id: 19, area: "FERTILITÀ", text: "Vivi la ricerca di una gravidanza o la gestione del ciclo con ansia e preoccupazione?" },
  { id: 20, area: "FERTILITÀ", text: "Ti hanno mai detto che hai l'ovaio policistico (PCOS) o l'endometriosi?", options: [{ label: "No", value: 0 }, { label: "Sì", value: 2 }] },

  // STILE DI VITA (Sonno, Stress, Ritmi)
  { id: 21, area: "STILE DI VITA", text: "Ti svegli stanca morta al mattino, anche se hai dormito tutta la notte?" },
  { id: 22, area: "STILE DI VITA", text: "Ti senti sempre 'con l'acqua alla gola' o sotto pressione per le troppe cose da fare?" },
  { id: 23, area: "STILE DI VITA", text: "Mangi spesso di corsa, saltando la colazione o guardando il telefono/computer?" },
  { id: 24, area: "STILE DI VITA", text: "Fai fatica a prendere sonno perché continui a pensare a quello che devi fare domani?" },
  { id: 25, area: "STILE DI VITA", text: "Senti che senza caffè o tè non riusciresti proprio a iniziare la giornata?" },
];

export const PROFILES: Profile[] = [
  {
    id: 1,
    name: "Equilibrio apparentemente stabile",
    mainMessage: "Il tuo corpo sembra viaggiare su binari sicuri, ma la prevenzione è la tua vera forza.",
    mirrorEffect: "Potresti riconoscerti in questo: ti senti generalmente bene, hai energia e il tuo ciclo non ti dà grandi preoccupazioni. Sei qui perché sei una persona attenta e vuoi capire se c'è qualcosa che puoi migliorare per sentirti ancora meglio o per prepararti a una fase futura.",
    explanation: "In questo momento, il tuo metabolismo, i tuoi ormoni e il tuo intestino stanno parlando la stessa lingua. La tua biochimica è reattiva e riesce a gestire bene gli stress quotidiani senza creare intoppi evidenti.",
    urgency: "Mantenere questo stato non è scontato. Senza una strategia di mantenimento che evolva con te, il rischio è di accorgersi dei cambiamenti solo quando i segnali diventeranno troppo forti per essere ignorati.",
    reframe: "Non è che non hai problemi, è che il tuo corpo è molto bravo a compensare. Lavorare ora significa non dover mai arrivare alla fase di emergenza.",
    direction: "Serve un approccio di ottimizzazione che protegga questa stabilità, lavorando sulla tua unicità per prevenire futuri squilibri.",
    transition: "Questo risultato ti dà una direzione, ma per capire davvero come blindare il tuo equilibrio nel tempo serve andare un po’ più in profondità.",
    minScore: 0,
    maxScore: 10,
    color: "bg-blue-50 text-blue-900 border-blue-200"
  },
  {
    id: 2,
    name: "Equilibrio ormonale silente",
    mainMessage: "Il tuo corpo ti sta mandando dei sussurri. Ascoltarli ora farà tutta la differenza.",
    mirrorEffect: "Potresti riconoscerti in questo: ti senti bene, ma basta una settimana più intensa o un pasto sregolato per farti sentire subito gonfia o stanca. Forse il ciclo è cambiato un po' o noti che la tua pelle non è più quella di una volta. \"È solo un periodo\", ti dici spesso.",
    explanation: "Il tuo sistema è in equilibrio, ma le riserve sono al limite. C'è una piccola interferenza tra come digerisci e come i tuoi ormoni rispondono, creando una fragilità che ti espone a sbalzi di energia e umore.",
    urgency: "Fare finta di nulla non è una soluzione. Continuare a ignorare questi piccoli avvisi significa permettere allo squilibrio di consolidarsi, rendendo poi più lungo il percorso per tornare a stare bene davvero.",
    reframe: "Non è che non stai facendo abbastanza, è che la tua strategia attuale non è abbastanza profonda da proteggere la tua biochimica dagli stress della vita.",
    direction: "Serve rinforzare le fondamenta del tuo metabolismo e del tuo intestino per rendere il tuo sistema ormonale finalmente solido e non più 'ballerino'.",
    transition: "Questo risultato ti dà una direzione, ma per capire davvero come trasformare questa fragilità in forza serve andare un po’ più in profondità.",
    minScore: 11,
    maxScore: 20,
    color: "bg-green-50 text-green-900 border-green-200"
  },
  {
    id: 3,
    name: "Sistema sotto stress metabolico",
    mainMessage: "La tua energia è sulle montagne russe. È il momento di ridare stabilità al tuo motore interno.",
    mirrorEffect: "Potresti riconoscerti in questo: ti svegli già stanca, hai cali di concentrazione nel pomeriggio e una voglia di dolci che a volte non riesci a controllare. Senti che il tuo corpo sta faticando a gestire il peso e che la tua pancia è spesso tesa, come se fosse sempre in allerta.",
    explanation: "Il tuo metabolismo sta 'rubando' risorse ai tuoi ormoni. Lo stress interno sta creando un corto circuito: l'intestino non assorbe come dovrebbe e gli ormoni faticano a mantenere il ritmo, lasciandoti svuotata e frustrata.",
    urgency: "Fare altri tentativi a caso o diete restrittive non cambierà il risultato. Se continui a forzare un sistema che è già sotto stress, resterai ferma nello stesso punto, aumentando solo la stanchezza.",
    reframe: "Non è colpa tua se non hai risultati. È che finora nessuno ha lavorato sulla causa radice che tiene bloccato il tuo metabolismo e i tuoi ormoni.",
    direction: "Serve un intervento che spenga l'infiammazione e ridia stabilità alla tua gestione dell'energia, lavorando in modo integrato su tutti i tuoi sistemi.",
    transition: "Questo risultato ti dà una direzione, ma per capire davvero come sbloccare il tuo metabolismo e i tuoi ormoni serve andare un po’ più in profondità.",
    minScore: 21,
    maxScore: 30,
    color: "bg-yellow-50 text-yellow-900 border-yellow-200"
  },
  {
    id: 4,
    name: "Squilibrio ormonale reattivo",
    mainMessage: "Il tuo ciclo e la tua fertilità ti stanno parlando. È ora di rimettere ordine nel tuo dialogo interno.",
    mirrorEffect: "Potresti riconoscerti in questo: il ciclo è diventato un appuntamento temuto, tra dolori, irregolarità o sindromi premestruali pesanti. Se cerchi una gravidanza, senti che il tempo passa e la confusione aumenta. Ti senti 'sballata' e non riconosci più i ritmi del tuo corpo.",
    explanation: "Il tuo asse ormonale ha perso la sua naturale fluidità. C'è un disallineamento profondo alimentato da un intestino che non comunica bene e da un metabolismo che non sostiene più la produzione ormonale corretta.",
    urgency: "Continuare a trattare solo il sintomo (il ciclo o la fertilità) senza guardare a ciò che lo alimenta è come cercare di aggiustare le lancette di un orologio che ha gli ingranaggi rotti. Resterai ferma finché non guarderai al sistema intero.",
    reframe: "Non è che hai fatto poco, è che nessuno ha mai lavorato davvero su questo insieme di fattori che oggi ti fanno sentire così confusa e bloccata.",
    direction: "Serve un approccio personalizzato che ricolleghi i puntini tra intestino, metabolismo e ormoni per ritrovare la tua naturale fertilità e il tuo benessere.",
    transition: "Questo risultato ti dà una direzione, ma per capire davvero come lavorare sul tuo caso specifico serve andare un po’ più in profondità.",
    minScore: 31,
    maxScore: 40,
    color: "bg-orange-50 text-orange-900 border-orange-200"
  },
  {
    id: 5,
    name: "Sistema in sovraccarico",
    mainMessage: "Il tuo corpo è in modalità emergenza. Serve un piano di recupero profondo e rispettoso.",
    mirrorEffect: "Potresti riconoscerti in questo: ti senti completamente esausta, come se ogni cellula remasse contro di te. La pancia è un problema costante, il ciclo è un miraggio o un incubo, e la tua mente è annebbiata. Hai la sensazione di aver perso il controllo sulla tua salute e sulla tua vita.",
    explanation: "Il tuo organismo è in sovraccarico totale. L'infiammazione ha coinvolto ogni sistema: l'intestino è in difficoltà, il metabolismo è rallentato per protezione e gli ormoni sono in costante allarme per la sopravvivenza.",
    urgency: "Non è questione di fare di più o impegnarsi più duramente. Continuare con metodi aggressivi o frammentati rischia solo di peggiorare la situazione. Se non cambi rotta ora, il corpo continuerà a compensare fino all'esaurimento.",
    reframe: "Non è colpa tua. È che il tuo sistema ha accumulato troppi carichi e nessuno ti ha mai aiutata a scaricarli con metodo, rispetto e una visione d'insieme.",
    direction: "Serve un lavoro profondo di riequilibrio che parta dal ripristino della barriera intestinale e della flessibilità metabolica per far sentire il tuo corpo di nuovo al sicuro.",
    transition: "Questo risultato ti dà una direzione, ma per capire davvero come iniziare questo percorso di rinascita serve andare un po’ più in profondità.",
    minScore: 41,
    maxScore: 50,
    color: "bg-red-50 text-red-900 border-red-200"
  }
];
