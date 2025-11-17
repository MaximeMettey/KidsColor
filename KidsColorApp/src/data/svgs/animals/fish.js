import React from 'react';
import { Svg, Path, Circle, Ellipse } from 'react-native-svg';

export const FishSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Corps */}
    <Ellipse cx="150" cy="150" rx="80" ry="50" fill="white" stroke="black" strokeWidth="4" />
    {/* Queue */}
    <Path
      d="M 230 150 L 270 120 L 270 180 Z"
      fill="white"
      stroke="black"
      strokeWidth="4"
    />
    {/* Nageoire dorsale */}
    <Path
      d="M 140 100 L 150 60 L 160 100 Z"
      fill="white"
      stroke="black"
      strokeWidth="4"
    />
    {/* Nageoire ventrale */}
    <Path
      d="M 140 200 L 150 240 L 160 200 Z"
      fill="white"
      stroke="black"
      strokeWidth="4"
    />
    {/* Œil */}
    <Circle cx="100" cy="140" r="15" fill="white" stroke="black" strokeWidth="3" />
    <Circle cx="100" cy="140" r="7" fill="black" />
    {/* Bouche */}
    <Path
      d="M 70 150 Q 75 155 80 150"
      fill="none"
      stroke="black"
      strokeWidth="3"
    />
    {/* Écailles */}
    <Circle cx="120" cy="150" r="8" fill="none" stroke="black" strokeWidth="2" />
    <Circle cx="145" cy="150" r="8" fill="none" stroke="black" strokeWidth="2" />
    <Circle cx="170" cy="150" r="8" fill="none" stroke="black" strokeWidth="2" />
  </Svg>
);
