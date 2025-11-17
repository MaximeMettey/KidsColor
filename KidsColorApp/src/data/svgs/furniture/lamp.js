import React from 'react';
import { Svg, Rect, Path, Circle } from 'react-native-svg';

export const LampSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Abat-jour */}
    <Path
      d="M 100 100 L 80 150 L 220 150 L 200 100 Z"
      fill="white"
      stroke="black"
      strokeWidth="4"
    />
    {/* Support haut */}
    <Rect x="147" y="80" width="6" height="20" fill="white" stroke="black" strokeWidth="2" />
    {/* Pied */}
    <Rect x="140" y="150" width="20" height="80" fill="white" stroke="black" strokeWidth="3" />
    {/* Base */}
    <Ellipse cx="150" cy="230" rx="40" ry="10" fill="white" stroke="black" strokeWidth="3" />
    {/* Ampoule */}
    <Circle cx="150" cy="120" r="12" fill="white" stroke="black" strokeWidth="2" />
  </Svg>
);
