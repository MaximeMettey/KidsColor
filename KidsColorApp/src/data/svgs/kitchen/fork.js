import React from 'react';
import { Svg, Rect, Path } from 'react-native-svg';

export const ForkSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Dent gauche */}
    <Rect x="110" y="50" width="12" height="90" rx="6" fill="white" stroke="black" strokeWidth="3" />
    {/* Dent milieu gauche */}
    <Rect x="132" y="50" width="12" height="90" rx="6" fill="white" stroke="black" strokeWidth="3" />
    {/* Dent milieu droit */}
    <Rect x="154" y="50" width="12" height="90" rx="6" fill="white" stroke="black" strokeWidth="3" />
    {/* Dent droite */}
    <Rect x="176" y="50" width="12" height="90" rx="6" fill="white" stroke="black" strokeWidth="3" />
    {/* Base des dents */}
    <Rect x="110" y="130" width="78" height="20" fill="white" stroke="black" strokeWidth="4" />
    {/* Manche */}
    <Rect x="140" y="145" width="20" height="120" rx="10" fill="white" stroke="black" strokeWidth="4" />
  </Svg>
);
