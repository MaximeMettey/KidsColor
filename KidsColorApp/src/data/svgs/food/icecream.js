import React from 'react';
import { Svg, Circle, Path } from 'react-native-svg';

export const IcecreamSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Cornet */}
    <Path
      d="M 120 150 L 150 240 L 180 150 Z"
      fill="white"
      stroke="black"
      strokeWidth="4"
    />
    {/* Motif cornet */}
    <Path d="M 130 170 L 170 170" stroke="black" strokeWidth="2" />
    <Path d="M 135 190 L 165 190" stroke="black" strokeWidth="2" />
    <Path d="M 140 210 L 160 210" stroke="black" strokeWidth="2" />
    {/* Boule du bas */}
    <Circle cx="150" cy="150" r="35" fill="white" stroke="black" strokeWidth="4" />
    {/* Boule du milieu */}
    <Circle cx="150" cy="110" r="35" fill="white" stroke="black" strokeWidth="4" />
    {/* Boule du haut */}
    <Circle cx="150" cy="70" r="35" fill="white" stroke="black" strokeWidth="4" />
    {/* Cerise */}
    <Circle cx="150" cy="40" r="10" fill="white" stroke="black" strokeWidth="3" />
    <Path d="M 150 30 Q 155 20 160 15" stroke="black" strokeWidth="2" />
  </Svg>
);
