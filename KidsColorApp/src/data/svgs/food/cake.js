import React from 'react';
import { Svg, Rect, Path, Ellipse } from 'react-native-svg';

export const CakeSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Base du gâteau */}
    <Rect x="70" y="180" width="160" height="70" fill="white" stroke="black" strokeWidth="4" />
    {/* Étage supérieur */}
    <Rect x="90" y="120" width="120" height="60" fill="white" stroke="black" strokeWidth="4" />
    {/* Glaçage base */}
    <Path
      d="M 70 180 Q 90 170 110 180 Q 130 190 150 180 Q 170 170 190 180 Q 210 190 230 180"
      fill="none"
      stroke="black"
      strokeWidth="3"
    />
    {/* Glaçage étage */}
    <Path
      d="M 90 120 Q 110 110 130 120 Q 150 130 170 120 Q 190 110 210 120"
      fill="none"
      stroke="black"
      strokeWidth="3"
    />
    {/* Bougie */}
    <Rect x="145" y="70" width="10" height="50" fill="white" stroke="black" strokeWidth="3" />
    {/* Flamme */}
    <Ellipse cx="150" cy="60" rx="8" ry="12" fill="white" stroke="black" strokeWidth="2" />
    {/* Cerise */}
    <circle cx="150" cy="110" r="8" fill="white" stroke="black" strokeWidth="2" />
    <Path d="M 150 102 L 150 95" stroke="black" strokeWidth="2" />
  </Svg>
);
