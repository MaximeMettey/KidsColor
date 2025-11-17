import React from 'react';
import { Svg, Circle, Path } from 'react-native-svg';

export const BallSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Ballon */}
    <Circle cx="150" cy="150" r="90" fill="white" stroke="black" strokeWidth="4" />
    {/* Motifs */}
    <Path
      d="M 150 60 Q 180 90 180 150 Q 180 210 150 240"
      fill="none"
      stroke="black"
      strokeWidth="3"
    />
    <Path
      d="M 150 60 Q 120 90 120 150 Q 120 210 150 240"
      fill="none"
      stroke="black"
      strokeWidth="3"
    />
    <Path
      d="M 60 150 Q 90 120 150 120 Q 210 120 240 150"
      fill="none"
      stroke="black"
      strokeWidth="3"
    />
    <Path
      d="M 60 150 Q 90 180 150 180 Q 210 180 240 150"
      fill="none"
      stroke="black"
      strokeWidth="3"
    />
  </Svg>
);
