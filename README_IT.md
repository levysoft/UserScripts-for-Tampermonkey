# UserScripts for Tampermonkey

Questa repository contiene una collezione di script Tampermonkey progettati per migliorare l'esperienza utente su siti web popolari come GitHub e Hacker News.

## Script Inclusi

### GitHub Auto Redirect to User Repositories
**File**: `userscripts/github-auto-redirect-to-user-repositories-1.0.user.js`

Questo script reindirizza automaticamente gli utenti loggati di GitHub alla pagina dei loro repository non appena visitano la homepage di GitHub. È pensato per coloro che desiderano accedere rapidamente ai loro progetti senza dover navigare attraverso il menu utente.

### Hacker News Enhancements
**File**: `userscripts/hacker-news-enhancer-1.0.user.js`

Questo script migliora la lettura dei commenti su Hacker News evidenziando i link in base al dominio di appartenenza, mettendo in evidenza il nome dell'autore del post e assicurando che tutti i link si aprano in una nuova scheda. È ideale per gli utenti che desiderano una navigazione più intuitiva e una maggiore leggibilità dei contenuti, permettendo di identificare facilmente i link esterni o rilevanti.

Dopo l'installazione, naviga su [Hacker News](https://news.ycombinator.com/) e apri qualsiasi thread di commenti. Noterai che tutti i link sono ora evidenziati non solo per risaltare, ma anche per indicare il loro dominio di origine a colpo d'occhio, e cliccandoci sopra il contenuto si aprirà in una nuova scheda.

### Hacker News Add Links Upvoted
**File**: `userscripts/hacker-news-add-links-upvoted-1.0.user.js`
Questo script integra i link per le submission e i commenti votati direttamente nell'intestazione, utilizzando il nome utente dell'account loggato.

Dopo l'installazione, naviga su [Hacker News](https://news.ycombinator.com/) e nel header verranno aggiunti i link rapidi alle tue submission votate ("↑ subs") e ai commenti votati ("↑ comms"), basati sul nome utente loggato. Questa nuova funzionalità permette una navigazione più veloce verso i contenuti con cui hai interagito.

### Hacker News Keyboard Navigation
**File**: `userscripts/hacker-news-keyboard-navigation-1.0.user.js`

Questo script aggiunge la navigazione da tastiera in stile Reddit ai thread di commenti di Hacker News. Permette di scorrere i commenti senza usare il mouse, con tasti dedicati per muoversi tra tutti i commenti oppure per saltare tra thread allo stesso livello.

Basato sullo script originale di [yorickvP](https://gist.github.com/yorickvP/c5f38322867440ea1774594c59ece3a2), con i seguenti miglioramenti:

- Corretto il bug per cui la navigazione per livello (`n`/`p`) non funzionava quando nessun commento era ancora selezionato: aggiunto il fallback che seleziona il primo commento, coerente con il comportamento di `j`/`k`
- Rinominata la navigazione per livello da `J`/`K` a `n`/`p` (più intuitivo: **n**ext / **p**revious)
- Tutti i tasti funzionano indipendentemente da Caps Lock o Shift: `j`/`J`, `k`/`K`, `n`/`N`, `p`/`P`, `v`/`V`

**Tasti disponibili:**

| Tasto | Azione |
|-------|--------|
| `j` / `k` | Commento successivo / precedente (tutti i livelli) |
| `n` / `p` | Commento successivo / precedente allo stesso livello |
| `Enter` | Espandi / comprimi il commento corrente |
| `v` | Apri il link dell'articolo in una nuova scheda |
| `Escape` | Deseleziona il commento corrente |

## Compatibilità e Installazione

Questi script sono stati progettati per essere compatibili sia con **Tampermonkey** che con **Greasemonkey**, permettendo così una vasta gamma di opzioni per gli utenti di diversi browser. Tuttavia, data la maggiore versatilità e la disponibilità su più piattaforme, raccomandiamo l'uso di **Tampermonkey** per una migliore esperienza utente visto che è disponibile per Chrome, Firefox, Safari e altri browser moderni. Per gli utenti iOS è disponibile l'app **Userscripts**.
La funzionalità degli script rimane la stessa indipendentemente dal gestore di userscript utilizzato. Assicurati di avere l'ultima versione del gestore di userscript installata per garantire la compatibilità e il corretto funzionamento degli script.

### Passaggi per l'installazione:
1. Installa Tampermonkey nel tuo browser:
    - [Tampermonkey per Chrome](https://tampermonkey.net/?ext=dhdg&browser=chrome)
    - [Tampermonkey per Firefox](https://tampermonkey.net/?ext=dhdg&browser=firefox)
    - [Tampermonkey per Safari](https://tampermonkey.net/?ext=dhdg&browser=safari)
2. Naviga allo script desiderato nella directory `/scripts`.
3. Clicca sul file dello script per visualizzarlo, poi clicca sul pulsante "Raw" per aprire il file dello script grezzo.
4. Tampermonkey dovrebbe riconoscere automaticamente lo script e visualizzare una finestra di installazione. Per assicurarti che Tampermonkey riconosca lo script dal file "raw" su GitHub, il file deve avere l'estensione .user.js e e deve iniziare con un blocco dei metadati UserScript. L'URL dovrebbe avere una struttura simile a questa: `https://raw.githubusercontent.com/[username]/[repository]/[branch]/[filename].user.js`.
5. Clicca su "Installa" per procedere con l'installazione dello script.

Dopo l'installazione, lo script sarà attivo e funzionante sul tuo browser. Con Tampermonkey, puoi facilmente gestire, disabilitare o rimuovere gli script installati selezionando dall'icona di Tampermonkey, nella tua barra degli strumenti del browser, la voce del menu "Pannello di Controllo" 

### Installazione con Greasemonkey (per utenti Firefox)
Se sei un utente _Firefox_ e preferisci **Greasemonkey**, gli script dovrebbero funzionare anche in questo ambiente.
1. Installa Greasemonkey sul Firefox visitando la pagina di Greasemonkey su Mozilla Add-ons:
   - [Greasemonkey per Firefox](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/).
2. Naviga allo script desiderato nella directory `/scripts`.
3. Clicca sul file dello script per visualizzarlo, poi clicca sul pulsante "Raw" per aprire il file dello script grezzo.
4. Con Greasemonkey attivo, visitare l'URL "Raw" dello script dovrebbe automaticamente aprire una finestra di dialogo di Greasemonkey che ti chiede se desideri installare lo script.
5. Clicca su "Installa" per procedere con l'installazione dello script.

Dopo l'installazione, lo script dovrebbe essere attivo e funzionante su Firefox. Puoi gestire, disabilitare o rimuovere lo script tramite il menu di Greasemonkey selezionando "Gestisci script utente".

### Installazione con Userscripts (app per iOS)
Se sei un utente _iOS_ puoi usare **Userscripts** per abilitare gli script su Safari.
1. Installa l'app [Userscripts da App Store](https://apps.apple.com/us/app/userscripts/id1463298887).
2. Apri l'app Userscripts sul tuo dispositivo iOS dopo averla installata.
3. Naviga allo script desiderato sulla directory GitHub `/scripts` utilizzando il browser integrato nell'app Userscripts o un browser sul tuo dispositivo e scarica lo script sul tuo dispostivo in locale o su iCloud Drive.
4. Nella app imposta la _Userscripts Directory_ dove avrai caricato gli script che avrai, in precedenza, scaricato.
5. Assicurati che l'app Userscripts sia abilitata come estensione del browser sul tuo dispositivo iOS per permettere l'esecuzione degli script. Vai a _Impostazioni > Safari > Estensioni_ (o il browser che usi) e assicurati che Userscripts sia abilitato.

Ora dovresti essere in grado di utilizzare lo script sulle pagine web supportate quando navighi con il tuo dispositivo iOS.

## Feedback e Contributi
Il tuo feedback è molto apprezzato! Se hai suggerimenti, bug da segnalare o miglioramenti, sentiti libero di aprire un issue o una pull request nel repository GitHub. Se desideri contribuire al progetto, le pull request sono benvenute.

## Licenza
Questo script è rilasciato sotto la licenza MIT. Sentiti libero di usarlo, modificarlo e distribuirlo come desideri.
