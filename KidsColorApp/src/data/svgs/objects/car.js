import React from 'react';
import { Svg, Rect, Circle, Path } from 'react-native-svg';

export const CarSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Corps de la voiture */}
    <Rect x="50" y="140" width="200" height="60" fill="white" stroke="black" strokeWidth="4" />
    {/* Toit */}
    <Path
      d="M 90 140 L 110 90 L 190 90 L 210 140 Z"
      fill="white"
      stroke="black"
      strokeWidth="4"
    />
    {/* Fenêtre gauche */}
    <Path
      d="M 100 135 L 115 95 L 145 95 L 145 135 Z"
      fill="white"
      stroke="black"
      strokeWidth="3"
    />
    {/* Fenêtre droite */}
    <Path
      d="M 155 135 L 155 95 L 185 95 L 200 135 Z"
      fill="white"
      stroke="black"
      strokeWidth="3"
    />
    {/* Roue gauche */}
    <Circle cx="100" cy="200" r="25" fill="white" stroke="black" strokeWidth="4" />
    <Circle cx="100" cy="200" r="10" fill="white" stroke="black" strokeWidth="3" />
    {/* Roue droite */}
    <Circle cx="200" cy="200" r="25" fill="white" stroke="black" strokeWidth="4" />
    <Circle cx="200" cy="200" r="10" fill="white" stroke="black" strokeWidth="3" />
    {/* Phare gauche */}
    <Circle cx="55" cy="160" r="8" fill="white" stroke="black" strokeWidth="2" />
    {/* Phare droit */}
    <Circle cx="245" cy="160" r="8" fill="white" stroke="black" strokeWidth="2" />
  </Svg>
);
