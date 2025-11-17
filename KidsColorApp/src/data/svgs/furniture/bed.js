import React from 'react';
import { Svg, Rect, Circle } from 'react-native-svg';

export const BedSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Tête de lit */}
    <Rect x="50" y="100" width="15" height="80" fill="white" stroke="black" strokeWidth="4" />
    {/* Matelas */}
    <Rect x="65" y="140" width="185" height="40" fill="white" stroke="black" strokeWidth="4" />
    {/* Oreiller */}
    <Rect x="75" y="115" width="60" height="25" fill="white" stroke="black" strokeWidth="3" rx="5" />
    {/* Couverture */}
    <Rect x="140" y="145" width="105" height="30" fill="white" stroke="black" strokeWidth="3" />
    {/* Pied gauche */}
    <Rect x="60" y="180" width="12" height="50" fill="white" stroke="black" strokeWidth="3" />
    {/* Pied droit */}
    <Rect x="238" y="180" width="12" height="50" fill="white" stroke="black" strokeWidth="3" />
  </Svg>
);
