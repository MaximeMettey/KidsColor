import React from 'react';
import { Svg, Path } from 'react-native-svg';

export const StarSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Étoile à 5 branches */}
    <Path
      d="M 150 40 L 175 115 L 255 115 L 190 165 L 215 240 L 150 190 L 85 240 L 110 165 L 45 115 L 125 115 Z"
      fill="white"
      stroke="black"
      strokeWidth="4"
    />
  </Svg>
);
