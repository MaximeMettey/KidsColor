import React from 'react';
import { Svg, Path, Ellipse } from 'react-native-svg';

export const CupSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Corps de la tasse */}
    <Path
      d="M 100 100 L 90 200 Q 90 220 110 220 L 190 220 Q 210 220 210 200 L 200 100 Z"
      fill="white"
      stroke="black"
      strokeWidth="4"
    />
    {/* Bord */}
    <Ellipse cx="150" cy="100" rx="50" ry="12" fill="white" stroke="black" strokeWidth="4" />
    {/* Anse */}
    <Path
      d="M 210 120 Q 245 135 245 165 Q 245 195 210 180"
      fill="none"
      stroke="black"
      strokeWidth="4"
    />
  </Svg>
);
