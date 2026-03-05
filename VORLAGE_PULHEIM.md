# 🏛️ Bürgerbrief – Anpassung für Pulheim (Stephan Wawrok)

Diese Datei enthält alle konkreten Werte, die für die Bürgerbrief-Seite
der **Stadt Pulheim** mit Ansprechpartner **Stephan Wawrok** eingesetzt werden müssen.

---

## 📋 Übersicht der Werte

| Feld | Wert |
|------|------|
| Kommune | Pulheim |
| Ansprechpartner | Stephan Wawrok |
| Repo-Name | `Buergerbrief_Pulheim` |
| Bild | `stephan-wawrok.jpg` |
| Adresse (Impressum) | ⚠️ _Adresse bitte ergänzen_ |
| E-Mail | ⚠️ _E-Mail bitte ergänzen_ |
| Region (KI-Prompt) | Rhein-Erft-Kreis |
| Kommunen im Dropdown | nur „Pulheim" |

---

## ✏️ Datei-für-Datei Anpassungen

### 1. `index.html` – Seitentitel (Zeile 7)

```html
<title>Bürgerbrief Pulheim</title>
```

---

### 2. `vite.config.ts` – Base-Pfad (Zeile 9)

```ts
base: '/Buergerbrief_Pulheim/',
```

---

### 3. `public/` – Bilder austauschen

| Datei | Aktion |
|-------|--------|
| `hero-bg.png` | Neues Hintergrundbild für Pulheim (z.B. Abtei Brauweiler, Rathaus, Stadtansicht) |
| `stephan-wawrok.jpg` | Foto von Stephan Wawrok (Hochformat, mind. 800px breit) |

> ⚠️ Die alte Datei `alexander-rheindorf.jpg` wird nicht mehr benötigt. Die neuen Bildreferenzen müssen in `Hero.tsx` und `Contact.tsx` angepasst werden (siehe unten).

---

### 4. `src/components/Hero.tsx`

```diff
  <h1>
    Ihre Stimme in
-   <span>Rhein-Erft-Kreis</span>
+   <span>Pulheim</span>
  </h1>

- Gestalte deine Heimat aktiv mit. Schreibe deinen Bürgerbrief direkt an mich und bringe deine Themen voran.
+ Gestalte Pulheim aktiv mit. Schreibe deinen Bürgerbrief direkt an mich und bringe deine Themen voran.

- Über Alexander Rheindorf
+ Über Stephan Wawrok
```

**Zeilen:** 11 (alt-Text), 25–26 (Überschrift), 29 (Beschreibung), 44 (Button-Text)

---

### 5. `src/components/Contact.tsx`

```diff
- src={`${import.meta.env.BASE_URL}alexander-rheindorf.jpg`}
+ src={`${import.meta.env.BASE_URL}stephan-wawrok.jpg`}

- alt="Alexander Rheindorf"
+ alt="Stephan Wawrok"

- <h3>Alexander Rheindorf</h3>
+ <h3>Stephan Wawrok</h3>

- Als engagierter Kommunalpolitiker im Rhein-Erft-Kreis setze ich mich für Ihre Belange ein...
+ Als engagierter Kommunalpolitiker in Pulheim setze ich mich für Ihre Belange ein. Ob Infrastruktur, Bildung, Digitalisierung oder Umweltschutz – Ihre Themen sind mein Antrieb.

- Lassen Sie uns gemeinsam an einer starken Zukunft für den Rhein-Erft-Kreis arbeiten...
+ Lassen Sie uns gemeinsam an einer starken Zukunft für Pulheim arbeiten. Ich freue mich auf Ihre Ideen, Anregungen und den persönlichen Austausch!

- alexander.rheindorf@fdp-rek.de
+ ⚠️ E-MAIL HIER EINSETZEN
```

**Zeilen:** 20–21 (Bild), 41 (Name), 45 (Beschreibung), 51 (Zukunfts-Text), 64–65 (E-Mail)

---

### 6. `src/components/Form.tsx` – Kommunen-Dropdown (Zeilen 6–17)

```ts
const KOMMUNEN = [
  "Pulheim",
];
```

> Da der Bürgerbrief nur für Pulheim ist, reicht ein einzelner Eintrag.

---

### 7. `src/components/LegalModals.tsx` – Impressum & Datenschutz

Suchen und ersetzen (kommt jeweils 2× vor – im Impressum und im Datenschutz):

```diff
- Alexander Rheindorf
+ Stephan Wawrok

- Pankratiusstraße 31
- 50129 Bergheim
+ ⚠️ STRASSE HIER EINSETZEN
+ ⚠️ PLZ + ORT HIER EINSETZEN

- alexander.rheindorf@fdp-rek.de
+ ⚠️ E-MAIL HIER EINSETZEN
```

---

### 8. `src/services/gemini.ts` – KI-Prompt (Zeilen 24, 30)

```diff
- ...an den Kommunalpolitiker Alexander Rheindorf.
+ ...an den Kommunalpolitiker Stephan Wawrok.

- in ${kommune} (Rhein-Erft-Kreis)
+ in ${kommune} (Rhein-Erft-Kreis)
```

> Die Region bleibt „Rhein-Erft-Kreis", da Pulheim dazugehört.

---

### 9. `src/App.tsx` – Footer (Zeile 25)

```diff
- © 2026 Bürgerbrief Rhein-Erft-Kreis.
+ © 2026 Bürgerbrief Pulheim.
```

---

## ⚠️ Noch zu klären

Folgende Informationen fehlen noch und müssen ergänzt werden:

1. **E-Mail-Adresse** von Stephan Wawrok (für `Contact.tsx`, `LegalModals.tsx`)
2. **Postadresse** von Stephan Wawrok (für `LegalModals.tsx` Impressum + Datenschutz)
3. **Foto** von Stephan Wawrok (`stephan-wawrok.jpg`)
4. **Hero-Hintergrundbild** für Pulheim (`hero-bg.png`)

---

## 🎨 Design / Farben

Die Farben (Magenta + Gelb) können beibehalten oder angepasst werden:

```css
@theme {
  --color-rek-gelb: #ffed00;     /* Gelb */
  --color-rek-magenta: #e5007d;  /* Magenta */
}
```

Falls gewünscht, können diese in `src/index.css` und der Hero-Gradient in `Hero.tsx` (Zeile 14) geändert werden.

---

## 🚀 Deployment

1. GitHub-Repo `Buergerbrief_Pulheim` erstellen
2. `.env`-Datei mit `GEMINI_API_KEY` anlegen (lokal + als GitHub Secret)
3. Pushen
4. GitHub → Settings → Pages → Source: **„GitHub Actions"**
5. Seite live unter `https://[USERNAME].github.io/Buergerbrief_Pulheim/`
