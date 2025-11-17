/**
 * Versions string SVG pour Skia
 * Ces strings SVG peuvent être parsées par Skia.SVG.MakeFromString()
 */

export const SVG_STRINGS = {
  cat: `<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <!-- Oreille gauche -->
    <path d="M 80 80 L 60 30 L 110 60 Z" fill="white" stroke="black" stroke-width="4"/>
    <!-- Oreille droite -->
    <path d="M 220 80 L 240 30 L 190 60 Z" fill="white" stroke="black" stroke-width="4"/>
    <!-- Tête -->
    <circle cx="150" cy="130" r="80" fill="white" stroke="black" stroke-width="4"/>
    <!-- Œil gauche -->
    <circle cx="120" cy="120" r="12" fill="white" stroke="black" stroke-width="3"/>
    <!-- Œil droit -->
    <circle cx="180" cy="120" r="12" fill="white" stroke="black" stroke-width="3"/>
    <!-- Nez -->
    <path d="M 150 140 L 140 150 L 160 150 Z" fill="white" stroke="black" stroke-width="3"/>
    <!-- Bouche -->
    <path d="M 150 150 Q 140 160 130 155" fill="none" stroke="black" stroke-width="3"/>
    <path d="M 150 150 Q 160 160 170 155" fill="none" stroke="black" stroke-width="3"/>
    <!-- Moustaches gauche -->
    <path d="M 80 130 L 40 120" stroke="black" stroke-width="2"/>
    <path d="M 80 140 L 40 140" stroke="black" stroke-width="2"/>
    <path d="M 80 150 L 40 160" stroke="black" stroke-width="2"/>
    <!-- Moustaches droite -->
    <path d="M 220 130 L 260 120" stroke="black" stroke-width="2"/>
    <path d="M 220 140 L 260 140" stroke="black" stroke-width="2"/>
    <path d="M 220 150 L 260 160" stroke="black" stroke-width="2"/>
    <!-- Corps -->
    <circle cx="150" cy="230" r="60" fill="white" stroke="black" stroke-width="4"/>
  </svg>`,

  dog: `<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <!-- Oreille gauche -->
    <ellipse cx="90" cy="100" rx="25" ry="45" fill="white" stroke="black" stroke-width="4"/>
    <!-- Oreille droite -->
    <ellipse cx="210" cy="100" rx="25" ry="45" fill="white" stroke="black" stroke-width="4"/>
    <!-- Tête -->
    <circle cx="150" cy="120" r="70" fill="white" stroke="black" stroke-width="4"/>
    <!-- Museau -->
    <ellipse cx="150" cy="150" rx="40" ry="30" fill="white" stroke="black" stroke-width="4"/>
    <!-- Œil gauche -->
    <circle cx="130" cy="110" r="10" fill="white" stroke="black" stroke-width="3"/>
    <!-- Œil droit -->
    <circle cx="170" cy="110" r="10" fill="white" stroke="black" stroke-width="3"/>
    <!-- Nez -->
    <circle cx="150" cy="145" r="8" fill="black"/>
    <!-- Bouche -->
    <path d="M 150 153 L 150 165" stroke="black" stroke-width="3"/>
    <path d="M 150 165 Q 140 170 135 165" fill="none" stroke="black" stroke-width="3"/>
    <path d="M 150 165 Q 160 170 165 165" fill="none" stroke="black" stroke-width="3"/>
    <!-- Corps -->
    <ellipse cx="150" cy="230" rx="65" ry="55" fill="white" stroke="black" stroke-width="4"/>
  </svg>`,

  bird: `<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <!-- Corps -->
    <circle cx="150" cy="150" r="60" fill="white" stroke="black" stroke-width="4"/>
    <!-- Tête -->
    <circle cx="150" cy="90" r="40" fill="white" stroke="black" stroke-width="4"/>
    <!-- Œil gauche -->
    <circle cx="140" cy="85" r="8" fill="white" stroke="black" stroke-width="3"/>
    <!-- Œil droit -->
    <circle cx="160" cy="85" r="8" fill="white" stroke="black" stroke-width="3"/>
    <!-- Bec -->
    <path d="M 150 95 L 170 100 L 150 105 Z" fill="orange" stroke="black" stroke-width="3"/>
    <!-- Aile gauche -->
    <ellipse cx="120" cy="150" rx="30" ry="50" fill="white" stroke="black" stroke-width="4"/>
    <!-- Aile droite -->
    <ellipse cx="180" cy="150" rx="30" ry="50" fill="white" stroke="black" stroke-width="4"/>
    <!-- Queue -->
    <path d="M 150 200 L 130 240 L 150 220 L 170 240 Z" fill="white" stroke="black" stroke-width="4"/>
  </svg>`,

  fish: `<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <!-- Corps -->
    <ellipse cx="150" cy="150" rx="70" ry="40" fill="white" stroke="black" stroke-width="4"/>
    <!-- Queue -->
    <path d="M 80 150 L 40 130 L 50 150 L 40 170 Z" fill="white" stroke="black" stroke-width="4"/>
    <!-- Nageoire dorsale -->
    <path d="M 150 110 L 140 80 L 160 80 Z" fill="white" stroke="black" stroke-width="4"/>
    <!-- Nageoire ventrale -->
    <path d="M 150 190 L 140 220 L 160 220 Z" fill="white" stroke="black" stroke-width="4"/>
    <!-- Œil -->
    <circle cx="180" cy="140" r="10" fill="white" stroke="black" stroke-width="3"/>
    <!-- Bouche -->
    <path d="M 210 150 Q 220 145 220 150 Q 220 155 210 150" fill="white" stroke="black" stroke-width="3"/>
    <!-- Écailles -->
    <circle cx="130" cy="140" r="8" fill="none" stroke="black" stroke-width="2"/>
    <circle cx="150" cy="140" r="8" fill="none" stroke="black" stroke-width="2"/>
    <circle cx="130" cy="160" r="8" fill="none" stroke="black" stroke-width="2"/>
    <circle cx="150" cy="160" r="8" fill="none" stroke="black" stroke-width="2"/>
  </svg>`,

  rabbit: `<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <!-- Oreille gauche -->
    <ellipse cx="110" cy="70" rx="15" ry="50" fill="white" stroke="black" stroke-width="4"/>
    <!-- Oreille droite -->
    <ellipse cx="190" cy="70" rx="15" ry="50" fill="white" stroke="black" stroke-width="4"/>
    <!-- Tête -->
    <circle cx="150" cy="130" r="60" fill="white" stroke="black" stroke-width="4"/>
    <!-- Œil gauche -->
    <circle cx="130" cy="120" r="10" fill="white" stroke="black" stroke-width="3"/>
    <!-- Œil droit -->
    <circle cx="170" cy="120" r="10" fill="white" stroke="black" stroke-width="3"/>
    <!-- Nez -->
    <ellipse cx="150" cy="140" rx="8" ry="6" fill="pink" stroke="black" stroke-width="2"/>
    <!-- Bouche -->
    <path d="M 150 145 L 150 155" stroke="black" stroke-width="2"/>
    <path d="M 150 155 Q 140 160 135 155" fill="none" stroke="black" stroke-width="2"/>
    <path d="M 150 155 Q 160 160 165 155" fill="none" stroke="black" stroke-width="2"/>
    <!-- Moustaches -->
    <path d="M 110 135 L 70 130" stroke="black" stroke-width="2"/>
    <path d="M 110 145 L 70 145" stroke="black" stroke-width="2"/>
    <path d="M 190 135 L 230 130" stroke="black" stroke-width="2"/>
    <path d="M 190 145 L 230 145" stroke="black" stroke-width="2"/>
    <!-- Corps -->
    <ellipse cx="150" cy="220" rx="50" ry="45" fill="white" stroke="black" stroke-width="4"/>
  </svg>`,

  ball: `<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <!-- Ballon -->
    <circle cx="150" cy="150" r="90" fill="white" stroke="black" stroke-width="4"/>
    <!-- Motifs -->
    <path d="M 150 60 Q 180 90 180 150 Q 180 210 150 240" fill="none" stroke="black" stroke-width="3"/>
    <path d="M 150 60 Q 120 90 120 150 Q 120 210 150 240" fill="none" stroke="black" stroke-width="3"/>
    <path d="M 60 150 Q 90 120 150 120 Q 210 120 240 150" fill="none" stroke="black" stroke-width="3"/>
    <path d="M 60 150 Q 90 180 150 180 Q 210 180 240 150" fill="none" stroke="black" stroke-width="3"/>
  </svg>`,

  apple: `<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <!-- Corps de la pomme -->
    <circle cx="150" cy="160" r="80" fill="white" stroke="black" stroke-width="4"/>
    <!-- Creux du haut -->
    <path d="M 150 80 Q 130 85 130 100" fill="white" stroke="black" stroke-width="4"/>
    <path d="M 150 80 Q 170 85 170 100" fill="white" stroke="black" stroke-width="4"/>
    <!-- Tige -->
    <path d="M 150 80 L 150 50" fill="none" stroke="black" stroke-width="4"/>
    <!-- Feuille -->
    <ellipse cx="170" cy="60" rx="15" ry="25" fill="white" stroke="black" stroke-width="3" transform="rotate(30 170 60)"/>
  </svg>`,

  chair: `<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <!-- Dossier -->
    <rect x="90" y="60" width="120" height="15" fill="white" stroke="black" stroke-width="4"/>
    <!-- Montants dossier -->
    <rect x="90" y="75" width="15" height="60" fill="white" stroke="black" stroke-width="3"/>
    <rect x="195" y="75" width="15" height="60" fill="white" stroke="black" stroke-width="3"/>
    <!-- Assise -->
    <rect x="80" y="135" width="140" height="20" fill="white" stroke="black" stroke-width="4"/>
    <!-- Pied avant gauche -->
    <rect x="85" y="155" width="12" height="90" fill="white" stroke="black" stroke-width="3"/>
    <!-- Pied avant droit -->
    <rect x="203" y="155" width="12" height="90" fill="white" stroke="black" stroke-width="3"/>
    <!-- Pied arrière gauche -->
    <rect x="90" y="135" width="12" height="50" fill="white" stroke="black" stroke-width="3"/>
    <!-- Pied arrière droit -->
    <rect x="198" y="135" width="12" height="50" fill="white" stroke="black" stroke-width="3"/>
  </svg>`,

  cup: `<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <!-- Corps de la tasse -->
    <path d="M 100 100 L 90 200 Q 90 220 110 220 L 190 220 Q 210 220 210 200 L 200 100 Z" fill="white" stroke="black" stroke-width="4"/>
    <!-- Bord -->
    <ellipse cx="150" cy="100" rx="50" ry="12" fill="white" stroke="black" stroke-width="4"/>
    <!-- Anse -->
    <path d="M 210 120 Q 245 135 245 165 Q 245 195 210 180" fill="none" stroke="black" stroke-width="4"/>
  </svg>`,
};
