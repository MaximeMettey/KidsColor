import React from 'react';
import { Svg, Path } from 'react-native-svg';

export const BananaSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Banane */}
    <Path
      d="M 100 80 Q 80 100 80 140 Q 80 200 120 230 Q 160 250 200 240 Q 230 230 240 200 Q 250 170 230 150 L 220 155 Q 235 175 230 200 Q 220 220 200 228 Q 165 235 130 220 Q 95 195 95 140 Q 95 110 110 90 Z"
      fill="white"
      stroke="black"
      strokeWidth="4"
    />
    {/* Tige */}
    <Path
      d="M 100 80 L 105 60 Q 110 50 120 55"
      fill="none"
      stroke="black"
      strokeWidth="3"
    />
  </Svg>
);
