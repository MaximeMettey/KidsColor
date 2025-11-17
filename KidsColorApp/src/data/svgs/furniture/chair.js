import React from 'react';
import { Svg, Rect, Path } from 'react-native-svg';

export const ChairSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Dossier */}
    <Rect x="90" y="60" width="120" height="15" fill="white" stroke="black" strokeWidth="4" />
    {/* Montants dossier */}
    <Rect x="90" y="75" width="15" height="60" fill="white" stroke="black" strokeWidth="3" />
    <Rect x="195" y="75" width="15" height="60" fill="white" stroke="black" strokeWidth="3" />
    {/* Assise */}
    <Rect x="80" y="135" width="140" height="20" fill="white" stroke="black" strokeWidth="4" />
    {/* Pied avant gauche */}
    <Rect x="85" y="155" width="12" height="90" fill="white" stroke="black" strokeWidth="3" />
    {/* Pied avant droit */}
    <Rect x="203" y="155" width="12" height="90" fill="white" stroke="black" strokeWidth="3" />
    {/* Pied arrière gauche */}
    <Rect x="90" y="135" width="12" height="50" fill="white" stroke="black" strokeWidth="3" />
    {/* Pied arrière droit */}
    <Rect x="198" y="135" width="12" height="50" fill="white" stroke="black" strokeWidth="3" />
  </Svg>
);
