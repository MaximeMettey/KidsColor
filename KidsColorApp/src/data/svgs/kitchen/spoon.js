import React from 'react';
import { Svg, Ellipse, Rect } from 'react-native-svg';

export const SpoonSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Partie creuse */}
    <Ellipse cx="150" cy="80" rx="35" ry="50" fill="white" stroke="black" strokeWidth="4" />
    {/* Manche */}
    <Rect x="140" y="125" width="20" height="140" rx="10" fill="white" stroke="black" strokeWidth="4" />
  </Svg>
);
