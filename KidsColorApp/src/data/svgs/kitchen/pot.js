import React from 'react';
import { Svg, Path, Ellipse, Rect } from 'react-native-svg';

export const PotSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Corps de la casserole */}
    <Path
      d="M 80 120 L 80 200 Q 80 220 100 220 L 200 220 Q 220 220 220 200 L 220 120 Z"
      fill="white"
      stroke="black"
      strokeWidth="4"
    />
    {/* Bord */}
    <Ellipse cx="150" cy="120" rx="70" ry="15" fill="white" stroke="black" strokeWidth="4" />
    {/* Poignée gauche */}
    <Path
      d="M 80 140 L 50 140 Q 40 140 40 150 Q 40 160 50 160 L 80 160"
      fill="white"
      stroke="black"
      strokeWidth="3"
    />
    {/* Poignée droite */}
    <Path
      d="M 220 140 L 250 140 Q 260 140 260 150 Q 260 160 250 160 L 220 160"
      fill="white"
      stroke="black"
      strokeWidth="3"
    />
  </Svg>
);
