# Meditation

En enkel, statisk presentation/webbplats om meditation, mindfulness och NSDR.

## Innehåll
- `index.html`: startsida för presentationen
- `tm-mindfulness-nsdr.html`, `mindfulness-interaktiv.html`, `lankar.html`: kompletterande sidor
- `stars.css`, `stars.js`: stjärn‑bakgrund/effekter
- `images/`: bilder som används av sidorna
- `dokument/`: referensanteckningar (textfiler)

## Kör lokalt
Eftersom det är ren HTML/CSS/JS kan du öppna `index.html` direkt i webbläsaren.

För en liten utvecklingsserver (valfritt), med auto‑reload om du har stöd:
- Python 3: `python3 -m http.server 8000` och öppna `http://localhost:8000/`

## Navigering
- Pager: cirkulära ikonknappar nere på sidorna. Vänster/höger pil byter sida.
- Tangenter: använd piltangenterna ← → för att gå mellan sidor.
- Länksida i filtrerat läge: “Föregående” går tillbaka till föregående sida (referrer). I ofiltrerat läge följer den ordningen i slidesteget.

## Struktur och utveckling
- Håll allt statiskt för maximal kompatibilitet.
- Om du senare lägger till byggsteg (npm, bundlers) – se `.gitignore`.

## Licens
MIT – se `LICENSE`.
