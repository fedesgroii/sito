# 🚀 Portfolio Professionale — Federico Sgroi

Un sito web portfolio Single Page Application (SPA) moderno, responsive e ad alte prestazioni, progettato per dare ai recruiter una visione completa del tuo profilo in meno di un minuto.

**Tecnologie:** HTML5 · CSS3 · JavaScript Vanilla (nessun framework, nessuna dipendenza)

---

## 📂 Struttura del Progetto

```
sito cv/
├── index.html          ← Struttura e contenuti del sito
├── css/
│   └── style.css       ← Design system completo (colori, layout, animazioni)
├── js/
│   └── main.js         ← Logica interattiva (menu, animazioni, scroll)
└── README.md           ← Questa guida
```

---

## ✍️ Come Personalizzare il Sito

### 1. Inserire i tuoi dati personali

Apri `index.html` in un editor di testo (consiglio [VS Code](https://code.visualstudio.com/)).

Cerca i commenti `<!-- MODIFICA QUI: ... -->` — ogni campo da compilare è chiaramente indicato con testi placeholder tra parentesi quadre `[...]`.

Le sezioni da compilare sono:
- **Hero**: Nome, titolo professionale, tagline
- **Progetti**: Titolo, descrizione, tech stack, link GitHub/Demo
- **Esperienze**: Ruolo, azienda, periodo, risultati (2-3 bullet point)
- **Volontariato**: Ruolo, organizzazione, impatto sociale, soft skills
- **Formazione**: Università, corso di laurea, tesi
- **Contatti**: Email, LinkedIn, GitHub, telefono
- **Footer**: Link social

### 2. Cambiare i colori

Apri `css/style.css` e modifica le variabili CSS nella sezione `:root` in cima al file:

```css
:root {
    /* ── Palette Colori ── */
    --bg-primary:    #0b0f19;    /* Sfondo principale */
    --bg-secondary:  #111827;    /* Sfondo sezioni alternate */
    --bg-card:       #1a2035;    /* Sfondo card */

    --text-primary:  #f1f5f9;    /* Testo principale */
    --text-secondary:#94a3b8;    /* Testo secondario */

    --accent:        #6366f1;    /* Colore accento (indaco) */
    --accent-light:  #818cf8;    /* Accento chiaro */
}
```

**Esempi di palette alternative:**
| Stile | `--accent` | `--accent-light` | `--bg-primary` |
|-------|-----------|-------------------|----------------|
| Indaco (default) | `#6366f1` | `#818cf8` | `#0b0f19` |
| Blu oceano | `#2563eb` | `#60a5fa` | `#0c1222` |
| Verde smeraldo | `#10b981` | `#34d399` | `#0a1410` |
| Rosa fucsia | `#ec4899` | `#f472b6` | `#1a0a14` |
| Ambra caldo | `#f59e0b` | `#fbbf24` | `#1a1408` |

### 3. Cambiare il font

Modifica il link al font nel `<head>` di `index.html` e la variabile `--font-sans` in `style.css`:

```css
--font-sans: 'Outfit', sans-serif;   /* Alternativa moderna */
--font-sans: 'DM Sans', sans-serif;  /* Alternativa clean */
```

### 4. Aggiornare il link del CV

Nel file `index.html`, cerca il pulsante **"Scarica CV"** nella navbar:

```html
<a href="#" class="btn btn--download" id="downloadCV" download>
```

Sostituisci `href="#"` con il percorso al tuo file PDF:

```html
<a href="assets/Federico_Sgroi_CV.pdf" class="btn btn--download" id="downloadCV" download>
```

> **Suggerimento:** Crea una cartella `assets/` nel progetto e mettici il tuo CV in formato PDF.

---

## 💡 Consigli per Impressionare i Recruiter

### Nella sezione **Progetti**:
- ✅ **Risultati concreti:** "App che gestisce 500+ utenti" > "Ho creato un'app"
- ✅ **Tech stack specifico:** Usa tag come `React`, `Python`, `PostgreSQL`
- ✅ **Link funzionanti:** Assicurati che ogni link GitHub/Demo sia attivo

### Nella sezione **Esperienze**:
- ✅ **Verbi d'azione:** "Sviluppato", "Ottimizzato", "Ridotto", "Aumentato"
- ✅ **Numeri misurabili:** "Ridotto i tempi di caricamento del 40%"
- ✅ **Max 3 bullet point** per esperienza

### Nella sezione **Volontariato**:
- ✅ **Impatto quantificato:** "Coordinato 12 volontari", "Raccolto €5.000"
- ✅ **Soft skills esplicite:** Leadership, teamwork, problem solving

### In generale:
- ✅ **Niente errori grammaticali** — rileggi tutto due volte
- ✅ **Contatti diretti** — email clickabile, LinkedIn funzionante
- ✅ **Mobile first** — testa il sito sul telefono prima di inviarlo

---

## 🌍 Come Pubblicare il Sito Gratis

### Metodo 1: Netlify (Il più facile)
1. Vai su [Netlify Drop](https://app.netlify.com/drop)
2. Trascina l'intera cartella `sito cv` nel cerchio tratteggiato
3. In 10 secondi hai un link pubblico da mettere nel CV cartaceo!

### Metodo 2: GitHub Pages (Perfetto per developer)
1. Crea un repository su GitHub chiamato `tuo-username.github.io`
2. Carica tutti i file
3. Vai in **Settings → Pages** e abilita su branch `main`
4. Il sito sarà online su `https://tuo-username.github.io`

---

## ⚡ Performance

Il sito è ottimizzato per un caricamento istantaneo:
- **0 dipendenze esterne** (solo Google Fonts)
- **~15 KB** di CSS + JS totali (gzipped)
- **IntersectionObserver** per animazioni lazy
- **Passive event listeners** per scroll fluido
- **Preconnect** ai font server
- **`display=swap`** per evitare FOIT
