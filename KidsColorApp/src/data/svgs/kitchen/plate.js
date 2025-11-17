import React from 'react';
import { Svg, Circle, Ellipse } from 'react-native-svg';

export const PlateSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Bord extérieur */}
    <Circle cx="150" cy="150" r="90" fill="white" stroke="black" strokeWidth="4" />
    {/* Bord intérieur */}
    <Circle cx="150" cy="150" r="70" fill="white" stroke="black" strokeWidth="3" />
    {/* Centre (légèrement en perspective) */}
    <Ellipse cx="150" cy="150" rx="50" ry="45" fill="white" stroke="black" strokeWidth="2" />
  </Svg>
);
