# Portfolio — Maoudo DIAW

Site personnel statique (HTML / CSS / JS vanilla), pensé pour être hébergé
gratuitement sur GitHub Pages.

## Structure du projet

```
portfolio-pro/
├── index.html          # Structure de la page (sections : hero, à propos, compétences, projets, contact)
├── css/
│   └── style.css        # Tous les styles (design tokens en haut de fichier via variables CSS)
├── js/
│   ├── network-bg.js     # Animation du fond (topologie réseau animée dans le hero)
│   └── main.js           # Comportement général (année du footer, effet machine à écrire du terminal)
└── assets/
    └── images/            # Place ici tes futures images (photo, favicon, etc.)
```

## Modifier le contenu

- **Textes / sections** → `index.html`
- **Couleurs / espacements / polices** → `css/style.css`, tout est piloté par les variables
  déclarées en haut du fichier (`:root { --bg: ...; --accent: ...; }`)
- **Animation du fond** → `js/network-bg.js` (densité, distance de connexion, vitesse)
- **Effet terminal du hero** → `js/main.js` (variable `terminalLines`)

## Déployer sur GitHub Pages

1. Crée un repo nommé exactement `Maoudo-4.github.io`
2. Mets tout le contenu de ce dossier à la racine du repo
3. `git init && git add . && git commit -m "Portfolio v1" && git branch -M main`
4. `git remote add origin https://github.com/<ton-pseudo>/<ton-pseudo>.github.io.git`
5. `git push -u origin main`

Le site sera en ligne à `https://Maoudo-4.github.io` en quelques minutes.
