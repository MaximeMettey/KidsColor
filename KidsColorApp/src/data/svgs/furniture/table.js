import React from 'react';
import { Svg, Rect, Ellipse } from 'react-native-svg';

export const TableSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Plateau */}
    <Ellipse cx="150" cy="130" rx="110" ry="30" fill="white" stroke="black" strokeWidth="4" />
    {/* Pied avant gauche */}
    <Rect x="70" y="130" width="15" height="100" fill="white" stroke="black" strokeWidth="3" />
    {/* Pied avant droit */}
    <Rect x="215" y="130" width="15" height="100" fill="white" stroke="black" strokeWidth="3" />
    {/* Pied arrière gauche */}
    <Rect x="90" y="130" width="12" height="80" fill="white" stroke="black" strokeWidth="3" />
    {/* Pied arrière droit */}
    <Rect x="198" y="130" width="12" height="80" fill="white" stroke="black" strokeWidth="3" />
  </Svg>
);
