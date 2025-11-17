import React from 'react';
import { Svg, Path, Circle } from 'react-native-svg';

export const PizzaSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Part de pizza */}
    <Path
      d="M 150 240 L 60 60 Q 150 50 240 60 Z"
      fill="white"
      stroke="black"
      strokeWidth="4"
    />
    {/* Croûte */}
    <Path
      d="M 60 60 Q 150 50 240 60"
      fill="white"
      stroke="black"
      strokeWidth="8"
    />
    {/* Pepperoni */}
    <Circle cx="130" cy="110" r="12" fill="white" stroke="black" strokeWidth="3" />
    <Circle cx="170" cy="120" r="12" fill="white" stroke="black" strokeWidth="3" />
    <Circle cx="150" cy="150" r="12" fill="white" stroke="black" strokeWidth="3" />
    <Circle cx="120" cy="170" r="12" fill="white" stroke="black" strokeWidth="3" />
    <Circle cx="170" cy="180" r="12" fill="white" stroke="black" strokeWidth="3" />
    <Circle cx="145" cy="200" r="12" fill="white" stroke="black" strokeWidth="3" />
  </Svg>
);
