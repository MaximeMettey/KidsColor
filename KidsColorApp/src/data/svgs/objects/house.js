import React from 'react';
import { Svg, Rect, Path, Circle } from 'react-native-svg';

export const HouseSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Toit */}
    <Path
      d="M 150 50 L 250 130 L 50 130 Z"
      fill="white"
      stroke="black"
      strokeWidth="4"
    />
    {/* Murs */}
    <Rect x="60" y="130" width="180" height="130" fill="white" stroke="black" strokeWidth="4" />
    {/* Porte */}
    <Rect x="130" y="190" width="40" height="70" fill="white" stroke="black" strokeWidth="3" />
    {/* Poignée */}
    <Circle cx="160" cy="230" r="4" fill="black" />
    {/* Fenêtre gauche */}
    <Rect x="80" y="160" width="35" height="35" fill="white" stroke="black" strokeWidth="3" />
    <Path d="M 97.5 160 L 97.5 195" stroke="black" strokeWidth="2" />
    <Path d="M 80 177.5 L 115 177.5" stroke="black" strokeWidth="2" />
    {/* Fenêtre droite */}
    <Rect x="185" y="160" width="35" height="35" fill="white" stroke="black" strokeWidth="3" />
    <Path d="M 202.5 160 L 202.5 195" stroke="black" strokeWidth="2" />
    <Path d="M 185 177.5 L 220 177.5" stroke="black" strokeWidth="2" />
    {/* Cheminée */}
    <Rect x="190" y="70" width="25" height="40" fill="white" stroke="black" strokeWidth="3" />
  </Svg>
);
