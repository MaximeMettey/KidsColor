import React from 'react';
import { Svg, Path, Circle } from 'react-native-svg';

export const CatSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Oreille gauche */}
    <Path
      d="M 80 80 L 60 30 L 110 60 Z"
      fill="white"
      stroke="black"
      strokeWidth="4"
    />
    {/* Oreille droite */}
    <Path
      d="M 220 80 L 240 30 L 190 60 Z"
      fill="white"
      stroke="black"
      strokeWidth="4"
    />
    {/* Tête */}
    <Circle cx="150" cy="130" r="80" fill="white" stroke="black" strokeWidth="4" />
    {/* Œil gauche */}
    <Circle cx="120" cy="120" r="12" fill="white" stroke="black" strokeWidth="3" />
    {/* Œil droit */}
    <Circle cx="180" cy="120" r="12" fill="white" stroke="black" strokeWidth="3" />
    {/* Nez */}
    <Path
      d="M 150 140 L 140 150 L 160 150 Z"
      fill="white"
      stroke="black"
      strokeWidth="3"
    />
    {/* Bouche */}
    <Path
      d="M 150 150 Q 140 160 130 155"
      fill="none"
      stroke="black"
      strokeWidth="3"
    />
    <Path
      d="M 150 150 Q 160 160 170 155"
      fill="none"
      stroke="black"
      strokeWidth="3"
    />
    {/* Moustaches gauche */}
    <Path d="M 80 130 L 40 120" stroke="black" strokeWidth="2" />
    <Path d="M 80 140 L 40 140" stroke="black" strokeWidth="2" />
    <Path d="M 80 150 L 40 160" stroke="black" strokeWidth="2" />
    {/* Moustaches droite */}
    <Path d="M 220 130 L 260 120" stroke="black" strokeWidth="2" />
    <Path d="M 220 140 L 260 140" stroke="black" strokeWidth="2" />
    <Path d="M 220 150 L 260 160" stroke="black" strokeWidth="2" />
    {/* Corps */}
    <Circle cx="150" cy="230" r="60" fill="white" stroke="black" strokeWidth="4" />
  </Svg>
);
