import React from 'react';
import { Svg, Circle, Path, Ellipse } from 'react-native-svg';

export const AppleSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Corps de la pomme */}
    <Circle cx="150" cy="160" r="80" fill="white" stroke="black" strokeWidth="4" />
    {/* Creux du haut */}
    <Path
      d="M 150 80 Q 130 85 130 100"
      fill="white"
      stroke="black"
      strokeWidth="4"
    />
    <Path
      d="M 150 80 Q 170 85 170 100"
      fill="white"
      stroke="black"
      strokeWidth="4"
    />
    {/* Tige */}
    <Path
      d="M 150 80 L 150 50"
      fill="none"
      stroke="black"
      strokeWidth="4"
    />
    {/* Feuille */}
    <Ellipse
      cx="170"
      cy="60"
      rx="15"
      ry="25"
      fill="white"
      stroke="black"
      strokeWidth="3"
      transform="rotate(30 170 60)"
    />
  </Svg>
);
