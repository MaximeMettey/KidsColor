import React from 'react';
import { Svg, Path } from 'react-native-svg';

export const HeartSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Cœur */}
    <Path
      d="M 150 240 L 50 140 Q 40 90 70 70 Q 110 50 150 100 Q 190 50 230 70 Q 260 90 250 140 Z"
      fill="white"
      stroke="black"
      strokeWidth="4"
    />
  </Svg>
);
