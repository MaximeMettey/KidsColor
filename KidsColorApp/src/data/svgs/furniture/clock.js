import React from 'react';
import { Svg, Circle, Path, Rect } from 'react-native-svg';

export const ClockSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Cadran */}
    <Circle cx="150" cy="150" r="80" fill="white" stroke="black" strokeWidth="4" />
    {/* Chiffres (marqueurs) */}
    <Circle cx="150" cy="80" r="5" fill="black" />
    <Circle cx="210" cy="110" r="5" fill="black" />
    <Circle cx="220" cy="150" r="5" fill="black" />
    <Circle cx="210" cy="190" r="5" fill="black" />
    <Circle cx="150" cy="220" r="5" fill="black" />
    <Circle cx="90" cy="190" r="5" fill="black" />
    <Circle cx="80" cy="150" r="5" fill="black" />
    <Circle cx="90" cy="110" r="5" fill="black" />
    {/* Aiguille des heures */}
    <Path
      d="M 150 150 L 150 110"
      stroke="black"
      strokeWidth="5"
      strokeLinecap="round"
    />
    {/* Aiguille des minutes */}
    <Path
      d="M 150 150 L 185 150"
      stroke="black"
      strokeWidth="4"
      strokeLinecap="round"
    />
    {/* Centre */}
    <Circle cx="150" cy="150" r="8" fill="black" />
  </Svg>
);
