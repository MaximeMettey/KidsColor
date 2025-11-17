import React from 'react';
import { Svg, Path, Circle, Ellipse } from 'react-native-svg';

export const BirdSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Tête */}
    <Circle cx="120" cy="100" r="40" fill="white" stroke="black" strokeWidth="4" />
    {/* Corps */}
    <Ellipse cx="160" cy="160" rx="70" ry="55" fill="white" stroke="black" strokeWidth="4" />
    {/* Œil */}
    <Circle cx="130" cy="95" r="8" fill="white" stroke="black" strokeWidth="3" />
    <Circle cx="130" cy="95" r="4" fill="black" />
    {/* Bec */}
    <Path
      d="M 150 100 L 180 95 L 150 110 Z"
      fill="white"
      stroke="black"
      strokeWidth="3"
    />
    {/* Aile */}
    <Path
      d="M 160 150 Q 100 140 90 180 Q 120 170 160 180"
      fill="white"
      stroke="black"
      strokeWidth="4"
    />
    {/* Queue */}
    <Path
      d="M 220 170 L 270 150 L 260 180 L 230 180 Z"
      fill="white"
      stroke="black"
      strokeWidth="4"
    />
    {/* Patte gauche */}
    <Path d="M 140 210 L 135 240" stroke="black" strokeWidth="3" />
    <Path d="M 135 240 L 125 240" stroke="black" strokeWidth="3" />
    <Path d="M 135 240 L 135 245" stroke="black" strokeWidth="3" />
    <Path d="M 135 240 L 145 240" stroke="black" strokeWidth="3" />
    {/* Patte droite */}
    <Path d="M 170 210 L 175 240" stroke="black" strokeWidth="3" />
    <Path d="M 175 240 L 165 240" stroke="black" strokeWidth="3" />
    <Path d="M 175 240 L 175 245" stroke="black" strokeWidth="3" />
    <Path d="M 175 240 L 185 240" stroke="black" strokeWidth="3" />
  </Svg>
);
