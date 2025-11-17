# 🎨 Kids Color - Application de Coloriage pour Enfants

Application mobile cross-platform simple et amusante pour permettre aux enfants de colorier et dessiner librement.

## 🌟 Fonctionnalités

### Mode Coloriage
- **5 thèmes disponibles** :
  - 🐾 Animaux (chat, chien, poisson, oiseau, lapin)
  - ⚽ Objets (ballon, voiture, maison, étoile, cœur)
  - 🍎 Aliments (pomme, banane, gâteau, glace, pizza)
  - 🪑 Meubles (chaise, table, lit, lampe, horloge)
  - 🍴 Cuisine (tasse, assiette, cuillère, fourchette, casserole)

- **25 images SVG simples** avec des contours épais et bien visibles

### Mode Dessin Libre
- Canvas blanc pour dessiner librement
- Tous les outils de dessin disponibles

### Outils de Dessin
- ✏️ **Crayon** : trait fin et précis
- 🖌️ **Pinceau** : trait épais
- 🪣 **Pot de peinture** : remplissage (à venir)
- 💨 **Spray** : effet spray dispersé
- ⭐ **Tampons** : tampons de formes
- 🧹 **Gomme** : effacer
- ↶ **Annuler** : retour en arrière

### Palette de Couleurs
16 couleurs vives et adaptées aux enfants :
- Rouge, Rose, Orange, Jaune
- Vert clair, Vert, Bleu ciel, Bleu
- Violet, Marron, Noir, Blanc
- Or, Argent, Rose pastel, Lavande

## 📱 Installation et Lancement

### Prérequis
- Node.js installé
- Expo CLI

### Installation
```bash
cd KidsColorApp
npm install
```

### Lancer l'application

#### Sur le Web
```bash
npm run web
```

#### Sur Android
```bash
npm run android
```

#### Sur iOS (nécessite macOS)
```bash
npm run ios
```

#### Avec Expo Go
```bash
npx expo start
```
Puis scanner le QR code avec l'application Expo Go sur votre téléphone ou tablette.

## 🎨 Ajouter de Nouveaux Dessins

L'application est conçue pour faciliter l'ajout de nouveaux dessins. Voici comment procéder :

### 1. Créer un nouveau fichier SVG

Créez un nouveau fichier dans le dossier approprié :
```
src/data/svgs/[theme]/[nom-du-dessin].js
```

Exemple pour un éléphant dans le thème animaux :
```javascript
import React from 'react';
import { Svg, Circle, Path, Ellipse } from 'react-native-svg';

export const ElephantSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Corps */}
    <Circle cx="150" cy="150" r="80" fill="white" stroke="black" strokeWidth="4" />

    {/* Trompe */}
    <Path
      d="M 100 150 Q 60 140 50 180"
      fill="none"
      stroke="black"
      strokeWidth="4"
    />

    {/* Oreilles */}
    <Ellipse cx="90" cy="120" rx="30" ry="50" fill="white" stroke="black" strokeWidth="4" />
    <Ellipse cx="210" cy="120" rx="30" ry="50" fill="white" stroke="black" strokeWidth="4" />
  </Svg>
);
```

### 2. Ajouter l'export dans index.js

Dans `src/data/svgs/index.js`, ajoutez :
```javascript
import { ElephantSVG } from './animals/elephant';

// Dans SVG_COMPONENTS
export const SVG_COMPONENTS = {
  // ... autres SVG
  elephant: ElephantSVG,
};
```

### 3. Ajouter dans la liste des thèmes

Dans `src/data/themes.js`, ajoutez votre dessin au thème approprié :
```javascript
{
  id: 'animals',
  name: 'Animaux',
  icon: '🐾',
  images: [
    // ... autres images
    { id: 'elephant', name: 'Éléphant', file: 'elephant' },
  ],
}
```

### Conseils pour créer des SVG adaptés aux enfants

1. **Contours épais** : Utilisez `strokeWidth="4"` ou plus pour les contours principaux
2. **Formes simples** : Utilisez des cercles, ellipses et chemins basiques
3. **Fond blanc** : Mettez `fill="white"` pour que les zones soient coloriables
4. **Contours noirs** : Utilisez `stroke="black"` pour des contours bien visibles
5. **ViewBox 300x300** : Gardez une taille cohérente
6. **Espaces généreux** : Laissez de l'espace entre les éléments pour faciliter le coloriage

## 📁 Structure du Projet

```
KidsColorApp/
├── src/
│   ├── components/
│   │   ├── ColorPicker.js      # Sélecteur de couleurs
│   │   ├── ToolBar.js           # Barre d'outils
│   │   └── DrawingCanvas.js     # Canvas de dessin
│   ├── screens/
│   │   ├── HomeScreen.js        # Écran d'accueil
│   │   ├── ThemeSelector.js     # Sélection de thème
│   │   ├── ColoringScreen.js    # Écran de coloriage
│   │   └── FreeDrawScreen.js    # Écran de dessin libre
│   ├── data/
│   │   ├── themes.js            # Configuration des thèmes
│   │   └── svgs/
│   │       ├── index.js         # Export de tous les SVG
│   │       ├── animals/         # SVG d'animaux
│   │       ├── objects/         # SVG d'objets
│   │       ├── food/            # SVG d'aliments
│   │       ├── furniture/       # SVG de meubles
│   │       └── kitchen/         # SVG de cuisine
│   └── utils/
│       └── colors.js            # Palette de couleurs
├── App.js                       # Point d'entrée
└── package.json

```

## 🔧 Technologies Utilisées

- **React Native** : Framework cross-platform
- **Expo** : Outils de développement et build
- **react-native-svg** : Rendu des SVG et dessin
- **react-native-gesture-handler** : Gestion des interactions tactiles

## 🎯 Fonctionnalités à Venir

- Pot de peinture avec flood fill
- Sauvegarde des dessins
- Partage des créations
- Plus de tampons et formes
- Animation et sons amusants
- Mode multi-joueurs

## 📝 Licence

Ce projet est libre d'utilisation pour un usage personnel et éducatif.

---

Bon coloriage ! 🎨✨
